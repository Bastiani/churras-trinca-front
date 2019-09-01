import React from 'react';
import { graphql, createRefetchContainer } from 'react-relay';
import { Button, Popconfirm } from 'antd';

import createQueryRenderer from '../relay/createQueryRenderer';
import { BRL } from '../utils/money';

import ParticipantEdit from '../pages/mutations/ParticipantEditMutation';
import { ParticipantsList_query as ParticipantsListQuery } from './__generated__/ParticipantsList_query.graphql';

interface IProps {
  barbecueId: string;
  query: ParticipantsListQuery;
  relay: any;
}

const ParticipantsList = (props: IProps) => {
  const { query, relay } = props;

  const refetch = () => {
    const refetchVariables = (fragmentVariables: any) => ({
      ...fragmentVariables
    });

    relay.refetch(
      refetchVariables,
      null,
      () => {
        console.log('Refetch done');
      },
      { force: true }
    );
  };

  const onCompleted = (res: any) => {
    const response = res && res.ParticipantEditMutation;

    if (response && response.error) {
      console.log('Erro', 'Erro na operação', response.error);
    } else {
      refetch();
    }
  };

  const onError = () => {
    console.log('Erro', 'Erro na operação');
  };

  const handleDeleteClick = (id: string) =>
    ParticipantEdit.commit({ id, active: false }, onCompleted, onError);

  return (
    <ul>
      {query &&
        query.participants &&
        query.participants.edges.map(({ node }: any) => (
          <li key={node.id}>
            <Popconfirm
              title="Quer mesmo remover?"
              onConfirm={() => handleDeleteClick(node.id)}
              okText="Sim"
              cancelText="Não"
            >
              <Button type="primary" shape="circle" icon="delete" />
            </Popconfirm>{' '}
            - {node.participant.name} - {BRL(node.total).format(true)}
          </li>
        ))}
    </ul>
  );
};

const ParticipantsListRefetchContainer = createRefetchContainer(
  ParticipantsList,
  {
    query: graphql`
      fragment ParticipantsList_query on Query
        @argumentDefinitions(id: { type: "ID!" }) {
        participants(barbecueIdArgs: $id, first: 2147483647)
          @connection(key: "ParticipantsList_participants", filters: []) {
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
  },
  graphql`
    query ParticipantsListRefetchQuery($id: ID!) {
      ...ParticipantsList_query @arguments(id: $id)
    }
  `
);

export default createQueryRenderer(
  ParticipantsListRefetchContainer,
  ParticipantsList,
  {
    query: graphql`
      query ParticipantsListQuery($id: ID!) {
        ...ParticipantsList_query @arguments(id: $id)
      }
    `,
    queriesParams: ({ barbecueId }: any) => ({ id: barbecueId || '' })
  }
);
