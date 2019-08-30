/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type BarbecueAddInput = {
    readonly date: string;
    readonly description: string;
    readonly observation?: string | null;
    readonly active?: boolean | null;
    readonly clientMutationId?: string | null;
};
export type BarbecueAddMutationVariables = {
    readonly input: BarbecueAddInput;
};
export type BarbecueAddMutationResponse = {
    readonly BarbecueAddMutation: {
        readonly error: string | null;
        readonly barbecueEdge: {
            readonly node: {
                readonly id: string;
                readonly _id: string | null;
                readonly date: string;
                readonly description: string;
                readonly observation: string | null;
            };
        } | null;
    } | null;
};
export type BarbecueAddMutation = {
    readonly response: BarbecueAddMutationResponse;
    readonly variables: BarbecueAddMutationVariables;
};



/*
mutation BarbecueAddMutation(
  $input: BarbecueAddInput!
) {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "BarbecueAddInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "BarbecueAddMutation",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "BarbecueAddPayload",
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
        "name": "barbecueEdge",
        "storageKey": null,
        "args": null,
        "concreteType": "BarbecueEdge",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
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
              }
            ]
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
    "name": "BarbecueAddMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "BarbecueAddMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "BarbecueAddMutation",
    "id": null,
    "text": "mutation BarbecueAddMutation(\n  $input: BarbecueAddInput!\n) {\n  BarbecueAddMutation(input: $input) {\n    error\n    barbecueEdge {\n      node {\n        id\n        _id\n        date\n        description\n        observation\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '72d551794be1cde44a76090421440017';
export default node;
