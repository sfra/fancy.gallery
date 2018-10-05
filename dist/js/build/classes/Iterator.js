'use strict';

define([], function () {
    'use strict';

    var Iteraror = function Iteraror(_elements) {
        var _this = this;

        var elements = void 0,
            index = void 0,
            length = void 0;

        this.setElements = function (_elements) {

            if (typeof _elements === 'undefined') {
                elements = [];
            } else {
                elements = _elements;
                index = 0;
            }
        };

        this.setElements(_elements);

        length = elements.length;

        this.next = function () {
            if (!_this.hasNext()) {
                return null;
            }
            index++;

            return elements[index];
        };

        this.hasNext = function () {
            return index < length;
        };

        this.rewind = function () {
            index = 0;
            return elements[index];
        };

        this.current = function () {

            return elements[index];
        };
    };

    return Iteraror;
});