import { commitMutation, graphql } from 'react-relay';

import environment from '../../relay/createRelayEnvironment';
import { connectionUpdater, ROOT_ID } from '../../relay/mutationUtils';

const mutation = graphql`
  mutation ParticipantAddMutation($input: ParticipantAddInput!) {
    ParticipantAddMutation(input: $input) {
      error
      participantEdge {
        node {
          id
          _id
          participant {
            name
          }
          barbecue {
            description
          }
          total
        }
      }
    }
  }
`;

function commit(
  input: object,
  onCompleted: (res: any) => void,
  onError: () => void
) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input
    },
    onCompleted,
    onError,
    updater: store => {
      // @ts-ignore
      const newEdge = store
        .getRootField('ParticipantAddMutation')
        .getLinkedRecord('participantEdge');
      connectionUpdater({
        store,
        parentId: ROOT_ID,
        connectionName: 'ParticipantsList_participants',
        edge: newEdge,
        before: true
      });
    }
  });
}

export default { commit };
