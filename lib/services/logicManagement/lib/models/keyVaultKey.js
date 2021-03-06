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
 * The key vault key.
 *
 */
class KeyVaultKey {
  /**
   * Create a KeyVaultKey.
   * @property {string} [kid] The key id.
   * @property {object} [attributes] The key attributes.
   * @property {boolean} [attributes.enabled] Whether the key is enabled or
   * not.
   * @property {number} [attributes.created] When the key was created.
   * @property {number} [attributes.updated] When the key was updated.
   */
  constructor() {
  }

  /**
   * Defines the metadata of KeyVaultKey
   *
   * @returns {object} metadata of KeyVaultKey
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'KeyVaultKey',
      type: {
        name: 'Composite',
        className: 'KeyVaultKey',
        modelProperties: {
          kid: {
            required: false,
            serializedName: 'kid',
            type: {
              name: 'String'
            }
          },
          attributes: {
            required: false,
            serializedName: 'attributes',
            type: {
              name: 'Composite',
              className: 'KeyVaultKeyAttributes'
            }
          }
        }
      }
    };
  }
}

module.exports = KeyVaultKey;
