/**
 * Created by David on 31/01/2016.
 */

(function () {
    'use strict';

    var assert = require('./assert.js');
    var tabs = require('./tabs.js');

    describe('Tabs', function () {
        it('hides an element', function () {
            // Arrange
            var element = addElement('div');

            // Act
            tabs.initialize(element);

            // Assert
            assert.equal(getDisplayProperty(element), 'none');

            // Reset
            removeElement(element);
        });

        function addElement (tagName) {
            var element = document.createElement(tagName);
            document.body.appendChild(element);

            return element;
        }

        function getDisplayProperty (element) {
            var styles = getComputedStyle(element);

            return styles.getPropertyValue('display');
        }

        function removeElement (element) {
            element.parentNode.removeChild(element);
        }
    });
})();