import { commitMutation, graphql } from 'react-relay';

import environment from '../../relay/createRelayEnvironment';

const mutation = graphql`
  mutation SigninMutation($input: UserLoginWithEmailInput!) {
    UserLoginWithEmail(input: $input) {
      error
      token
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
