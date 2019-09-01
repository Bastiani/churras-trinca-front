import React from 'react';
import { Button } from 'antd';
import { Formik } from 'formik';
import * as yup from 'yup';
import { graphql, createFragmentContainer } from 'react-relay';
import idx from 'idx';
import styled from 'styled-components';

import InputFormik from '../components/Input/InputFormik';
import { openNotificationWithIcon } from '../components/Notification';
import ParticipantAdd from './mutations/ParticipantAddMutation';
// import ParticipantEdit from './mutations/ParticipantEditMutation';
import createQueryRenderer from '../relay/createQueryRenderer';

import { ParticipantForm_query as ParticipantFormQuery } from './__generated__/ParticipantForm_query.graphql';

interface IProps {
  query: ParticipantFormQuery;
  barbecueId: string;
  actionCancel?: (event?: any) => void;
}

const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 12px;
`;

const ButtonStyled = styled(Button)`
  margin-right: 6px;
`;

const validationSchema = () =>
  yup.object().shape({
    total: yup.string().required('Total é obrigatório!')
  });

const ParticipantForm = ({ query, barbecueId, actionCancel }: IProps) => {
  return (
    <Formik
      initialValues={{
        participant: idx(query, _ => _.me.id) || '',
        barbecue: barbecueId,
        total: ''
      }}
      validationSchema={validationSchema()}
      onSubmit={(values, { setSubmitting }) => {
        const onCompleted = (res: any) => {
          setSubmitting(false);
          const response = res && res.ParticipantAddMutation;

          if (response && response.error) {
            console.log('Erro', 'Erro na operação');
            openNotificationWithIcon(
              'error',
              'Erro na operação',
              response.error
            );
          } else {
            actionCancel && actionCancel();
          }
        };

        const onError = () => {
          setSubmitting(false);
          console.log('Erro', 'Erro na operação');
          openNotificationWithIcon(
            'error',
            'Erro na operação',
            'Erro na operação'
          );
        };

        ParticipantAdd.commit(values, onCompleted, onError);

        setSubmitting(false);
      }}
      render={({ handleSubmit }) => (
        <>
          {!idx(query, _ => _.me.id) && (
            <InputFormik
              label="Participant"
              name="participant"
              placeholder="Participant"
            />
          )}
          <InputFormik
            type="number"
            label="Total"
            name="total"
            placeholder="Total"
          />
          <ActionContainer>
            <ButtonStyled key="back" onClick={actionCancel}>
              Cancelar
            </ButtonStyled>
            <ButtonStyled type="primary" onClick={() => handleSubmit()}>
              Salvar
            </ButtonStyled>
          </ActionContainer>
        </>
      )}
    />
  );
};

const ParticipantFragmentContainer = createFragmentContainer(ParticipantForm, {
  query: graphql`
    fragment ParticipantForm_query on Query {
      me {
        id
        _id
        name
        email
      }
    }
  `
});

export default createQueryRenderer(
  ParticipantFragmentContainer,
  ParticipantForm,
  {
    query: graphql`
      query ParticipantFormQuery {
        ...ParticipantForm_query
      }
    `
  }
);
