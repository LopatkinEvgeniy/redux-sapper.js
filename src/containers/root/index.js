/* globals process */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./root.prod.jsx');
} else {
  module.exports = require('./root.dev.jsx');
}
