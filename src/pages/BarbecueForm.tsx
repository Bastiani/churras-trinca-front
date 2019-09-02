import React, { useState } from 'react';
import { Button } from 'antd';
import { Formik } from 'formik';
import * as yup from 'yup';
import { withRouter } from 'react-router-dom';
import { graphql, createFragmentContainer } from 'react-relay';
import idx from 'idx';
import styled from 'styled-components';

import { validIsLoggedIn } from '../utils/validIsLoggedIn';

import InputFormik from '../components/Input/InputFormik';
import TextAreaFormik from '../components/Input/TextAreaFormik';
import DatePickerFormik from '../components/DatePicker/DatePickerFormik';
import Modal from '../components/Modal';
import ParticipantForm from './ParticipantForm';
import ParticipantsList from '../components/ParticipantsList';

import BarbecueAdd from './mutations/BarbecueAddMutation';
import BarbecueEdit from './mutations/BarbecueEditMutation';
import createQueryRenderer from '../relay/createQueryRenderer';

const ButtonStyled = styled(Button)`
  margin-right: 5px;
`;

const validationSchema = () =>
  yup.object().shape({
    date: yup.date().required('Data é obrigatório!'),
    description: yup.string().required('Descrição é obrigatório!')
  });

const BarbecueForm = ({ match, query, history }: any) => {
  const [showModal, setShowModal] = useState(false);
  const editMode = !!idx(match, _ => _.params.id);

  return (
    <Formik
      initialValues={{
        date: idx(query, _ => _.barbecue.date) || new Date(),
        description: idx(query, _ => _.barbecue.description) || '',
        observation: idx(query, _ => _.barbecue.observation) || ''
      }}
      validationSchema={validationSchema()}
      onSubmit={(values, { setSubmitting }) => {
        const onCompleted = (res: any) => {
          setSubmitting(false);
          const response =
            res && editMode
              ? res.BarbecueEditMutation
              : res.BarbecueAddMutation;

          if (response && response.error) {
            console.log('Erro', 'Erro na operação');
          } else {
            history.push('/');
          }
        };

        const onError = () => {
          setSubmitting(false);
          console.log('Erro', 'Erro na operação');
        };

        editMode
          ? BarbecueEdit.commit(
              { id: idx(match, _ => _.params.id), ...values },
              onCompleted,
              onError
            )
          : BarbecueAdd.commit(values, onCompleted, onError);
        setSubmitting(false);
      }}
      render={({ handleSubmit }) => {
        const barbecueId = idx(query, _ => _.barbecue.id) || '';
        return (
          <>
            {editMode && (
              <span>Agendado por {idx(query, _ => _.barbecue.user.name)}</span>
            )}
            <DatePickerFormik label="Data" name="date" />
            <InputFormik
              label="Descrição"
              name="description"
              placeholder="Descrição"
            />
            <TextAreaFormik
              label="Observação"
              name="observation"
              placeholder="Observação"
            />
            <ParticipantsList barbecueId={barbecueId} />
            <ButtonStyled
              type="primary"
              onClick={() =>
                validIsLoggedIn(
                  'error',
                  'É necessário fazer login para participar.'
                ) && setShowModal(true)
              }
              disabled={!editMode}
            >
              Participar
            </ButtonStyled>
            <ButtonStyled
              type="primary"
              onClick={() =>
                validIsLoggedIn('error', 'É necessário fazer login.') &&
                handleSubmit()
              }
            >
              Salvar
            </ButtonStyled>
            <Modal
              title="Adicionar participante"
              showModal={showModal}
              footer={null}
              closable={false}
            >
              <ParticipantForm
                barbecueId={barbecueId}
                setShowModal={setShowModal}
                actionCancel={() => setShowModal(false)}
              />
            </Modal>
          </>
        );
      }}
    />
  );
};

const BarbecueFragmentContainer = createFragmentContainer(BarbecueForm, {
  query: graphql`
    fragment BarbecueForm_query on Query
      @argumentDefinitions(id: { type: "ID!" }) {
      barbecue(id: $id) {
        id
        _id
        date
        description
        observation
        user {
          id
          _id
          name
        }
      }
    }
  `
});

export default createQueryRenderer(
  BarbecueFragmentContainer,
  withRouter(BarbecueForm),
  {
    query: graphql`
      query BarbecueFormQuery($id: ID!) {
        ...BarbecueForm_query @arguments(id: $id)
      }
    `,
    queriesParams: ({ match: { params } }: any) => ({ id: params.id || '' })
  }
);
