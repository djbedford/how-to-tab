/**
 * Created by David on 31/01/2016.
 */

(function () {
    'use strict';

    var assert = require('./assert.js');
    var tabs = require('./tabs.js');

    describe('Tabs', function () {
        it('sets a class on an element when that element has no existing classes', function () {
            // Arrange
            var element = addElement('div');

            // Act
            tabs.initialize(element, 'someClass');

            // Assert
            assert.equal(getClass(element), 'someClass');

            // Reset
            removeElement(element);
        });

        it('sets a class on an element without erasing existing classes', function () {
            var element = addElement('div');
            element.setAttribute('class', 'existingClass');

            tabs.initialize(element, 'newClass');

            assert.equal(getClass(element), 'existingClass newClass');

            removeElement(element);
        });

        function addElement (tagName) {
            var element = document.createElement(tagName);
            document.body.appendChild(element);

            return element;
        }

        function getClass (element) {
            return element.getAttribute('class');
        }

        function removeElement (element) {
            element.parentNode.removeChild(element);
        }
    });
})();