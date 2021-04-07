const ch = require('../app/index')
var assert = require('assert');


describe('index', function() {
    describe('#ch', function() {
        it('should return 27.308232836016487', function() {
            assert.equal(ch(4), 27.308232836016487);
        });
    });
});