/**
 * Created by David on 31/01/2016.
 */

(function () {
    'use strict';

    var assert = require('./assert.js');
    var tabs = require('./tabs.js');

    describe('Tabs', function () {
        var IRRELEVANT = 'irrelevant';

        var container;

        beforeEach(function () {
            container = document.createElement('div');
            document.body.appendChild(container);
        });

        afterEach(function () {
           removeElement(container);
        });

        it('hides all content elements except the default upon initialization', function () {
            var content1 = createTabContent();
            var defaultContent = createTabContent();
            var content3 = createTabContent();

            tabs.initialize({
                tabs: [createTab(), createTab(), createTab()],
                content: [content1, defaultContent, content3],
                default: defaultContent,
                activeTabClass: IRRELEVANT,
                contentHideClass: 'hideClass'
            });

            assert.equal(getClasses(content1), 'hideClass', 'element 1 should be hidden');
            assert.equal(getClasses(defaultContent), '', 'default element should not be hidden');
            assert.equal(getClasses(content3), 'hideClass', 'element 3 should be hidden');
        });

        it('preserves existing classes when hiding a content element', function () {
            var defaultElement = createTabContent();
            var hiddenElement = createTabContent();
            hiddenElement.setAttribute('class', 'existingClass');

            tabs.initialize({
                tabs: [createTab(), createTab()],
                content: [defaultElement, hiddenElement],
                default: defaultElement,
                activeTabClass: IRRELEVANT,
                contentHideClass: 'newClass'
            });

            assert.equal(getClasses(hiddenElement), 'existingClass newClass');
        });

        it('styles the default tab with a class', function () {
            var defaultTab = createTab();
            var defaultContent = createTabContent();

            tabs.initialize({
                tabs: [defaultTab],
                content: [defaultContent],
                default: defaultContent,
                activeTabClass: 'activeTab',
                contentHideClass: IRRELEVANT
            });

            assert.equal(getClasses(defaultTab), 'activeTab');
        });

        it('preserves existing classes on the active tab', function () {
           // TODO
        });

        function createTab() {
            var tab = addElement('div');
            tab.innerHTML = 'tab';

            return tab;
        }

        function createTabContent() {
            var tab = addElement('div');
            tab.innerHTML = 'content';

            return tab;
        }

        function addElement (tagName) {
            var element = document.createElement(tagName);
            container.appendChild(element);

            return element;
        }

        function getClasses (element) {
            return element.getAttribute('class');
        }

        function removeElement (element) {
            element.parentNode.removeChild(element);
        }
    });
})();