/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type App_query$ref = any;
export type AppRefetchQueryVariables = {};
export type AppRefetchQueryResponse = {
    readonly " $fragmentRefs": App_query$ref;
};
export type AppRefetchQuery = {
    readonly response: AppRefetchQueryResponse;
    readonly variables: AppRefetchQueryVariables;
};



/*
query AppRefetchQuery {
  ...App_query
}

fragment App_query on Query {
  me {
    id
    _id
    name
    email
  }
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "App_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppRefetchQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
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
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppRefetchQuery",
    "id": null,
    "text": "query AppRefetchQuery {\n  ...App_query\n}\n\nfragment App_query on Query {\n  me {\n    id\n    _id\n    name\n    email\n  }\n}\n",
    "metadata": {}
  }
};
(node as any).hash = '3457990d46de41b20137b8955a8bbb89';
export default node;
