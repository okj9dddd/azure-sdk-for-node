---
uid: azure-arm-imagebuilder
summary: *content

---
**This SDK will be deprecated next year and will be replaced by a new TypeScript-based isomorphic SDK (found at https://github.com/Azure/azure-sdk-for-js) which works on Node.js and browsers.**
## Microsoft Azure SDK for Node.js - ImageBuilderClient

This project provides a Node.js package for accessing Azure. Right now it supports:
- **Node.js version 6.x.x or higher**

### Features


### How to Install

```bash
npm install azure-arm-imagebuilder
```

### How to use

#### Authentication, client creation, and list virtualMachineImageTemplates as an example.

```javascript
const msRestAzure = require("ms-rest-azure");
const ImageBuilderClient = require("azure-arm-imagebuilder");
msRestAzure.interactiveLogin().then((creds) => {
  const subscriptionId = "<Subscription_Id>";
  const client = new ImageBuilderClient(creds, subscriptionId);

  return client.virtualMachineImageTemplates.list().then((result) => {
    console.log("The result is:");
    console.log(result);
  });
}).catch((err) => {
  console.log('An error occurred:');
  console.dir(err, {depth: null, colors: true});
});
```
### Related projects

- [Microsoft Azure SDK for Node.js](https://github.com/Azure/azure-sdk-for-node)