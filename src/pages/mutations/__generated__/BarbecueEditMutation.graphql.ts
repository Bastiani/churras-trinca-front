/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type BarbecueEditInput = {
    readonly id: string;
    readonly date?: string | null;
    readonly description?: string | null;
    readonly observation?: string | null;
    readonly clientMutationId?: string | null;
};
export type BarbecueEditMutationVariables = {
    readonly input: BarbecueEditInput;
};
export type BarbecueEditMutationResponse = {
    readonly BarbecueEditMutation: {
        readonly error: string | null;
        readonly barbecue: {
            readonly id: string;
            readonly _id: string | null;
            readonly date: string;
            readonly description: string;
            readonly observation: string | null;
            readonly total: number | null;
        } | null;
    } | null;
};
export type BarbecueEditMutation = {
    readonly response: BarbecueEditMutationResponse;
    readonly variables: BarbecueEditMutationVariables;
};



/*
mutation BarbecueEditMutation(
  $input: BarbecueEditInput!
) {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "BarbecueEditInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "BarbecueEditMutation",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "BarbecueEditPayload",
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
        "kind": "LinkedField",
        "alias": null,
        "name": "barbecue",
        "storageKey": null,
        "args": null,
        "concreteType": "Barbecue",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "_id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "date",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "observation",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "total",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "BarbecueEditMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "BarbecueEditMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "BarbecueEditMutation",
    "id": null,
    "text": "mutation BarbecueEditMutation(\n  $input: BarbecueEditInput!\n) {\n  BarbecueEditMutation(input: $input) {\n    error\n    barbecue {\n      id\n      _id\n      date\n      description\n      observation\n      total\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '09c34c5c9af71ce73f675df0548f9f41';
export default node;
