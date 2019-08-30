/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type ParticipantForm_query$ref = any;
export type ParticipantForm_query = {
    readonly me: {
        readonly id: string;
        readonly _id: string | null;
        readonly name: string | null;
        readonly email: string | null;
    } | null;
    readonly " $refType": ParticipantForm_query$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ParticipantForm_query",
  "type": "Query",
  "metadata": null,
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
};
(node as any).hash = '69c5f1fc8824f097929f75db7ab2ec76';
export default node;
