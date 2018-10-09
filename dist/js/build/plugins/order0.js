"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

define([], function () {
    var order = function order(x, y, index) {
        var direction = null;
        if (!index % 2) {
            direction = _defineProperty({
                x: 1
            }, "x", y);
        }

        return [parseInt(index / x), index % x];
    };

    return order;
});