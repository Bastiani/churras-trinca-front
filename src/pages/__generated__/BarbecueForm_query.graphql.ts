/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type BarbecueForm_query$ref = any;
export type BarbecueForm_query = {
    readonly barbecue: {
        readonly id: string;
        readonly _id: string | null;
        readonly date: string;
        readonly description: string;
        readonly observation: string | null;
    } | null;
    readonly " $refType": BarbecueForm_query$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "BarbecueForm_query",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "id",
      "type": "ID!",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "barbecue",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "id"
        }
      ],
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
};
(node as any).hash = 'd7d46e54363e04e8d5cbdb718f46862c';
export default node;
