/**
 * Created by David on 31/01/2016.
 */

(function () {
    'use strict';

    var assert = require('chai').assert;

    assert.equal(add(3, 4), 7);

    function add (a, b) {
        return a + b;
    }
})();