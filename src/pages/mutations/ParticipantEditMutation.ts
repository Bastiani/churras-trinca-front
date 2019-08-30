import { commitMutation, graphql } from 'react-relay';

import Environment from '../../relay/createRelayEnvironment';

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

const environment = Environment();

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
