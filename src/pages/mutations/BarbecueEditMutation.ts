import { commitMutation, graphql } from 'react-relay';

import Environment from '../../relay/createRelayEnvironment';

const mutation = graphql`
  mutation BarbecueEditMutation($input: BarbecueEditInput!) {
    BarbecueEditMutation(input: $input) {
      error
      barbecue {
        id
        _id
        date
        description
        observation
        total
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
