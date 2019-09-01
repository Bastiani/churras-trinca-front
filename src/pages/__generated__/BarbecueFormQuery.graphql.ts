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
  },
  "params": {
    "operationKind": "query",
    "name": "BarbecueFormQuery",
    "id": null,
    "text": "query BarbecueFormQuery(\n  $id: ID!\n) {\n  ...BarbecueForm_query_1Bmzm5\n}\n\nfragment BarbecueForm_query_1Bmzm5 on Query {\n  barbecue(id: $id) {\n    id\n    _id\n    date\n    description\n    observation\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '21a5ce8c18413848bda4e8eff1bc058e';
export default node;
