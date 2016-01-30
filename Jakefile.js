/**
 * Created by djbedford on 29/01/16.
 */

(function () {
    'use strict';

    let semver = require('semver');

    desc('Default build');
    task('default', ['version'], function() {
        console.log('\n\nBUILD OK');
    });

    desc('Check Node version');
    task('version', function() {
        console.log('Checking Node version: .');
        let packageJson = require('./package.json');
        let expectedVersion = packageJson.engines.node;
        let actualVersion = process.version;

        if (semver.neq(expectedVersion, actualVersion)) {
            fail('Incorrect Node version: expected ' + expectedVersion + ' but was ' + actualVersion);
        }
    });
})();
