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
 * A forecast resource.
 *
 * @extends models['Resource']
 */
class Forecast extends models['Resource'] {
  /**
   * Create a Forecast.
   * @member {string} [usageDate] The usage date of the forecast.
   * @member {string} [grain] The granularity of forecast. Possible values
   * include: 'Daily', 'Monthly', 'Yearly'
   * @member {number} [charge] The amount of charge
   * @member {string} [currency] The ISO currency in which the meter is
   * charged, for example, USD.
   * @member {string} [chargeType] The type of the charge. Could be actual or
   * forecast. Possible values include: 'Actual', 'Forecast'
   * @member {array} [confidenceLevels] The details about the forecast
   * confidence levels. This is populated only when chargeType is Forecast.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Forecast
   *
   * @returns {object} metadata of Forecast
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Forecast',
      type: {
        name: 'Composite',
        className: 'Forecast',
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
            required: false,
            readOnly: true,
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
          },
          tags: {
            required: false,
            readOnly: true,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          usageDate: {
            required: false,
            readOnly: true,
            serializedName: 'properties.usageDate',
            type: {
              name: 'String'
            }
          },
          grain: {
            required: false,
            serializedName: 'properties.grain',
            type: {
              name: 'String'
            }
          },
          charge: {
            required: false,
            readOnly: true,
            serializedName: 'properties.charge',
            type: {
              name: 'Number'
            }
          },
          currency: {
            required: false,
            readOnly: true,
            serializedName: 'properties.currency',
            type: {
              name: 'String'
            }
          },
          chargeType: {
            required: false,
            serializedName: 'properties.chargeType',
            type: {
              name: 'String'
            }
          },
          confidenceLevels: {
            required: false,
            readOnly: true,
            serializedName: 'properties.confidenceLevels',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ForecastPropertiesConfidenceLevelsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'ForecastPropertiesConfidenceLevelsItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Forecast;
