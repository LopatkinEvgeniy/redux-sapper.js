/* global process */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configure-store.prod.js');
}
else {
  module.exports = require('./configure-store.dev.js');
}
