// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'lchency4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://lchency4.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2018-03-01.6.1', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 09 Mar 2018 22:45:44 GMT',
  etag: '0x8D5860F7E8B1EF8',
  location: 'https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool_licenses',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '48fcfce5-d20e-45f9-a0b9-74cd356e9357',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool_licenses',
  date: 'Fri, 09 Mar 2018 22:45:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2018-03-01.6.1', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 09 Mar 2018 22:45:44 GMT',
  etag: '0x8D5860F7E8B1EF8',
  location: 'https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool_licenses',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '48fcfce5-d20e-45f9-a0b9-74cd356e9357',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool_licenses',
  date: 'Fri, 09 Mar 2018 22:45:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .delete('/pools/nodesdktestpool_licenses?api-version=2018-03-01.6.1')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '545aee6d-e0f7-49c8-bf9f-8c8003352828',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 09 Mar 2018 22:45:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .delete('/pools/nodesdktestpool_licenses?api-version=2018-03-01.6.1')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '545aee6d-e0f7-49c8-bf9f-8c8003352828',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 09 Mar 2018 22:45:45 GMT',
  connection: 'close' });
 return result; }]];