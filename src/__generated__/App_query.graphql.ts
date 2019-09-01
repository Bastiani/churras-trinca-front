/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type App_query$ref = any;
export type App_query = {
    readonly me: {
        readonly id: string;
        readonly _id: string | null;
        readonly name: string | null;
        readonly email: string | null;
    } | null;
    readonly " $refType": App_query$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "App_query",
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
(node as any).hash = '49064065e401beb71bc2b490611c1f61';
export default node;
