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

const models = require('./index');

/**
 * Base for all resource summaries.
 *
 * @extends models['Resource']
 */
class Summary extends models['Resource'] {
  /**
   * Create a Summary.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Summary
   *
   * @returns {object} metadata of Summary
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Summary',
      type: {
        name: 'Composite',
        className: 'Summary',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
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
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Summary;