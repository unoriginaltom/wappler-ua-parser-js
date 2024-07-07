const UAParser = require('ua-parser-js');

exports.parseUA = function(options) {
    return new UAParser(this.parseRequired(options.userAgent, 'string')).getResult();
};