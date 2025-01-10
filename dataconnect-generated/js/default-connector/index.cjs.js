const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'devconnect-app-new',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

