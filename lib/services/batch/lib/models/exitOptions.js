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
 * @summary Specifies how the Batch service responds to a particular exit
 * condition.
  *
 */
class ExitOptions {
  /**
   * Create a ExitOptions.
   * @property {string} [jobAction] An action to take on the job containing the
   * task, if the task completes with the given exit condition and the job's
   * onTaskFailed property is 'performExitOptionsJobAction'. The default is
   * none for exit code 0 and terminate for all other exit conditions. If the
   * job's onTaskFailed property is noaction, then specifying this property
   * returns an error and the add task request fails with an invalid property
   * value error; if you are calling the REST API directly, the HTTP status
   * code is 400 (Bad Request). Possible values include: 'none', 'disable',
   * 'terminate'
   * @property {string} [dependencyAction] An action that the Batch service
   * performs on tasks that depend on this task. The default is 'satisfy' for
   * exit code 0, and 'block' for all other exit conditions. If the job's
   * usesTaskDependencies property is set to false, then specifying the
   * dependencyAction property returns an error and the add task request fails
   * with an invalid property value error; if you are calling the REST API
   * directly, the HTTP status code is 400  (Bad Request). Possible values
   * include: 'satisfy', 'block'
   */
  constructor() {
  }

  /**
   * Defines the metadata of ExitOptions
   *
   * @returns {object} metadata of ExitOptions
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExitOptions',
      type: {
        name: 'Composite',
        className: 'ExitOptions',
        modelProperties: {
          jobAction: {
            required: false,
            serializedName: 'jobAction',
            type: {
              name: 'Enum',
              allowedValues: [ 'none', 'disable', 'terminate' ]
            }
          },
          dependencyAction: {
            required: false,
            serializedName: 'dependencyAction',
            type: {
              name: 'Enum',
              allowedValues: [ 'satisfy', 'block' ]
            }
          }
        }
      }
    };
  }
}

module.exports = ExitOptions;
