'use strict';

var methods = require('methods'),
    Request = require('./lib/my-request'),
    _ = require('underscore'),
    myRequest = exports;
    
myRequest.init = function init(url) {
  var myObj = {};
  if (!url) {
    url = 'http://localhost'
  }
  
  if (typeof url !== 'string') throw {
    name : 'Invalid Parameter',
    message : '@url MUST be string'
  };
  
  methods.forEach(function(method) {
    myObj[method] = function(path) {
      return new Request(url , method , path);
    };
  });
  
  myObj.setPermanent = function(header) {
    if (!_.isObject(header)) throw {
      name : 'Invalid Parameter',
      message : '@header MUST be an object'
    };
    methods.forEach(function(method) {
      myObj[method] = function(path) {
        return new Request(url , method , path , header);
      };
    });
    return myObj;
  };
  
  return myObj;
};