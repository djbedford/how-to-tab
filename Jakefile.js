/**
 * Created by djbedford on 29/01/16.
 */

(function () {
    'use strict';

    var EXPECTED_NODE_VERSION = 'v5.1.0';

    desc('Default build');
    task('default', ['version'], function() {
        console.log('\n\nBUILD OK');
    });

    desc('Check Node version');
    task('version', function() {
        console.log('Checking Node version: .');

        let actualVersion = process.version;

        if (actualVersion !== EXPECTED_NODE_VERSION) {
            fail('Incorrect Node version: expected ' + EXPECTED_NODE_VERSION + ' but was ' + actualVersion);
        }
    });
})();
