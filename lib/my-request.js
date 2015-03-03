'use strict';

var request = require('superagent'),
    Request = request.Request;    
    
    
    
function MyRequest(url , method , path , header) {
  Request.call(this , method , path);
  this.url = url + path;
  if (header) {
    Request.prototype.set.call(this , header);
  }
};
    
//inherits from Request.prototype
MyRequest.prototype = Object.create(Request.prototype);
  
    
    
module.exports = MyRequest;