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
 * @summary Settings for the operating system disk of the virtual machine.
  *
 */
class OSDisk {
  /**
   * Create a OSDisk.
   * @member {string} [caching] The type of caching to enable for the OS disk.
   * The default value for caching is none. For information about the caching
   * options see:
   * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
   * Possible values include: 'none', 'readOnly', 'readWrite'
   */
  constructor() {
  }

  /**
   * Defines the metadata of OSDisk
   *
   * @returns {object} metadata of OSDisk
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OSDisk',
      type: {
        name: 'Composite',
        className: 'OSDisk',
        modelProperties: {
          caching: {
            required: false,
            serializedName: 'caching',
            type: {
              name: 'Enum',
              allowedValues: [ 'none', 'readOnly', 'readWrite' ]
            }
          }
        }
      }
    };
  }
}

module.exports = OSDisk;