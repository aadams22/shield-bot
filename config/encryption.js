//crypto
var crypto = require('crypto');
var key    = new Buffer('Q93HDHKID6EN14OF595032JN63446295');

//encryption function
exports.encrypt = function(key, data) {
  var cipher  = crypto.createCipher('aes256', key);
  var crypted = cipher.update(data, 'utf-8', 'hex');
  crypted += cipher.final('hex');

  return crypted;
}

//decryption function
exports.decrypt = function(key, data) {
  var decipher  = crypto.createDecipher('aes256', key);
  var decrypted = decipher.update(data, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');

  return decrypted;
}