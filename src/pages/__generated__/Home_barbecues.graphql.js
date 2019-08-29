/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Home_barbecues$ref: FragmentReference;
declare export opaque type Home_barbecues$fragmentType: Home_barbecues$ref;
export type Home_barbecues = {|
  +barbecues: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: {|
        +id: string,
        +_id: ?string,
        +date: string,
        +description: string,
        +observation: string,
        +participants: {|
          +edges: $ReadOnlyArray<?{|
            +node: {|
              +participant: ?{|
                +name: ?string
              |},
              +total: ?number,
            |}
          |}>
        |},
        +total: ?number,
      |}
    |}>
  |},
  +$refType: Home_barbecues$ref,
|};
export type Home_barbecues$data = Home_barbecues;
export type Home_barbecues$key = {
  +$data?: Home_barbecues$data,
  +$fragmentRefs: Home_barbecues$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "total",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Home_barbecues",
  "type": "Query",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "barbecues"
        ]
      }
    ]
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "barbecues",
      "name": "__Home_barbecues_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "BarbecueConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "BarbecueEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
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
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "participants",
                  "storageKey": null,
                  "args": null,
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
                                }
                              ]
                            },
                            (v0/*: any*/)
                          ]
                        }
                      ]
                    }
                  ]
                },
                (v0/*: any*/),
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e0669daae8e69f1b2e16c3d495c93d17';
module.exports = node;
