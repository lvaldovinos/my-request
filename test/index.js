'use strict';

var request = require('./../index'),
    myRequest = request.init('http://alonso-thoughtsapi.rhcloud.com'),
    should = require('should'),
    request = require('superagent'),
    Request = request.Request;;

describe('my-request test case' , function() {
  describe('#get example' , function() {
    it('Should return hello world' , function(done) {
      myRequest
        .get('/')
        .end(function(res) {
          should(res).be.an.Object;
          res.status.should.be.exactly(200);
          res.body.hello.should.be.exactly('world');
          done();
        });
    });
    it('Should return an array with lenght of 1' , function(done) {
      myRequest
        .get('/blogs')
        .end(function(res) {
          should(res).be.an.Object;
          res.status.should.be.exactly(200);
          res.body.should.be.an.Object;
          res.body.code.should.be.exactly(200);
          res.body.data.should.have.length(1);
          done();
        });
    });
  });
  describe('#set example' , function() {
    it('Should set a header permanently' , function() {
      myRequest.setPermanent({ Authorization : 'example-token' });
      myRequest.get('/').req._headers.authorization.should.be.exactly(myRequest.get('/blogs').req._headers.authorization);
      
    });
    it('Should set a header' , function() {
      var req = myRequest
                  .get('/')
                  .set('Localization' , 'Example');
      req.req._headers.should.have.properties(['authorization' , 'localization']);          
        
    });
  });
});