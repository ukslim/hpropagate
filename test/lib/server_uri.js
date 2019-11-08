const https = require('https');

module.exports = server => {
  const address = server.address();
  const protocol = server instanceof https.Server ? 'https' : 'http'
  return `${protocol}://localhost:${address.port}/`;
};
