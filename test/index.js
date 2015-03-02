'use strict';

var request = require('./../index'),
    should = require('should');

describe('my-request test case' , function() {
  describe('#get example' , function() {
    it('Should return hello world' , function(done) {
      request('http://alonso-thoughtsapi.rhcloud.com')
        .get('/')
        .end(function(res) {
          should(res).be.an.Object;
          res.status.should.be.exactly(200);
          res.body.hello.should.be.exactly('world');
          done();
        });
    });
    it('Should return an array with lenght of 1' , function(done) {
      request('http://alonso-thoughtsapi.rhcloud.com')
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
});