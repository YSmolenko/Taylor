const chA = require('../app/index')
var assert = require('assert');


describe('index', function() {
    describe('#chA', function() {
        it('should return 27.308232836016487', function() {
            const x = 8
            assert.equal(chA(x), Math.cosh(x))
        });
    });
});