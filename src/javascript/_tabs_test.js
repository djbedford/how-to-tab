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
            var defaultTab = createTab();

            var content1 = createTabContent();
            var defaultContent = createTabContent();
            var content3 = createTabContent();

            tabs.initialize({
                tabs: [createTab(), defaultTab, createTab()],
                content: [content1, defaultContent, content3],
                defaultTab: defaultTab,
                activeTabClass: IRRELEVANT,
                contentHideClass: 'hideClass'
            });

            assert.equal(getClasses(content1), 'hideClass', 'element 1 should be hidden');
            assert.equal(getClasses(defaultContent), '', 'default element should not be hidden');
            assert.equal(getClasses(content3), 'hideClass', 'element 3 should be hidden');
        });

        it('preserves existing classes when hiding a content element', function () {
            var defaultTab = createTab();

            var defaultElement = createTabContent();
            var hiddenElement = createTabContent();
            hiddenElement.setAttribute('class', 'existingClass');

            tabs.initialize({
                tabs: [defaultTab, createTab()],
                content: [defaultElement, hiddenElement],
                defaultTab: defaultTab,
                activeTabClass: IRRELEVANT,
                contentHideClass: 'newClass'
            });

            assert.equal(getClasses(hiddenElement), 'existingClass newClass');
        });

        it('styles the default tab with a class', function () {
            var tab1 = createTab();
            var defaultTab = createTab();
            var tab3 = createTab();

            var defaultContent = createTabContent();

            tabs.initialize({
                tabs: [tab1, defaultTab, tab3],
                content: [createTabContent(), defaultContent, createTabContent()],
                defaultTab: defaultTab,
                activeTabClass: 'activeTab',
                contentHideClass: IRRELEVANT
            });

            assert.equal(getClasses(tab1), null, 'tab 1 should not be styled');
            assert.equal(getClasses(defaultTab), 'activeTab', 'default element should be styled');
            assert.equal(getClasses(tab3), null, 'tab 3 should not be styled');

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