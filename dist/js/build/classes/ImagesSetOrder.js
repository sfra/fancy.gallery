'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define([], function () {
    'use strict';

    var ImagesSetOrder = function () {
        function ImagesSetOrder(x, y) {
            _classCallCheck(this, ImagesSetOrder);

            this.x = x;
            this.y = y;
            this.order = [];
            this.basicOrder = [];
        }

        _createClass(ImagesSetOrder, [{
            key: 'getOrder',
            value: function getOrder() {
                return this.order;
            }
        }, {
            key: 'setReverseOrder',
            value: function setReverseOrder() {
                return this.order.reverse();
            }
        }, {
            key: 'saveOrder',
            value: function saveOrder() {
                this.basicOrder = this.order;
            }
        }, {
            key: 'shuffle',
            value: function shuffle() {
                this.saveOrder();
                var order0 = this.order.slice(0, Math.floor(this.order.length / 2) + this.order.length % 2);
                var order1 = this.order.slice().reverse().slice(0, Math.floor(this.order.length / 2) + this.order.length % 2);

                this.order = [];
                for (var i = 0; i < order0.length; i++) {
                    this.order.push(order0[i]);
                    this.order.push(order1[i]);
                }
            }
        }]);

        return ImagesSetOrder;
    }();

    var ImagesSetIterator = function (_ImagesSetOrder) {
        _inherits(ImagesSetIterator, _ImagesSetOrder);

        function ImagesSetIterator(x, y) {
            _classCallCheck(this, ImagesSetIterator);

            var _this = _possibleConstructorReturn(this, (ImagesSetIterator.__proto__ || Object.getPrototypeOf(ImagesSetIterator)).call(this, x, y));

            var direction = [1, 0] /* direction expressed by right,bottom */
            ,
                current = 0,
                xi = 0,
                yi = 0;
            var visited = [];

            while (_this.order.length < _this.x * _this.y) {

                if (visited[xi] === undefined) {
                    visited[xi] = [];
                }

                current += 1;

                switch (direction.join()) {
                    case '1,0':
                        if (xi >= _this.x || visited[xi][yi] !== undefined) {
                            xi -= 1;
                            yi += 1;
                            direction = [0, 1];
                        } else {
                            _this.order.push([xi, yi]);
                            visited[xi][yi] = true;
                            xi += 1;
                        }
                        break;
                    case '0,1':
                        if (yi >= y || visited[xi][yi]) {
                            yi -= 1;
                            xi -= 1;
                            direction = [-1, 0];
                        } else {
                            _this.order.push([xi, yi]);
                            visited[xi][yi] = true;
                            yi += 1;
                        }
                        break;
                    case '-1,0':
                        if (xi < 0 || visited[xi][yi]) {
                            xi += 1;
                            yi -= 1;
                            direction = [0, -1];
                        } else {
                            _this.order.push([xi, yi]);
                            visited[xi][yi] = true;
                            xi -= 1;
                        }
                        break;
                    case '0,-1':
                        if (yi < 0 || visited[xi][yi]) {
                            yi += 1;
                            xi += 1;
                            direction = [1, 0];
                        } else {
                            _this.order.push([xi, yi]);
                            visited[xi][yi] = true;
                            yi -= 1;
                        }
                        break;
                }
            }
            return _this;
        }

        return ImagesSetIterator;
    }(ImagesSetOrder);

    var ImagesSetIteratorSnake = function (_ImagesSetOrder2) {
        _inherits(ImagesSetIteratorSnake, _ImagesSetOrder2);

        function ImagesSetIteratorSnake(x, y) {
            _classCallCheck(this, ImagesSetIteratorSnake);

            var _this2 = _possibleConstructorReturn(this, (ImagesSetIteratorSnake.__proto__ || Object.getPrototypeOf(ImagesSetIteratorSnake)).call(this, x, y));

            for (var i = 0; i < _this2.x; i++) {
                if (i % 2 === 0) {
                    for (var j = 0; j < _this2.y; j++) {
                        _this2.order.push([i, j]);
                    }
                }

                if (i % 2 === 1) {
                    for (var _j = _this2.y - 1; _j >= 0; _j--) {
                        _this2.order.push([i, _j]);
                    }
                }
            }
            _this2.basicOrder = _this2.order;
            return _this2;
        }

        return ImagesSetIteratorSnake;
    }(ImagesSetOrder);

    var ImagesSetIteratorSnake2 = function (_ImagesSetOrder3) {
        _inherits(ImagesSetIteratorSnake2, _ImagesSetOrder3);

        function ImagesSetIteratorSnake2(x, y) {
            _classCallCheck(this, ImagesSetIteratorSnake2);

            var _this3 = _possibleConstructorReturn(this, (ImagesSetIteratorSnake2.__proto__ || Object.getPrototypeOf(ImagesSetIteratorSnake2)).call(this, x, y));

            for (var i = 0; i < _this3.y; i++) {
                if (i % 2 === 0) {
                    for (var j = 0; j < _this3.x; j++) {
                        _this3.order.push([j, i]);
                    }
                }

                if (i % 2 === 1) {
                    for (var _j2 = _this3.x - 1; _j2 >= 0; _j2--) {
                        _this3.order.push([_j2, i]);
                    }
                }
            }
            return _this3;
        }

        return ImagesSetIteratorSnake2;
    }(ImagesSetOrder);

    var ImagesSetIteratorBee = function (_ImagesSetOrder4) {
        _inherits(ImagesSetIteratorBee, _ImagesSetOrder4);

        function ImagesSetIteratorBee(x, y) {
            _classCallCheck(this, ImagesSetIteratorBee);

            var _this4 = _possibleConstructorReturn(this, (ImagesSetIteratorBee.__proto__ || Object.getPrototypeOf(ImagesSetIteratorBee)).call(this, x, y));

            for (var m = 0; m < _this4.y + _this4.x - 1; m++) {
                for (var j = 0; j < _this4.x; j++) {
                    for (var i = 0; i < _this4.y; i++) {
                        if (i + j === m) {
                            _this4.order.push([j, i]);
                        }
                    }
                }
            }

            return _this4;
        }

        return ImagesSetIteratorBee;
    }(ImagesSetOrder);

    var ImagesSetIteratorBee2 = function (_ImagesSetOrder5) {
        _inherits(ImagesSetIteratorBee2, _ImagesSetOrder5);

        function ImagesSetIteratorBee2(x, y) {
            _classCallCheck(this, ImagesSetIteratorBee2);

            var _this5 = _possibleConstructorReturn(this, (ImagesSetIteratorBee2.__proto__ || Object.getPrototypeOf(ImagesSetIteratorBee2)).call(this, x, y));

            for (var m = 0; m < _this5.x + _this5.y - 1; m++) {
                for (var j = 0; j < _this5.y; j++) {
                    for (var i = 0; i < _this5.x; i++) {
                        if (i + j === m) {
                            _this5.order.push([i, j]);
                        }
                    }
                }
            }

            return _this5;
        }

        return ImagesSetIteratorBee2;
    }(ImagesSetOrder);

    var ImagesSetIteratorChess = function (_ImagesSetOrder6) {
        _inherits(ImagesSetIteratorChess, _ImagesSetOrder6);

        function ImagesSetIteratorChess(x, y) {
            _classCallCheck(this, ImagesSetIteratorChess);

            var _this6 = _possibleConstructorReturn(this, (ImagesSetIteratorChess.__proto__ || Object.getPrototypeOf(ImagesSetIteratorChess)).call(this, x, y));

            for (var i = 0; i < _this6.x; i++) {

                for (var j = i % 2; j < _this6.y; j += 2) {

                    _this6.order.push([i, j]);
                }
            }

            for (var _i = 0; _i < _this6.x; _i++) {

                for (var _j3 = (_i + 1) % 2; _j3 < _this6.y; _j3 += 2) {

                    _this6.order.push([_i, _j3]);
                }
            }

            return _this6;
        }

        return ImagesSetIteratorChess;
    }(ImagesSetOrder);

    var ImagesSetIteratorChess3D = function (_ImagesSetOrder7) {
        _inherits(ImagesSetIteratorChess3D, _ImagesSetOrder7);

        function ImagesSetIteratorChess3D(x, y) {
            _classCallCheck(this, ImagesSetIteratorChess3D);

            var _this7 = _possibleConstructorReturn(this, (ImagesSetIteratorChess3D.__proto__ || Object.getPrototypeOf(ImagesSetIteratorChess3D)).call(this, x, y));

            for (var i = 0; i < _this7.x; i++) {

                for (var j = i % 3; j < _this7.y; j += 3) {

                    _this7.order.push([i, j]);
                }
            }

            for (var _i2 = 0; _i2 < _this7.x; _i2++) {

                for (var _j4 = (_i2 + 1) % 3; _j4 < _this7.y; _j4 += 3) {

                    _this7.order.push([_i2, _j4]);
                }
            }

            for (var _i3 = 0; _i3 < _this7.x; _i3++) {

                for (var _j5 = (_i3 + 2) % 3; _j5 < _this7.y; _j5 += 3) {

                    _this7.order.push([_i3, _j5]);
                }
            }

            return _this7;
        }

        return ImagesSetIteratorChess3D;
    }(ImagesSetOrder);

    var ImagesSetIteratorRainbow = function (_ImagesSetOrder8) {
        _inherits(ImagesSetIteratorRainbow, _ImagesSetOrder8);

        function ImagesSetIteratorRainbow(x, y) {
            _classCallCheck(this, ImagesSetIteratorRainbow);

            // this.order.push([0, 0]);
            // this.order.push([0, 1]);

            var _this8 = _possibleConstructorReturn(this, (ImagesSetIteratorRainbow.__proto__ || Object.getPrototypeOf(ImagesSetIteratorRainbow)).call(this, x, y));

            for (var i = 0; i < _this8.x; i++) {
                for (var j = 0; j < _this8.y; j++) {
                    _this8.order.push([i, j]);
                }
            }

            return _this8;
        }

        return ImagesSetIteratorRainbow;
    }(ImagesSetOrder);

    var ImagesSetIteratorRainbow2 = function (_ImagesSetOrder9) {
        _inherits(ImagesSetIteratorRainbow2, _ImagesSetOrder9);

        function ImagesSetIteratorRainbow2(x, y) {
            _classCallCheck(this, ImagesSetIteratorRainbow2);

            // this.order.push([0, 0]);
            // this.order.push([0, 1]);
            var _this9 = _possibleConstructorReturn(this, (ImagesSetIteratorRainbow2.__proto__ || Object.getPrototypeOf(ImagesSetIteratorRainbow2)).call(this, x, y));

            for (var j = 0; j < _this9.y; j++) {

                for (var i = 0; i < _this9.x; i++) {
                    _this9.order.push([i, j]);
                }
            }

            return _this9;
        }

        return ImagesSetIteratorRainbow2;
    }(ImagesSetOrder);

    var ImagesSetIteratorFactory = function () {
        function ImagesSetIteratorFactory(x, y, order, shuffled) {
            _classCallCheck(this, ImagesSetIteratorFactory);

            this.x = x;
            this.y = y;
            this.order = order;
            this.shuffled = shuffled;
        }

        _createClass(ImagesSetIteratorFactory, [{
            key: 'get',
            value: function get() {
                var shuffled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                var iterator = null;

                switch (this.order) {
                    case 'snail':
                        iterator = new ImagesSetIterator(this.x, this.y);
                        break;
                    case 'snake':
                        iterator = new ImagesSetIteratorSnake(this.x, this.y);
                        break;
                    case 'snake2':
                        iterator = new ImagesSetIteratorSnake2(this.x, this.y);
                        break;
                    case 'bee':
                        iterator = new ImagesSetIteratorBee(this.x, this.y);
                        break;
                    case 'bee2':
                        iterator = new ImagesSetIteratorBee2(this.x, this.y);
                        break;
                    case 'chess':
                        iterator = new ImagesSetIteratorChess(this.x, this.y);

                        break;
                    case 'chess3d':
                        iterator = new ImagesSetIteratorChess3D(this.x, this.y);
                        break;
                    case 'rainbow':
                        iterator = new ImagesSetIteratorRainbow(this.x, this.y);
                        break;
                    case 'rainbow2':
                        iterator = new ImagesSetIteratorRainbow2(this.x, this.y);
                        break;

                }

                if (shuffled) {
                    this.shuffled = true;

                    iterator.shuffle();
                }

                return iterator;
            }
        }, {
            key: 'set',
            value: function set(order) {
                var shuffled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                this.order = order;
                if (shuffled) {
                    this.shuffled = shuffled;
                }
            }
        }]);

        return ImagesSetIteratorFactory;
    }();

    return {
        ImagesSetIterator: ImagesSetIterator,
        ImagesSetIteratorFactory: ImagesSetIteratorFactory
    };
});