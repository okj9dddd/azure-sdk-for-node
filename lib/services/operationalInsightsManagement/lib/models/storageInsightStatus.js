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
 * The status of the storage insight.
 *
 */
class StorageInsightStatus {
  /**
   * Create a StorageInsightStatus.
   * @member {string} state The state of the storage insight connection to the
   * workspace. Possible values include: 'OK', 'ERROR'
   * @member {string} [description] Description of the state of the storage
   * insight.
   */
  constructor() {
  }

  /**
   * Defines the metadata of StorageInsightStatus
   *
   * @returns {object} metadata of StorageInsightStatus
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StorageInsightStatus',
      type: {
        name: 'Composite',
        className: 'StorageInsightStatus',
        modelProperties: {
          state: {
            required: true,
            serializedName: 'state',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = StorageInsightStatus;