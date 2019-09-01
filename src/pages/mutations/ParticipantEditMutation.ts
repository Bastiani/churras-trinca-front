import { commitMutation, graphql } from 'react-relay';

import environment from '../../relay/createRelayEnvironment';

const mutation = graphql`
  mutation ParticipantEditMutation($input: ParticipantEditInput!) {
    ParticipantEditMutation(input: $input) {
      error
      participant {
        participant {
          name
        }
        barbecue {
          description
        }
        total
        active
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
    onError
  });
}

export default { commit };
