'use strict';

define(['classes/ImagesSetOrder', 'stateSingleton'], function (ImagesSetOrder, stateSingleton) {
    'use strict';
    /**
     * Constructs a ImageSet object.
     *
     * Provides the wrapper for image consisting of the many tiles.
     *
     * @constructor
     *
     * @param {object}
     * @param {string} tableSettings
     * @param {Array}
     * @param {Array}
     */

    function ImagesSet(_state, _id, _elementsX, _elementsY) {
        var _this = this;

        var state = _state;
        var imgSetItFactory = new ImagesSetOrder.ImagesSetIteratorFactory(ImagesSet.tile.xdim, ImagesSet.tile.ydim, stateSingleton.order.name);

        var imagesSetIterator = null,
            oorder = null;

        var id = void 0,
            hidden = false,
            effect = 'hide',
            rowsNr = void 0,
            columnsNr = void 0,
            speed = 15,
            elementsX = [],
            elementsY = [],
            elements = [],
            elementsRandom = [];

        this.setSpeed = function (_speed) {
            speed = _speed;
        };
        this.setSequence = function (order) {

            imgSetItFactory.set(order.name);

            imagesSetIterator = imgSetItFactory.get(stateSingleton.order.shuffled || order.shuffled);

            if (stateSingleton.order.direction === 'reverse' || order.direction === 'reverse') {
                oorder = imagesSetIterator.setReverseOrder();
            } else {
                oorder = imagesSetIterator.getOrder();
            }

            _this.setSpeed(order.speed);

            if (typeof _elementsX !== 'undefined') {
                for (var i = 0, max = _elementsX.length; i < max; i++) {
                    elementsX.push(_elementsX[i]);
                }
            }

            if (typeof _elementsY !== 'undefined') {
                for (var _i = 0, _max = _elementsY.length; _i < _max; _i++) {
                    elementsY.push(_elementsY[_i]);
                }
            } else {
                var $imageWrapper = document.getElementById(_id);
                var rows = $imageWrapper.children;
                var cols = void 0;
                for (var _i2 = 0, _max2 = ImagesSet.tile.ydim; _i2 < _max2; _i2++) {
                    cols = rows[_i2].children;
                    elementsY.push([]);
                    for (var j = 0, max0 = ImagesSet.tile.xdim; j < max0; j++) {
                        elementsY[_i2][j] = rows[_i2].children[j];
                    }
                }
            }
        };

        this.setSequence(stateSingleton.order);

        if (typeof _id !== 'undefined') {
            id = _id;
        }

        this.getState = function () {
            return state;
        };

        this.setElements = function () {
            var $imageWrapper = document.getElementById(id),
                rows = $imageWrapper.children;
            rowsNr = rows.length;
            columnsNr = rows[0].children.length + 0;
            var currentRow = [];
            for (var i = 0; i < rowsNr; i++) {
                for (var j = 0; j < columnsNr; j++) {
                    currentRow.push(rows[i].children[j]);
                }
                elements.push(currentRow);
                currentRow = [];
            }
        };

        this.copyElements = function () {
            for (var i = 0, max = elementsX.length; i < max; i++) {
                elementsRandom[i] = elementsX[i];
            }
        };

        this.getElements = function () {
            return elements;
        };

        this.setElementsX = function () {
            var $imageWrapper = document.getElementById(id);

            elementsX = function () {
                var elementsY = $imageWrapper.children;
                var elementsX = [];
                var maxY = $imageWrapper.children.length;
                var maxX = $imageWrapper.children[0].children.length;

                for (var i = 0; i < maxY; i++) {
                    for (var j = 0; j < maxX; j++) {
                        elementsX.push($imageWrapper.children[i].children[j]);
                    }
                }

                return elementsX;
            }();
        };

        /**
         * animates tiles in the order of occurung and then runs the callback
         * @method toggleHideShow
         * @param {function} callback the function which runs after last animation
         */
        this.toggleHideShow = function (callback) {
            var _loop = function _loop(i, max) {

                (function (j) {
                    var k = j;

                    setTimeout(function () {
                        if (hidden) {
                            elementsX[k].classList.remove(effect);
                        } else {
                            elementsX[k].classList.add(effect);
                        }

                        if (j === max - 1) {
                            hidden = hidden ? false : true;
                            callback.bind(_this)();
                        }
                    }, k * 5);
                })(i);
            };

            for (var i = 0, max = elementsX.length; i < max; i++) {
                _loop(i, max);
            }
        };

        /**
         * animates tiles in the order given by a function order and then runs the callback
         * @method toggleShowHideFun
         * @param {function} callback the function which runs after last animation
         * @param {function} order the function that for a gived xdim, ydim and index number prameters return coordinates the next element
         */
        this.toggleShowHideFun = function (callback, order) {
            _this.copyElements();

            var _loop2 = function _loop2(i, max) {

                (function (j) {
                    var k = j;

                    setTimeout(function () {
                        var ccurentIndex = oorder[max - 1 - k];

                        if (hidden) {
                            elementsY[ccurentIndex[1]][ccurentIndex[0]].classList.remove(effect);
                        } else {
                            elementsY[ccurentIndex[1]][ccurentIndex[0]].classList.add(effect);
                        }

                        if (j === max - 1) {
                            hidden = hidden ? false : true;
                            callback.bind(_this)();
                        }
                    }, k * speed);
                })(i);
            };

            for (var i = 0, max = ImagesSet.tile.xdim * ImagesSet.tile.ydim; i < max; i++) {
                _loop2(i, max);
            }
        };

        /**
         * animates tiles in the random order and then runs the callback
         * @method toggleHideShowRandom
         * @param {function} callback the function which runs after last animation
         */
        this.toggleHideShowRandom = function (callback) {
            _this.copyElements();

            var _loop3 = function _loop3(i, max) {

                (function (j) {
                    var k = j;

                    setTimeout(function () {
                        var currentIndex = parseInt(Math.random() * elementsRandom.length);

                        if (hidden) {
                            elementsRandom.splice(currentIndex, 1)[0].classList.remove(effect);
                        } else {
                            elementsRandom.splice(currentIndex, 1)[0].classList.add(effect);
                        }

                        if (j === max - 1) {
                            hidden = hidden ? false : true;
                            callback.bind(_this)();
                        }
                    }, k * 25);
                })(i);
            };

            for (var i = 0, max = elementsX.length; i < max; i++) {
                _loop3(i, max);
            }
        };

        this.getDomElement = function () {
            return document.getElementById(id);
        };

        this.setHidden = function (isHidden) {
            hidden = isHidden;
        };

        this.setEffect = function (_effect) {
            effect = _effect;
        };

        /**
         * removes the class _class from the elements contained in
         * element given by id
         * @method toggleHideShowRandom
         * @param {string} the name of the class
         */
        this.removeClass = function (_class) {
            var $imageWrapper = document.getElementById(id);
            var maxY = $imageWrapper.children.length;
            var maxX = $imageWrapper.children[0].children.length;

            for (var i = 0; i < maxY; i++) {
                for (var j = 0; j < maxX; j++) {
                    $imageWrapper.children[i].children[j].classList.remove(_class);
                }
            }
        };
    }

    return {
        ImagesSet: ImagesSet
    };
});