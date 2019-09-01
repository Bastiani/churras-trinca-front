/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type ParticipantsList_query$ref = any;
export type ParticipantsListRefetchQueryVariables = {
    readonly id: string;
};
export type ParticipantsListRefetchQueryResponse = {
    readonly " $fragmentRefs": ParticipantsList_query$ref;
};
export type ParticipantsListRefetchQuery = {
    readonly response: ParticipantsListRefetchQueryResponse;
    readonly variables: ParticipantsListRefetchQueryVariables;
};



/*
query ParticipantsListRefetchQuery(
  $id: ID!
) {
  ...ParticipantsList_query_1Bmzm5
}

fragment ParticipantsList_query_1Bmzm5 on Query {
  participants(barbecueIdArgs: $id, first: 2147483647) {
    edges {
      node {
        id
        _id
        participant {
          name
          id
        }
        total
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "barbecueIdArgs",
    "variableName": "id"
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 2147483647
  }
],
v2 = {
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
    "name": "ParticipantsListRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ParticipantsList_query",
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ParticipantsListRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "participants",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ParticipantConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ParticipantEdge",
            "plural": true,
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
                  (v2/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "_id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "participant",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                      },
                      (v2/*: any*/)
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "total",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfoExtended",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "participants",
        "args": (v1/*: any*/),
        "handle": "connection",
        "key": "ParticipantsList_participants",
        "filters": []
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ParticipantsListRefetchQuery",
    "id": null,
    "text": "query ParticipantsListRefetchQuery(\n  $id: ID!\n) {\n  ...ParticipantsList_query_1Bmzm5\n}\n\nfragment ParticipantsList_query_1Bmzm5 on Query {\n  participants(barbecueIdArgs: $id, first: 2147483647) {\n    edges {\n      node {\n        id\n        _id\n        participant {\n          name\n          id\n        }\n        total\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'bdc9a625387008e31ad858402d126480';
export default node;
