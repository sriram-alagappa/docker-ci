var request = require("supertest");
var app  = require("../index");
var assert = require("assert");

describe("http request",function(){
	it("for / should return 200 ",function(done){
		request(app)
			.get("/")
			.expect(200)
			.expect(function(res){
				var res = res.text ;
				console.log(res);
				assert.deepEqual(res,"Hello Sriram");
				done();
			})
			.end(function(err, res){
				if(err) throw err;
			});

	})
	
});