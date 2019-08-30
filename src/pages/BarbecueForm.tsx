import React, { useState } from 'react';
import { Button } from '@smooth-ui/core-sc';
import { Formik } from 'formik';
import * as yup from 'yup';
import { withRouter } from 'react-router-dom';
import { graphql, createFragmentContainer } from 'react-relay';
import idx from 'idx';

import { isLoggedIn } from '../security/authentication';

import InputFormik from '../components/InputFormik';
import TextAreaFormik from '../components/TextAreaFormik';
import DatePickerFormik from '../components/DatePickerFormik';
import Modal from '../components/Modal';
import ParticipantForm from './ParticipantForm';

import BarbecueAdd from './mutations/BarbecueAddMutation';
import BarbecueEdit from './mutations/BarbecueEditMutation';
import createQueryRenderer from '../relay/createQueryRenderer';

const validationSchema = () =>
  yup.object().shape({
    date: yup.date().required('Data é obrigatório!'),
    description: yup.string().required('Descrição é obrigatório!')
  });

const validIsLoggedIn = () =>
  !isLoggedIn() ? alert('Para participar do churras faça o login') : true;

const Barbecue = ({ match, query }: any) => {
  const [showDialog, setShowDialog] = useState(false);
  const editMode = !!idx(match, _ => _.params.id);

  return (
    <Formik
      initialValues={{
        date: idx(query, _ => _.barbecue.date) || '',
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
            {/* <DatePickerFormik label="Data" name="date" /> */}
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
            <ul>
              {query &&
                query.participants &&
                query.participants.edges.map(({ node }: any) => (
                  <li key={node.id}>
                    {node.participant.name} - {node.total}
                  </li>
                ))}
            </ul>
            <Button
              variant="success"
              onClick={() => validIsLoggedIn() && setShowDialog(true)}
            >
              Participar
            </Button>
            <Button variant="success" onClick={handleSubmit}>
              Salvar
            </Button>
            <Modal showDialog={showDialog} setShowDialog={setShowDialog}>
              <ParticipantForm barbecueId={barbecueId} />
            </Modal>
          </>
        );
      }}
    />
  );
};

const BarbecueFragmentContainer = createFragmentContainer(Barbecue, {
  query: graphql`
    fragment BarbecueForm_query on Query
      @argumentDefinitions(id: { type: "ID!" }) {
      barbecue(id: $id) {
        id
        _id
        date
        description
        observation
        # participants(
        #   first: 2147483647 # max GraphQLInt
        # ) @connection(key: "BarbecueForm_participants", filters: []) {
        #   edges {
        #     node {
        #       id
        #       _id
        #       participant {
        #         name
        #       }
        #       total
        #     }
        #   }
        # }
      }
      participants(barbecueIdArgs: $id, first: 2147483647)
        @connection(key: "BarbecueForm_participants", filters: []) {
        edges {
          node {
            id
            _id
            participant {
              name
            }
            total
          }
        }
      }
    }
  `
});

export default createQueryRenderer(
  BarbecueFragmentContainer,
  withRouter(Barbecue),
  {
    query: graphql`
      query BarbecueFormQuery($id: ID!) {
        ...BarbecueForm_query @arguments(id: $id)
      }
    `,
    queriesParams: ({ match: { params } }: any) => ({ id: params.id || '' })
  }
);
