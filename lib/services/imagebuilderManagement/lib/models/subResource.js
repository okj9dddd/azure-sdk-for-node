/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The Sub Resource model definition.
 *
 */
class SubResource {
  /**
   * Create a SubResource.
   * @property {string} [id] Resource Id
   * @property {string} name Resource name
   * @property {string} [type] Resource type
   */
  constructor() {
  }

  /**
   * Defines the metadata of SubResource
   *
   * @returns {object} metadata of SubResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SubResource',
      type: {
        name: 'Composite',
        className: 'SubResource',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SubResource;