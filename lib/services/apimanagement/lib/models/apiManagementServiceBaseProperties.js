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
 * Base Properties of an API Management service resource description.
 *
 */
class ApiManagementServiceBaseProperties {
  /**
   * Create a ApiManagementServiceBaseProperties.
   * @member {string} [notificationSenderEmail] Email address from which the
   * notification will be sent.
   * @member {string} [provisioningState] The current provisioning state of the
   * API Management service which can be one of the following:
   * Created/Activating/Succeeded/Updating/Failed/Stopped/Terminating/TerminationFailed/Deleted.
   * @member {string} [targetProvisioningState] The provisioning state of the
   * API Management service, which is targeted by the long running operation
   * started on the service.
   * @member {date} [createdAtUtc] Creation UTC date of the API Management
   * service.The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ`
   * as specified by the ISO 8601 standard.
   * @member {string} [gatewayUrl] Gateway URL of the API Management service.
   * @member {string} [gatewayRegionalUrl] Gateway URL of the API Management
   * service in the Default Region.
   * @member {string} [portalUrl] Publisher portal endpoint Url of the API
   * Management service.
   * @member {string} [managementApiUrl] Management API endpoint URL of the API
   * Management service.
   * @member {string} [scmUrl] SCM endpoint URL of the API Management service.
   * @member {array} [hostnameConfigurations] Custom hostname configuration of
   * the API Management service.
   * @member {array} [publicIPAddresses] Public Static Load Balanced IP
   * addresses of the API Management service. Available only for Basic,
   * Standard and Premium SKU.
   * @member {array} [privateIPAddresses] Private Static Load Balanced IP
   * addresses of the API Management service which is deployed in an Internal
   * Virtual Network. Available only for Basic, Standard and Premium SKU.
   * @member {object} [virtualNetworkConfiguration] Virtual network
   * configuration of the API Management service.
   * @member {string} [virtualNetworkConfiguration.vnetid] The virtual network
   * ID. This is typically a GUID. Expect a null GUID by default.
   * @member {string} [virtualNetworkConfiguration.subnetname] The name of the
   * subnet.
   * @member {string} [virtualNetworkConfiguration.subnetResourceId] The full
   * resource ID of a subnet in a virtual network to deploy the API Management
   * service in.
   * @member {array} [additionalLocations] Additional datacenter locations of
   * the API Management service.
   * @member {object} [customProperties] Custom properties of the API
   * Management service. Setting
   * `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TripleDes168`
   * will disable the cipher TLS_RSA_WITH_3DES_EDE_CBC_SHA for all TLS(1.0, 1.1
   * and 1.2). Setting
   * `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls11`
   * can be used to disable just TLS 1.1 and setting
   * `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls10`
   * can be used to disable TLS 1.0 on an API Management service.
   * @member {array} [certificates] List of Certificates that need to be
   * installed in the API Management service. Max supported certificates that
   * can be installed is 10.
   * @member {string} [virtualNetworkType] The type of VPN in which API
   * Managemet service needs to be configured in. None (Default Value) means
   * the API Management service is not part of any Virtual Network, External
   * means the API Management deployment is set up inside a Virtual Network
   * having an Internet Facing Endpoint, and Internal means that API Management
   * deployment is setup inside a Virtual Network having an Intranet Facing
   * Endpoint only. Possible values include: 'None', 'External', 'Internal'.
   * Default value: 'None' .
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApiManagementServiceBaseProperties
   *
   * @returns {object} metadata of ApiManagementServiceBaseProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApiManagementServiceBaseProperties',
      type: {
        name: 'Composite',
        className: 'ApiManagementServiceBaseProperties',
        modelProperties: {
          notificationSenderEmail: {
            required: false,
            serializedName: 'notificationSenderEmail',
            constraints: {
              MaxLength: 100
            },
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'provisioningState',
            type: {
              name: 'String'
            }
          },
          targetProvisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'targetProvisioningState',
            type: {
              name: 'String'
            }
          },
          createdAtUtc: {
            required: false,
            readOnly: true,
            serializedName: 'createdAtUtc',
            type: {
              name: 'DateTime'
            }
          },
          gatewayUrl: {
            required: false,
            readOnly: true,
            serializedName: 'gatewayUrl',
            type: {
              name: 'String'
            }
          },
          gatewayRegionalUrl: {
            required: false,
            readOnly: true,
            serializedName: 'gatewayRegionalUrl',
            type: {
              name: 'String'
            }
          },
          portalUrl: {
            required: false,
            readOnly: true,
            serializedName: 'portalUrl',
            type: {
              name: 'String'
            }
          },
          managementApiUrl: {
            required: false,
            readOnly: true,
            serializedName: 'managementApiUrl',
            type: {
              name: 'String'
            }
          },
          scmUrl: {
            required: false,
            readOnly: true,
            serializedName: 'scmUrl',
            type: {
              name: 'String'
            }
          },
          hostnameConfigurations: {
            required: false,
            serializedName: 'hostnameConfigurations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'HostnameConfigurationElementType',
                  type: {
                    name: 'Composite',
                    className: 'HostnameConfiguration'
                  }
              }
            }
          },
          publicIPAddresses: {
            required: false,
            readOnly: true,
            serializedName: 'publicIPAddresses',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          privateIPAddresses: {
            required: false,
            readOnly: true,
            serializedName: 'privateIPAddresses',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          virtualNetworkConfiguration: {
            required: false,
            serializedName: 'virtualNetworkConfiguration',
            type: {
              name: 'Composite',
              className: 'VirtualNetworkConfiguration'
            }
          },
          additionalLocations: {
            required: false,
            serializedName: 'additionalLocations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AdditionalLocationElementType',
                  type: {
                    name: 'Composite',
                    className: 'AdditionalLocation'
                  }
              }
            }
          },
          customProperties: {
            required: false,
            serializedName: 'customProperties',
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
          certificates: {
            required: false,
            serializedName: 'certificates',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CertificateConfigurationElementType',
                  type: {
                    name: 'Composite',
                    className: 'CertificateConfiguration'
                  }
              }
            }
          },
          virtualNetworkType: {
            required: false,
            serializedName: 'virtualNetworkType',
            defaultValue: 'None',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApiManagementServiceBaseProperties;