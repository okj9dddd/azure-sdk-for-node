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

const msRest = require('ms-rest');
const msRestAzure = require('ms-rest-azure');
const WebResource = msRest.WebResource;

/**
 * Gets the details of the API specified by its identifier in the format
 * specified to the Storage Blob with SAS Key valid for 5 minutes.
 *
 * @param {string} resourceGroupName The name of the resource group.
 *
 * @param {string} serviceName The name of the API Management service.
 *
 * @param {string} apiId API revision identifier. Must be unique in the current
 * API Management service instance. Non-current revision has ;rev=n as a suffix
 * where n is the revision number.
 *
 * @param {string} format Format in which to export the Api Details to the
 * Storage Blob with Sas Key valid for 5 minutes. Possible values include:
 * 'Swagger', 'Wsdl', 'Wadl'
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ApiExportResult} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _get(resourceGroupName, serviceName, apiId, format, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let exportParameter = 'true';
  // Validate
  try {
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (serviceName === null || serviceName === undefined || typeof serviceName.valueOf() !== 'string') {
      throw new Error('serviceName cannot be null or undefined and it must be of type string.');
    }
    if (serviceName !== null && serviceName !== undefined) {
      if (serviceName.length > 50)
      {
        throw new Error('"serviceName" should satisfy the constraint - "MaxLength": 50');
      }
      if (serviceName.length < 1)
      {
        throw new Error('"serviceName" should satisfy the constraint - "MinLength": 1');
      }
      if (serviceName.match(/^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/) === null)
      {
        throw new Error('"serviceName" should satisfy the constraint - "Pattern": /^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/');
      }
    }
    if (apiId === null || apiId === undefined || typeof apiId.valueOf() !== 'string') {
      throw new Error('apiId cannot be null or undefined and it must be of type string.');
    }
    if (apiId !== null && apiId !== undefined) {
      if (apiId.length > 256)
      {
        throw new Error('"apiId" should satisfy the constraint - "MaxLength": 256');
      }
      if (apiId.length < 1)
      {
        throw new Error('"apiId" should satisfy the constraint - "MinLength": 1');
      }
      if (apiId.match(/^[^*#&+:<>?]+$/) === null)
      {
        throw new Error('"apiId" should satisfy the constraint - "Pattern": /^[^*#&+:<>?]+$/');
      }
    }
    if (format === null || format === undefined || typeof format.valueOf() !== 'string') {
      throw new Error('format cannot be null or undefined and it must be of type string.');
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}';
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{serviceName}', encodeURIComponent(serviceName));
  requestUrl = requestUrl.replace('{apiId}', encodeURIComponent(apiId));
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  let queryParameters = [];
  queryParameters.push('format=' + encodeURIComponent(format));
  queryParameters.push('export=' + encodeURIComponent(exportParameter));
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ApiExportResult']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/** Class representing a ApiExport. */
class ApiExport {
  /**
   * Create a ApiExport.
   * @param {ApiManagementClient} client Reference to the service client.
   */
  constructor(client) {
    this.client = client;
    this._get = _get;
  }

  /**
   * Gets the details of the API specified by its identifier in the format
   * specified to the Storage Blob with SAS Key valid for 5 minutes.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} serviceName The name of the API Management service.
   *
   * @param {string} apiId API revision identifier. Must be unique in the current
   * API Management service instance. Non-current revision has ;rev=n as a suffix
   * where n is the revision number.
   *
   * @param {string} format Format in which to export the Api Details to the
   * Storage Blob with Sas Key valid for 5 minutes. Possible values include:
   * 'Swagger', 'Wsdl', 'Wadl'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ApiExportResult>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getWithHttpOperationResponse(resourceGroupName, serviceName, apiId, format, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._get(resourceGroupName, serviceName, apiId, format, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Gets the details of the API specified by its identifier in the format
   * specified to the Storage Blob with SAS Key valid for 5 minutes.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} serviceName The name of the API Management service.
   *
   * @param {string} apiId API revision identifier. Must be unique in the current
   * API Management service instance. Non-current revision has ;rev=n as a suffix
   * where n is the revision number.
   *
   * @param {string} format Format in which to export the Api Details to the
   * Storage Blob with Sas Key valid for 5 minutes. Possible values include:
   * 'Swagger', 'Wsdl', 'Wadl'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ApiExportResult} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ApiExportResult} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  get(resourceGroupName, serviceName, apiId, format, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._get(resourceGroupName, serviceName, apiId, format, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._get(resourceGroupName, serviceName, apiId, format, options, optionalCallback);
    }
  }

}

module.exports = ApiExport;