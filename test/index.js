'use strict';

var request = require('./../index'),
    should = require('should'),
    superagent = require('superagent'),
    Request = superagent.Request;;

describe('my-request test case' , function() {
  describe('#get example' , function() {
    it('Should return hello world' , function(done) {
      var myRequest = request.init('http://alonso-thoughtsapi.rhcloud.com');
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
      var myRequest = request.init('http://alonso-thoughtsapi.rhcloud.com');
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
  describe('#setPermanent' , function() {
    it('Should set a header permanently' , function() {
      var myRequest = request.init('http://alonso-thoughtsapi.rhcloud.com');
      myRequest.setPermanent({ Authorization : 'example-token' });
      myRequest.get('/').req._headers.authorization.should.be.exactly(myRequest.get('/blogs').req._headers.authorization);
      
    });
    it('Should set another header' , function(done) {
      var myRequest = request.init('http://alonso-thoughtsapi.rhcloud.com');
      myRequest.setPermanent({ Authorization : 'example-token' });
      
      myRequest
        .get('/')
        .set('Localization' , 'Example').req._headers.should.have.properties(['authorization' , 'localization']);          
      
      myRequest
        .get('/')
        .end(function(res) {
          res.req._headers.authorization.should.be.exactly('example-token');
          done();
        });
    });
  });
  describe('#unsetPermanent' , function() {
    it('Should remove all permanent header' , function(done) {
      var myRequest = request.init('http://alonso-thoughtsapi.rhcloud.com');
      myRequest.setPermanent({ Authorization : 'example-token',
                               Localization : 'example-loc' });
      myRequest.unsetPermanent();
      should(myRequest.get('/').req).not.be.ok; 
      myRequest
        .get('/')
        .end(function(res) {
          res.req._headers.should.not.have.properties('authorization' , 'localization');
          done();
        });
    });
    it('Should remove only one permanent header' , function() {
      var myRequest = request.init('http://alonso-thoughtsapi.rhcloud.com');
      myRequest.setPermanent({ Authorization : 'example-token',
                               Localization : 'example-loc' });
      myRequest
        .get('/')
        .unset('localization')
        .req._headers.should.not.have.property('localization');
      myRequest.get('/').req._headers.should.have.property('authorization');
    });
  });
});