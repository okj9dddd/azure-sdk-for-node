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
 * Identity Provider details.
 *
 * @extends models['Resource']
 */
class IdentityProviderContract extends models['Resource'] {
  /**
   * Create a IdentityProviderContract.
   * @member {string} [identityProviderContractType] Identity Provider Type
   * identifier. Possible values include: 'facebook', 'google', 'microsoft',
   * 'twitter', 'aad', 'aadB2C'
   * @member {array} [allowedTenants] List of Allowed Tenants when configuring
   * Azure Active Directory login.
   * @member {string} [signupPolicyName] Signup Policy Name. Only applies to
   * AAD B2C Identity Provider.
   * @member {string} [signinPolicyName] Signin Policy Name. Only applies to
   * AAD B2C Identity Provider.
   * @member {string} [profileEditingPolicyName] Profile Editing Policy Name.
   * Only applies to AAD B2C Identity Provider.
   * @member {string} [passwordResetPolicyName] Password Reset Policy Name.
   * Only applies to AAD B2C Identity Provider.
   * @member {string} clientId Client Id of the Application in the external
   * Identity Provider. It is App ID for Facebook login, Client ID for Google
   * login, App ID for Microsoft.
   * @member {string} clientSecret Client secret of the Application in external
   * Identity Provider, used to authenticate login request. For example, it is
   * App Secret for Facebook login, API Key for Google login, Public Key for
   * Microsoft.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of IdentityProviderContract
   *
   * @returns {object} metadata of IdentityProviderContract
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IdentityProviderContract',
      type: {
        name: 'Composite',
        className: 'IdentityProviderContract',
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
          identityProviderContractType: {
            required: false,
            serializedName: 'properties.type',
            type: {
              name: 'String'
            }
          },
          allowedTenants: {
            required: false,
            serializedName: 'properties.allowedTenants',
            constraints: {
              MaxItems: 32
            },
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
          signupPolicyName: {
            required: false,
            serializedName: 'properties.signupPolicyName',
            constraints: {
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          signinPolicyName: {
            required: false,
            serializedName: 'properties.signinPolicyName',
            constraints: {
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          profileEditingPolicyName: {
            required: false,
            serializedName: 'properties.profileEditingPolicyName',
            constraints: {
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          passwordResetPolicyName: {
            required: false,
            serializedName: 'properties.passwordResetPolicyName',
            constraints: {
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          clientId: {
            required: true,
            serializedName: 'properties.clientId',
            constraints: {
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          clientSecret: {
            required: true,
            serializedName: 'properties.clientSecret',
            constraints: {
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = IdentityProviderContract;