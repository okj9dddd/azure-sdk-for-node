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
 * The category1 score details of the text. <a
 * href="https://aka.ms/textClassifyCategories">Click here</a> for more details
 * on category classification.
 *
 */
class ClassificationCategory1 {
  /**
   * Create a ClassificationCategory1.
   * @property {number} [score] The category1 score.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ClassificationCategory1
   *
   * @returns {object} metadata of ClassificationCategory1
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Classification_Category1',
      type: {
        name: 'Composite',
        className: 'ClassificationCategory1',
        modelProperties: {
          score: {
            required: false,
            serializedName: 'Score',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ClassificationCategory1;
