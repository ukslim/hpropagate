const rpn = require('request-promise-native');
const serverUri = require('./server_uri');
const certs = require('./certs');

const options = {
  json: true,
  agentOptions: {
    ca: certs.cert,
  },
};

module.exports = {
  name: 'request-promise-native',
  fn: downstreamServer => (headers, callback) => {
    const uri = serverUri(downstreamServer);
    rpn({
      uri,
      ...options,
      headers,
    })
      .then(response => callback(undefined, response))
      .catch(error => callback(error));
  },
};
