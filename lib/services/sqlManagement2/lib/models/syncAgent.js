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
 * An Azure SQL Database sync agent.
 *
 * @extends models['ProxyResource']
 */
class SyncAgent extends models['ProxyResource'] {
  /**
   * Create a SyncAgent.
   * @property {string} [syncAgentName] Name of the sync agent.
   * @property {string} [syncDatabaseId] ARM resource id of the sync database
   * in the sync agent.
   * @property {date} [lastAliveTime] Last alive time of the sync agent.
   * @property {string} [state] State of the sync agent. Possible values
   * include: 'Online', 'Offline', 'NeverConnected'
   * @property {boolean} [isUpToDate] If the sync agent version is up to date.
   * @property {date} [expiryTime] Expiration time of the sync agent version.
   * @property {string} [version] Version of the sync agent.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SyncAgent
   *
   * @returns {object} metadata of SyncAgent
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SyncAgent',
      type: {
        name: 'Composite',
        className: 'SyncAgent',
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
          syncAgentName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.name',
            type: {
              name: 'String'
            }
          },
          syncDatabaseId: {
            required: false,
            serializedName: 'properties.syncDatabaseId',
            type: {
              name: 'String'
            }
          },
          lastAliveTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.lastAliveTime',
            type: {
              name: 'DateTime'
            }
          },
          state: {
            required: false,
            readOnly: true,
            serializedName: 'properties.state',
            type: {
              name: 'String'
            }
          },
          isUpToDate: {
            required: false,
            readOnly: true,
            serializedName: 'properties.isUpToDate',
            type: {
              name: 'Boolean'
            }
          },
          expiryTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.expiryTime',
            type: {
              name: 'DateTime'
            }
          },
          version: {
            required: false,
            readOnly: true,
            serializedName: 'properties.version',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SyncAgent;
