import { commitMutation, graphql } from 'react-relay';

import environment from '../../relay/createRelayEnvironment';

const mutation = graphql`
  mutation BarbecueAddMutation($input: BarbecueAddInput!) {
    BarbecueAddMutation(input: $input) {
      error
      barbecueEdge {
        node {
          id
          _id
          date
          description
          observation
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
    onError
  });
}

export default { commit };
