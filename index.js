'use strict';

var methods = require('methods'),
    Request = require('./lib/my-request');
    
module.exports = function(url) {
  var myRequest = {};
  if (!url) {
    url = 'http://localhost'
  }
  
  if (typeof url !== 'string') throw {
    name : 'Invalid Parameter',
    message : '@url MUST be string'
  };
  
  methods.forEach(function(method) {
    myRequest[method] = function(path) {
      return new Request(url , method , path);
    };
  });
  
  return myRequest;
};
