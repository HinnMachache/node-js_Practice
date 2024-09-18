const assert = require('assert')
const sayHello = require('../app');

describe("App", function() {
    it("sayHello should return hello", function() {
        let resultHello = sayHello();
        assert.equal(resultHello, 'hello');
    });

    it("SayHello should return type String", function() {
        resultHello = sayHello()
        assert.typeOf(resultHello, 'string')
    });
});