// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'e2ee545b-783f-4634-a277-e35f55c90660';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup615/providers/Microsoft.Cdn/profiles/cdnTestProfile8915/endpoints/cdnTestEndpoint4648?api-version=2017-10-12', '*')
  .reply(202, "{\r\n  \"name\":\"cdnTestEndpoint4648\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup615/providers/Microsoft.Cdn/profiles/cdnTestProfile8915/endpoints/cdnTestEndpoint4648\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint4648.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newakamainame\",\"properties\":{\r\n          \"hostName\":\"newakamainame.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"probePath\":null,\"geoFilters\":[\r\n      {\r\n        \"relativePath\":\"/mycar\",\"action\":\"Allow\",\"countryCodes\":[\r\n          \"DZ\"\r\n        ]\r\n      }\r\n    ],\"deliveryPolicy\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1044',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup615/providers/Microsoft.Cdn/operationresults/138d00ed-f800-476c-82db-d71a8ca358d7/profileresults/cdnTestProfile8915/endpointresults/cdnTestEndpoint4648?api-version=2017-10-12',
  'retry-after': '10',
  'x-ms-request-id': '127ca2d2-c9c8-4704-bf80-a4e2b210961b',
  'x-ms-client-request-id': '8c6e32c0-1eae-4dc8-9eee-07229d5d4b84',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup615/providers/Microsoft.Cdn/operationresults/138d00ed-f800-476c-82db-d71a8ca358d7?api-version=2017-10-12',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '31a7f5b7-ba0c-42dc-a2c4-f9ed97f2f0dd',
  'x-ms-routing-request-id': 'WESTUS2:20180226T202909Z:31a7f5b7-ba0c-42dc-a2c4-f9ed97f2f0dd',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:29:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup615/providers/Microsoft.Cdn/profiles/cdnTestProfile8915/endpoints/cdnTestEndpoint4648?api-version=2017-10-12', '*')
  .reply(202, "{\r\n  \"name\":\"cdnTestEndpoint4648\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup615/providers/Microsoft.Cdn/profiles/cdnTestProfile8915/endpoints/cdnTestEndpoint4648\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint4648.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newakamainame\",\"properties\":{\r\n          \"hostName\":\"newakamainame.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"probePath\":null,\"geoFilters\":[\r\n      {\r\n        \"relativePath\":\"/mycar\",\"action\":\"Allow\",\"countryCodes\":[\r\n          \"DZ\"\r\n        ]\r\n      }\r\n    ],\"deliveryPolicy\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1044',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup615/providers/Microsoft.Cdn/operationresults/138d00ed-f800-476c-82db-d71a8ca358d7/profileresults/cdnTestProfile8915/endpointresults/cdnTestEndpoint4648?api-version=2017-10-12',
  'retry-after': '10',
  'x-ms-request-id': '127ca2d2-c9c8-4704-bf80-a4e2b210961b',
  'x-ms-client-request-id': '8c6e32c0-1eae-4dc8-9eee-07229d5d4b84',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup615/providers/Microsoft.Cdn/operationresults/138d00ed-f800-476c-82db-d71a8ca358d7?api-version=2017-10-12',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '31a7f5b7-ba0c-42dc-a2c4-f9ed97f2f0dd',
  'x-ms-routing-request-id': 'WESTUS2:20180226T202909Z:31a7f5b7-ba0c-42dc-a2c4-f9ed97f2f0dd',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:29:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup615/providers/Microsoft.Cdn/operationresults/138d00ed-f800-476c-82db-d71a8ca358d7?api-version=2017-10-12')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '4208b0e2-6fb9-4318-9850-f38b83377916',
  'x-ms-client-request-id': '3dd76e07-4560-428b-9be0-5f0949f07df0',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '695403a5-c5e1-47fc-8ddc-8f971459f8c3',
  'x-ms-routing-request-id': 'WESTUS2:20180226T202940Z:695403a5-c5e1-47fc-8ddc-8f971459f8c3',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:29:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup615/providers/Microsoft.Cdn/operationresults/138d00ed-f800-476c-82db-d71a8ca358d7?api-version=2017-10-12')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '4208b0e2-6fb9-4318-9850-f38b83377916',
  'x-ms-client-request-id': '3dd76e07-4560-428b-9be0-5f0949f07df0',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '695403a5-c5e1-47fc-8ddc-8f971459f8c3',
  'x-ms-routing-request-id': 'WESTUS2:20180226T202940Z:695403a5-c5e1-47fc-8ddc-8f971459f8c3',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:29:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup615/providers/Microsoft.Cdn/profiles/cdnTestProfile8915/endpoints/cdnTestEndpoint4648?api-version=2017-10-12')
  .reply(200, "{\r\n  \"name\":\"cdnTestEndpoint4648\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup615/providers/Microsoft.Cdn/profiles/cdnTestProfile8915/endpoints/cdnTestEndpoint4648\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint4648.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newakamainame\",\"properties\":{\r\n          \"hostName\":\"newakamainame.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"probePath\":null,\"geoFilters\":[\r\n      {\r\n        \"relativePath\":\"/mycar\",\"action\":\"Allow\",\"countryCodes\":[\r\n          \"DZ\"\r\n        ]\r\n      }\r\n    ],\"deliveryPolicy\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1044',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '000518aa-75a2-475c-84d9-78abcb3e98d9',
  'x-ms-client-request-id': '44dda553-f2a3-41c1-92ea-40bd68bec0f9',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '97f9a24e-5af3-41cb-b6fe-183e168a2968',
  'x-ms-routing-request-id': 'WESTUS2:20180226T202940Z:97f9a24e-5af3-41cb-b6fe-183e168a2968',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:29:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup615/providers/Microsoft.Cdn/profiles/cdnTestProfile8915/endpoints/cdnTestEndpoint4648?api-version=2017-10-12')
  .reply(200, "{\r\n  \"name\":\"cdnTestEndpoint4648\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup615/providers/Microsoft.Cdn/profiles/cdnTestProfile8915/endpoints/cdnTestEndpoint4648\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint4648.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newakamainame\",\"properties\":{\r\n          \"hostName\":\"newakamainame.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"probePath\":null,\"geoFilters\":[\r\n      {\r\n        \"relativePath\":\"/mycar\",\"action\":\"Allow\",\"countryCodes\":[\r\n          \"DZ\"\r\n        ]\r\n      }\r\n    ],\"deliveryPolicy\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1044',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '000518aa-75a2-475c-84d9-78abcb3e98d9',
  'x-ms-client-request-id': '44dda553-f2a3-41c1-92ea-40bd68bec0f9',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '97f9a24e-5af3-41cb-b6fe-183e168a2968',
  'x-ms-routing-request-id': 'WESTUS2:20180226T202940Z:97f9a24e-5af3-41cb-b6fe-183e168a2968',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:29:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup615/providers/Microsoft.Cdn/profiles/cdnTestProfile8915/endpoints/cdnTestEndpoint4648/checkResourceUsage?api-version=2017-10-12')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"resourceType\":\"customdomain\",\"unit\":\"count\",\"currentValue\":0,\"limit\":10\r\n    },{\r\n      \"resourceType\":\"geofilter\",\"unit\":\"count\",\"currentValue\":1,\"limit\":25\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '202',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': 'e01715af-fd02-45b5-a6aa-047d445172ea',
  'x-ms-client-request-id': '56edc891-6efe-4cc9-91fd-5dfb4d043e80',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '02c9aa71-0198-4287-b300-370f1dd6f8b6',
  'x-ms-routing-request-id': 'WESTUS2:20180226T202941Z:02c9aa71-0198-4287-b300-370f1dd6f8b6',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:29:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup615/providers/Microsoft.Cdn/profiles/cdnTestProfile8915/endpoints/cdnTestEndpoint4648/checkResourceUsage?api-version=2017-10-12')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"resourceType\":\"customdomain\",\"unit\":\"count\",\"currentValue\":0,\"limit\":10\r\n    },{\r\n      \"resourceType\":\"geofilter\",\"unit\":\"count\",\"currentValue\":1,\"limit\":25\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '202',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': 'e01715af-fd02-45b5-a6aa-047d445172ea',
  'x-ms-client-request-id': '56edc891-6efe-4cc9-91fd-5dfb4d043e80',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '02c9aa71-0198-4287-b300-370f1dd6f8b6',
  'x-ms-routing-request-id': 'WESTUS2:20180226T202941Z:02c9aa71-0198-4287-b300-370f1dd6f8b6',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:29:40 GMT',
  connection: 'close' });
 return result; }]];