/**
 * Created by David on 12/02/2016.
 */

(function () {
    'use strict';

    var classList = require('../vendor/classList.js');

    classList.shim();

    exports.initialize = function initialize(element, className) {
        element.classList.add(className);
    };
})();