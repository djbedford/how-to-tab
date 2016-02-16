/**
 * Created by David on 12/02/2016.
 */

(function () {
    'use strict';

    var classList = require('../vendor/classList.js');

    classList.shim();

    exports.initialize = function initialize(options) {
        var tabs = options.tabs;
        var content = options.content;
        var defaultTab = options.default;
        var activeTabClass = options.activeTabClass;
        var contentHideClass = options.contentHideClass;

        checkOption(tabs, 'options.tab');
        checkOption(tabs, 'options.content');
        checkOption(tabs, 'options.default');
        checkOption(tabs, 'options.activeTabClass');
        checkOption(tabs, 'options.contentHideClass');

        var activeIndex = findIndexOfDefaultElement(tabs, defaultTab);
        var defaultContent = content[activeIndex];

        content.forEach(function (element) {
            element.classList.add(contentHideClass);
        });

        defaultContent.classList.remove(contentHideClass);
        defaultTab.classList.add(activeTabClass);
    };

    function findIndexOfDefaultElement(contentTabs, defaultContentTab) {
        for (var i = 0; i < contentTabs.length; i++) {
            if (contentTabs[i] === defaultContentTab) {
                return i;
            }
        }

        throw new Error('Could not find default in list');
    }

    function checkOption(option, name) {
        if (option === undefined) {
            throw new Error('Expected ' + name);
        }
    }
})();