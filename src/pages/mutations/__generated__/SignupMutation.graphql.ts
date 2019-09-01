/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type UserRegisterWithEmailInput = {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly clientMutationId?: string | null;
};
export type SignupMutationVariables = {
    readonly input: UserRegisterWithEmailInput;
};
export type SignupMutationResponse = {
    readonly UserRegisterWithEmail: {
        readonly token: string | null;
        readonly error: string | null;
    } | null;
};
export type SignupMutation = {
    readonly response: SignupMutationResponse;
    readonly variables: SignupMutationVariables;
};



/*
mutation SignupMutation(
  $input: UserRegisterWithEmailInput!
) {
  UserRegisterWithEmail(input: $input) {
    token
    error
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UserRegisterWithEmailInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "UserRegisterWithEmail",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UserRegisterWithEmailPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "error",
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
    "name": "SignupMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SignupMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SignupMutation",
    "id": null,
    "text": "mutation SignupMutation(\n  $input: UserRegisterWithEmailInput!\n) {\n  UserRegisterWithEmail(input: $input) {\n    token\n    error\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '5603d1435dc2b878cb58218d7e34b0b5';
export default node;
