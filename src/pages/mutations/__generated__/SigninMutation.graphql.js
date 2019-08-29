/**
 * @flow
 * @relayHash deb12850eddf67e7159ecb42fa878bf0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserLoginWithEmailInput = {|
  email: string,
  password: string,
  clientMutationId?: ?string,
|};
export type SigninMutationVariables = {|
  input: UserLoginWithEmailInput
|};
export type SigninMutationResponse = {|
  +UserLoginWithEmail: ?{|
    +error: ?string,
    +token: ?string,
  |}
|};
export type SigninMutation = {|
  variables: SigninMutationVariables,
  response: SigninMutationResponse,
|};
*/


/*
mutation SigninMutation(
  $input: UserLoginWithEmailInput!
) {
  UserLoginWithEmail(input: $input) {
    error
    token
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UserLoginWithEmailInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "UserLoginWithEmail",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UserLoginWithEmailPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "error",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SigninMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SigninMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SigninMutation",
    "id": null,
    "text": "mutation SigninMutation(\n  $input: UserLoginWithEmailInput!\n) {\n  UserLoginWithEmail(input: $input) {\n    error\n    token\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f5acc190248aac3b86ac286acc7c42f0';
module.exports = node;
