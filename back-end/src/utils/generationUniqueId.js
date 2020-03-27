const crypto = require('crypto');

module.exports = function genarationUniqueId(){
  return crypto.randomBytes(4).toString('HEX');
}