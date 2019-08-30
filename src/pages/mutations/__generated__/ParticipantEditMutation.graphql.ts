/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type ParticipantEditInput = {
    readonly id: string;
    readonly participant?: string | null;
    readonly barbecue?: string | null;
    readonly total?: number | null;
    readonly active?: boolean | null;
    readonly clientMutationId?: string | null;
};
export type ParticipantEditMutationVariables = {
    readonly input: ParticipantEditInput;
};
export type ParticipantEditMutationResponse = {
    readonly ParticipantEditMutation: {
        readonly error: string | null;
        readonly participant: {
            readonly participant: {
                readonly name: string | null;
            } | null;
            readonly barbecue: {
                readonly description: string;
            } | null;
            readonly total: number | null;
            readonly active: boolean | null;
        } | null;
    } | null;
};
export type ParticipantEditMutation = {
    readonly response: ParticipantEditMutationResponse;
    readonly variables: ParticipantEditMutationVariables;
};



/*
mutation ParticipantEditMutation(
  $input: ParticipantEditInput!
) {
  ParticipantEditMutation(input: $input) {
    error
    participant {
      participant {
        name
        id
      }
      barbecue {
        description
        id
      }
      total
      active
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ParticipantEditInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "error",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "total",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "active",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ParticipantEditMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "ParticipantEditMutation",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ParticipantEditPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "participant",
            "storageKey": null,
            "args": null,
            "concreteType": "Participant",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "participant",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v3/*: any*/)
                ]
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
                  (v4/*: any*/)
                ]
              },
              (v5/*: any*/),
              (v6/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ParticipantEditMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "ParticipantEditMutation",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ParticipantEditPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "participant",
            "storageKey": null,
            "args": null,
            "concreteType": "Participant",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "participant",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v7/*: any*/)
                ]
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
                  (v4/*: any*/),
                  (v7/*: any*/)
                ]
              },
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "ParticipantEditMutation",
    "id": null,
    "text": "mutation ParticipantEditMutation(\n  $input: ParticipantEditInput!\n) {\n  ParticipantEditMutation(input: $input) {\n    error\n    participant {\n      participant {\n        name\n        id\n      }\n      barbecue {\n        description\n        id\n      }\n      total\n      active\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '53869a5a8b9bc80f6e9c58c8b87ddb5a';
export default node;
