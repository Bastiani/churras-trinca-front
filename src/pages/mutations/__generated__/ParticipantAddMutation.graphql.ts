/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type ParticipantAddInput = {
    readonly participant?: string | null;
    readonly barbecue?: string | null;
    readonly total?: number | null;
    readonly active?: boolean | null;
    readonly clientMutationId?: string | null;
};
export type ParticipantAddMutationVariables = {
    readonly input: ParticipantAddInput;
};
export type ParticipantAddMutationResponse = {
    readonly ParticipantAddMutation: {
        readonly error: string | null;
        readonly participantEdge: {
            readonly node: {
                readonly id: string;
                readonly _id: string | null;
                readonly participant: {
                    readonly name: string | null;
                } | null;
                readonly barbecue: {
                    readonly description: string;
                } | null;
                readonly total: number | null;
            };
        } | null;
    } | null;
};
export type ParticipantAddMutation = {
    readonly response: ParticipantAddMutationResponse;
    readonly variables: ParticipantAddMutationVariables;
};



/*
mutation ParticipantAddMutation(
  $input: ParticipantAddInput!
) {
  ParticipantAddMutation(input: $input) {
    error
    participantEdge {
      node {
        id
        _id
        participant {
          name
          id
        }
        barbecue {
          description
          id
        }
        total
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
    "type": "ParticipantAddInput!",
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "total",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ParticipantAddMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "ParticipantAddMutation",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ParticipantAddPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "participantEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "ParticipantEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Participant",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "participant",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/)
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
                      (v6/*: any*/)
                    ]
                  },
                  (v7/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ParticipantAddMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "ParticipantAddMutation",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ParticipantAddPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "participantEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "ParticipantEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Participant",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "participant",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
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
                      (v6/*: any*/),
                      (v3/*: any*/)
                    ]
                  },
                  (v7/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "ParticipantAddMutation",
    "id": null,
    "text": "mutation ParticipantAddMutation(\n  $input: ParticipantAddInput!\n) {\n  ParticipantAddMutation(input: $input) {\n    error\n    participantEdge {\n      node {\n        id\n        _id\n        participant {\n          name\n          id\n        }\n        barbecue {\n          description\n          id\n        }\n        total\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c0602e62e64990cf4f563a8adc75e8a9';
export default node;
