// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'e2ee545b-783f-4634-a277-e35f55c90660';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup615/providers/Microsoft.Cdn/profiles/cdnTestProfile8915/checkResourceUsage?api-version=2017-10-12')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"resourceType\":\"endpoint\",\"unit\":\"count\",\"currentValue\":0,\"limit\":10\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '112',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': '7870e8e0-cada-4ab8-847e-091148ba9db5',
  'x-ms-client-request-id': '393fd010-7ce9-42ad-ba60-3467c219f4fb',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'c7369977-3901-4f3c-b6d0-96fd74ef61b6',
  'x-ms-routing-request-id': 'WESTUS2:20180226T202833Z:c7369977-3901-4f3c-b6d0-96fd74ef61b6',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:28:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup615/providers/Microsoft.Cdn/profiles/cdnTestProfile8915/checkResourceUsage?api-version=2017-10-12')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"resourceType\":\"endpoint\",\"unit\":\"count\",\"currentValue\":0,\"limit\":10\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '112',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': '7870e8e0-cada-4ab8-847e-091148ba9db5',
  'x-ms-client-request-id': '393fd010-7ce9-42ad-ba60-3467c219f4fb',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'c7369977-3901-4f3c-b6d0-96fd74ef61b6',
  'x-ms-routing-request-id': 'WESTUS2:20180226T202833Z:c7369977-3901-4f3c-b6d0-96fd74ef61b6',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:28:32 GMT',
  connection: 'close' });
 return result; }]];