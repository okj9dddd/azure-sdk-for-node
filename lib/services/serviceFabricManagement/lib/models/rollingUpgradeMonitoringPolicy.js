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
 * The policy used for monitoring the application upgrade
 *
 */
class RollingUpgradeMonitoringPolicy {
  /**
   * Create a RollingUpgradeMonitoringPolicy.
   * @member {string} [healthCheckWaitDuration]
   * @member {string} [healthCheckStableDuration]
   * @member {string} [healthCheckRetryTimeout]
   * @member {string} [upgradeTimeout]
   * @member {string} [upgradeDomainTimeout]
   */
  constructor() {
  }

  /**
   * Defines the metadata of RollingUpgradeMonitoringPolicy
   *
   * @returns {object} metadata of RollingUpgradeMonitoringPolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RollingUpgradeMonitoringPolicy',
      type: {
        name: 'Composite',
        className: 'RollingUpgradeMonitoringPolicy',
        modelProperties: {
          healthCheckWaitDuration: {
            required: false,
            serializedName: 'healthCheckWaitDuration',
            type: {
              name: 'String'
            }
          },
          healthCheckStableDuration: {
            required: false,
            serializedName: 'healthCheckStableDuration',
            type: {
              name: 'String'
            }
          },
          healthCheckRetryTimeout: {
            required: false,
            serializedName: 'healthCheckRetryTimeout',
            type: {
              name: 'String'
            }
          },
          upgradeTimeout: {
            required: false,
            serializedName: 'upgradeTimeout',
            type: {
              name: 'String'
            }
          },
          upgradeDomainTimeout: {
            required: false,
            serializedName: 'upgradeDomainTimeout',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RollingUpgradeMonitoringPolicy;
