import React from 'react';
import { Button } from '@smooth-ui/core-sc';
import { Formik } from 'formik';
import * as yup from 'yup';
import { graphql, createFragmentContainer } from 'react-relay';
import idx from 'idx';

import InputFormik from '../components/InputFormik';
import ParticipantAdd from './mutations/ParticipantAddMutation';
// import ParticipantEdit from './mutations/ParticipantEditMutation';
import createQueryRenderer from '../relay/createQueryRenderer';

import { ParticipantForm_query as ParticipantFormQuery } from './__generated__/ParticipantForm_query.graphql';

const validationSchema = () =>
  yup.object().shape({
    total: yup.string().required('Total é obrigatório!')
  });

interface IProps {
  query: ParticipantFormQuery;
  barbecueId: string;
}

const ParticipantForm = ({ query, barbecueId }: IProps) => {
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
          }
        };

        const onError = () => {
          setSubmitting(false);
          console.log('Erro', 'Erro na operação');
        };

        ParticipantAdd.commit(values, onCompleted, onError);

        setSubmitting(false);
      }}
      render={({ handleSubmit }) => (
        <>
          <InputFormik
            label="Participant"
            name="participant"
            placeholder="Participant"
          />
          <InputFormik
            type="number"
            label="Total"
            name="total"
            placeholder="Total"
          />
          <Button variant="success" onClick={handleSubmit}>
            Salvar
          </Button>
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
