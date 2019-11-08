const rp = require('request-promise');
const serverUri = require('./server_uri');
const certs = require('./certs');

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
    rp({
      uri,
      ...options,
      headers,
    })
      .then(response => callback(undefined, response))
      .catch(error => callback(error));
  },
};
