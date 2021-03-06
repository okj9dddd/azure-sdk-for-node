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
 * Peer Express Route Circuit Connection in an ExpressRouteCircuitPeering
 * resource.
 *
 * @extends models['SubResource']
 */
class PeerExpressRouteCircuitConnection extends models['SubResource'] {
  /**
   * Create a PeerExpressRouteCircuitConnection.
   * @property {object} [expressRouteCircuitPeering] Reference to Express Route
   * Circuit Private Peering Resource of the circuit.
   * @property {string} [expressRouteCircuitPeering.id] Resource ID.
   * @property {object} [peerExpressRouteCircuitPeering] Reference to Express
   * Route Circuit Private Peering Resource of the peered circuit.
   * @property {string} [peerExpressRouteCircuitPeering.id] Resource ID.
   * @property {string} [addressPrefix] /29 IP address space to carve out
   * Customer addresses for tunnels.
   * @property {string} [circuitConnectionStatus] Express Route Circuit
   * Connection State. Possible values are: 'Connected' and 'Disconnected'.
   * Possible values include: 'Connected', 'Connecting', 'Disconnected'
   * @property {string} [connectionName] The name of the express route circuit
   * connection resource.
   * @property {string} [authResourceGuid] The resource guid of the
   * authorization used for the express route circuit connection.
   * @property {string} [provisioningState] Provisioning state of the peer
   * express route circuit connection resource. Possible values are:
   * 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
   * @property {string} [name] Gets name of the resource that is unique within
   * a resource group. This name can be used to access the resource.
   * @property {string} [etag] A unique read-only string that changes whenever
   * the resource is updated.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PeerExpressRouteCircuitConnection
   *
   * @returns {object} metadata of PeerExpressRouteCircuitConnection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PeerExpressRouteCircuitConnection',
      type: {
        name: 'Composite',
        className: 'PeerExpressRouteCircuitConnection',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          expressRouteCircuitPeering: {
            required: false,
            serializedName: 'properties.expressRouteCircuitPeering',
            type: {
              name: 'Composite',
              className: 'SubResource'
            }
          },
          peerExpressRouteCircuitPeering: {
            required: false,
            serializedName: 'properties.peerExpressRouteCircuitPeering',
            type: {
              name: 'Composite',
              className: 'SubResource'
            }
          },
          addressPrefix: {
            required: false,
            serializedName: 'properties.addressPrefix',
            type: {
              name: 'String'
            }
          },
          circuitConnectionStatus: {
            required: false,
            readOnly: true,
            serializedName: 'properties.circuitConnectionStatus',
            type: {
              name: 'String'
            }
          },
          connectionName: {
            required: false,
            serializedName: 'properties.connectionName',
            type: {
              name: 'String'
            }
          },
          authResourceGuid: {
            required: false,
            serializedName: 'properties.authResourceGuid',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            readOnly: true,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PeerExpressRouteCircuitConnection;
