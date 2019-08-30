/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type UserLoginWithEmailInput = {
    readonly email: string;
    readonly password: string;
    readonly clientMutationId?: string | null;
};
export type SigninMutationVariables = {
    readonly input: UserLoginWithEmailInput;
};
export type SigninMutationResponse = {
    readonly UserLoginWithEmail: {
        readonly error: string | null;
        readonly token: string | null;
    } | null;
};
export type SigninMutation = {
    readonly response: SigninMutationResponse;
    readonly variables: SigninMutationVariables;
};



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

const node: ConcreteRequest = (function(){
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
(node as any).hash = 'f5acc190248aac3b86ac286acc7c42f0';
export default node;
