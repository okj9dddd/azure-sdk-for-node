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
 * Property overrides on a subnet of a virtual network.
 *
 */
class SubnetOverrideFragment {
  /**
   * Create a SubnetOverrideFragment.
   * @member {string} [resourceId] The resource ID of the subnet.
   * @member {string} [labSubnetName] The name given to the subnet within the
   * lab.
   * @member {string} [useInVmCreationPermission] Indicates whether this subnet
   * can be used during virtual machine creation (i.e. Allow, Deny). Possible
   * values include: 'Default', 'Deny', 'Allow'
   * @member {string} [usePublicIpAddressPermission] Indicates whether public
   * IP addresses can be assigned to virtual machines on this subnet (i.e.
   * Allow, Deny). Possible values include: 'Default', 'Deny', 'Allow'
   * @member {object} [sharedPublicIpAddressConfiguration] Properties that
   * virtual machines on this subnet will share.
   * @member {array} [sharedPublicIpAddressConfiguration.allowedPorts] Backend
   * ports that virtual machines on this subnet are allowed to expose
   * @member {string} [virtualNetworkPoolName] The virtual network pool
   * associated with this subnet.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SubnetOverrideFragment
   *
   * @returns {object} metadata of SubnetOverrideFragment
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SubnetOverrideFragment',
      type: {
        name: 'Composite',
        className: 'SubnetOverrideFragment',
        modelProperties: {
          resourceId: {
            required: false,
            serializedName: 'resourceId',
            type: {
              name: 'String'
            }
          },
          labSubnetName: {
            required: false,
            serializedName: 'labSubnetName',
            type: {
              name: 'String'
            }
          },
          useInVmCreationPermission: {
            required: false,
            serializedName: 'useInVmCreationPermission',
            type: {
              name: 'String'
            }
          },
          usePublicIpAddressPermission: {
            required: false,
            serializedName: 'usePublicIpAddressPermission',
            type: {
              name: 'String'
            }
          },
          sharedPublicIpAddressConfiguration: {
            required: false,
            serializedName: 'sharedPublicIpAddressConfiguration',
            type: {
              name: 'Composite',
              className: 'SubnetSharedPublicIpAddressConfigurationFragment'
            }
          },
          virtualNetworkPoolName: {
            required: false,
            serializedName: 'virtualNetworkPoolName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SubnetOverrideFragment;