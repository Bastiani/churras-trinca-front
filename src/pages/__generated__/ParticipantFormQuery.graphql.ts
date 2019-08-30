/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type ParticipantForm_query$ref = any;
export type ParticipantFormQueryVariables = {};
export type ParticipantFormQueryResponse = {
    readonly " $fragmentRefs": ParticipantForm_query$ref;
};
export type ParticipantFormQuery = {
    readonly response: ParticipantFormQueryResponse;
    readonly variables: ParticipantFormQueryVariables;
};



/*
query ParticipantFormQuery {
  ...ParticipantForm_query
}

fragment ParticipantForm_query on Query {
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
    "name": "ParticipantFormQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ParticipantForm_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ParticipantFormQuery",
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
    "name": "ParticipantFormQuery",
    "id": null,
    "text": "query ParticipantFormQuery {\n  ...ParticipantForm_query\n}\n\nfragment ParticipantForm_query on Query {\n  me {\n    id\n    _id\n    name\n    email\n  }\n}\n",
    "metadata": {}
  }
};
(node as any).hash = 'c06202ab1496ccfb91a96730e9150358';
export default node;
