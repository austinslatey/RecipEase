const config = require('../config/config')
const jwt = require('jsonwebtoken');
const secret = config.SECRET;
const expiration = '2h';

module.exports = {
  signToken: function({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
};