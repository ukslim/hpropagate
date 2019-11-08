const request = require('request');
const certs = require('./certs');
const serverUri = require('./server_uri');

const options = {
  json: true,
  agentOptions: {
    ca: certs.cert,
  },
};

module.exports = {
  name: 'request-promise',
  fn: downstreamServer => (headers, callback) => {
    const uri = serverUri(downstreamServer);
    request({
      ...options,
      uri,
      headers,
    }, (err, response, body) => callback(err, body));
  },
};
