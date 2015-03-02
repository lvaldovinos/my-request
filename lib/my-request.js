'use strict';

var request = require('superagent'),
    Request = request.Request;
    
function MyRequest(url , method , path) {
  Request.call(this , method , path);
  this.url = url + path;
};
    
//inherits from Request.prototype
MyRequest.prototype = Object.create(Request.prototype);
  
    
    
module.exports = MyRequest;