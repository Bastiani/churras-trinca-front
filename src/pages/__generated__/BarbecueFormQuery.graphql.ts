/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type BarbecueForm_query$ref = any;
export type BarbecueFormQueryVariables = {
    readonly id: string;
};
export type BarbecueFormQueryResponse = {
    readonly " $fragmentRefs": BarbecueForm_query$ref;
};
export type BarbecueFormQuery = {
    readonly response: BarbecueFormQueryResponse;
    readonly variables: BarbecueFormQueryVariables;
};



/*
query BarbecueFormQuery(
  $id: ID!
) {
  ...BarbecueForm_query_1Bmzm5
}

fragment BarbecueForm_query_1Bmzm5 on Query {
  barbecue(id: $id) {
    id
    _id
    date
    description
    observation
  }
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
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
},
v4 = [
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "BarbecueFormQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "BarbecueForm_query",
        "args": (v1/*: any*/)
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "BarbecueFormQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "barbecue",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Barbecue",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "participants",
        "storageKey": null,
        "args": (v4/*: any*/),
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
                  (v3/*: any*/),
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
        "args": (v4/*: any*/),
        "handle": "connection",
        "key": "BarbecueForm_participants",
        "filters": []
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "BarbecueFormQuery",
    "id": null,
    "text": "query BarbecueFormQuery(\n  $id: ID!\n) {\n  ...BarbecueForm_query_1Bmzm5\n}\n\nfragment BarbecueForm_query_1Bmzm5 on Query {\n  barbecue(id: $id) {\n    id\n    _id\n    date\n    description\n    observation\n  }\n  participants(barbecueIdArgs: $id, first: 2147483647) {\n    edges {\n      node {\n        id\n        _id\n        participant {\n          name\n          id\n        }\n        total\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '21a5ce8c18413848bda4e8eff1bc058e';
export default node;
