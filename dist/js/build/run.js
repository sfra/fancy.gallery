'use strict';

define(['stateSingleton', 'ImagesSet', 'libs/__ajax', 'plugins/order0', 'classes/Sequence', 'helpers/dom', 'helpers/insertCss'], function (stateSingleton, ImagesSet, __ajax, order, Sequence, dom, insertCss) {
    'use strict';

    var currentIndex = 0; // the number of the current image
    var reindexPromise = null,
        sequence = null,
        imgSArr = [],
        images = [],
        configJSON = {};

    var $slidesNav = document.getElementById('fancy-gallery-slides-nav');

    var mainPromise = new Promise(function (res, rej) {
        //promise loading config file
        var __aj = Object(__ajax('fancy.gallery.config.json', {
            method: 'GET'
        }));
        __aj.get().then(function (data) {
            res(JSON.parse(data));
        }, function (err) {
            ;
            rej(err);
        });
    });

    mainPromise.then(mainResolve);

    function mainResolve(data) {
        var _this = this;

        configJSON = data;
        var numberOfImgs = data.numberOfImgs;
        var elementsX = [],
            effect = data.effect;

        sequence = data.sequence;

        var _loop = function _loop(i) {

            if (typeof data.images !== 'undefined') {
                images[i] = data.images[i];
            }

            $slidesNav.appendChild(function (j) {
                var out = document.createElement('div');
                out.classList.add('fancy-gallery-slide-button');
                var inside = document.createElement('p');
                inside.setAttribute('x-data-nr', i);
                var img = new Image(data.tile.xdim * data.tile.w / 7, data.tile.ydim * data.tile.h / 7);
                img.src = 'images/img' + j + '.jpg';
                inside.appendChild(img);
                inside.classList.add('fancy-gallery-clearfix');
                out.appendChild(inside);

                return out;
            }(i));
        };

        for (var i = 0; i < numberOfImgs; i++) {
            _loop(i);
        }

        /* resize image according to the windows height */
        dom.adjustTiles(data);

        window.onresize = function () {
            dom.adjustTiles(data);
        };

        /* set switch button to 0 */
        dom.setButton(0);
        /* set imported properties from config to ImagesSet */
        ImagesSet.ImagesSet.tile = data.tile;

        for (var i = 0; i < numberOfImgs; i++) {
            imgSArr.push(new ImagesSet.ImagesSet(false, 'image-wrapper' + i));
            imgSArr[i].setSpeed(data.speed);
        }

        imgSArr[0].setElements();

        var $imagesWrapper = imgSArr[0].getDomElement().parentNode;

        for (var _i = 0, max = imgSArr.length; _i < max; _i++) {
            imgSArr[_i].setElementsX();
            imgSArr[_i].setEffect(effect);
        }

        insertCss(configJSON, configJSON['plugin'], function () {
            dom.adjustTiles(data);
        });

        /* events listeners */
        document.getElementById('fancy-gallery-switch-right').addEventListener('click', function (e) {

            if (stateSingleton.animation.isLasting) {
                // do not execute the function if during animation
                return;
            }

            var sequence = data.sequence;

            var fgs = sessionStorage.getItem('fancy-gallery-sequence');
            if (typeof fgs !== 'undefined' && fgs !== null) {
                sequence = fgs;
            }

            stateSingleton.animation.isLasting = true;
            if (images.length > 0) {
                // document.getElementById('css-plugin').setAttribute('href', `css/main.css.php?plugin=${images[currentIndex].plugin}`);
            }
            var current = imgSArr[currentIndex];
            var previousIndex = currentIndex;

            currentIndex = (currentIndex + 1) % numberOfImgs;

            dom.setButton(currentIndex);
            reindexPromise = new Promise(function (res, rej) {
                if (dom.reindexImgWrappers(previousIndex, currentIndex)) {
                    res();
                }
            });

            reindexPromise.then(function () {

                if (sequence === 'random') {
                    Sequence.random.bind(_this, current, imgSArr, effect, stateSingleton, currentIndex)();
                } else if (sequence === 'ordered') {
                    Sequence.ordered.bind(_this, current, imgSArr, effect, stateSingleton, [], currentIndex)();
                }
            });
        });

        document.getElementById('fancy-gallery-switch-left').addEventListener('click', function (e) {

            if (stateSingleton.animation.isLasting) {
                return;
            }

            var fgs = sessionStorage.getItem('fancy-gallery-sequence');
            if (typeof fgs !== 'undefined' && fgs !== null) {
                sequence = fgs;
            } else {
                sequence = data.sequence;
            }

            stateSingleton.animation.isLasting = true;
            if (images.length > 0) {

                document.getElementById('css-plugin').setAttribute('href', 'css/main.css.php?plugin=' + images[currentIndex].plugin);
            }

            var previous = imgSArr[currentIndex];
            var previousIndex = currentIndex;

            if (currentIndex > 0) {
                currentIndex -= 1;
            } else {
                currentIndex = imgSArr.length - 1;
            }

            reindexPromise = new Promise(function (res, rej) {

                if (dom.reindexImgWrappers(previousIndex, currentIndex)) {
                    res();
                }
            });
            dom.setButton(currentIndex);

            reindexPromise.then(function () {
                if (sequence === 'random') {
                    Sequence.random.bind(_this, previous, imgSArr, effect, stateSingleton, currentIndex)();
                } else if (sequence === 'ordered') {
                    Sequence.ordered.bind(_this, previous, imgSArr, effect, stateSingleton, order, currentIndex)();
                }
            }, function (err) {
                ;
            });
        });

        $slidesNav.addEventListener('click', function (e) {
            var $target = e.target;

            if ($target.tagName !== 'P') {
                return;
            }

            if (stateSingleton.animation.isLasting) {
                return;
            }

            if (images.length > 0) {
                document.getElementById('css-plugin').setAttribute('href', 'css/main.css.php?plugin=' + images[currentIndex].plugin);
            }

            var fgs = sessionStorage.getItem('fancy-gallery-sequence');
            if (typeof fgs !== 'undefined' && fgs !== null) {
                sequence = fgs;
            } else {
                sequence = data.sequence;
            }

            stateSingleton.animation.isLasting = true;
            var previousIndex = currentIndex;
            currentIndex = parseInt($target.getAttribute('x-data-nr'), 10);
            dom.setButton(currentIndex);
            reindexPromise = new Promise(function (res, rej) {
                if (dom.reindexImgWrappers(previousIndex, currentIndex)) {
                    res();
                }
            });

            reindexPromise.then(function () {
                if (sequence === 'random') {
                    Sequence.random.bind(_this, imgSArr[previousIndex], imgSArr, effect, stateSingleton, $target.getAttribute('x-data-nr'))();
                } else if (sequence === 'ordered') {
                    Sequence.ordered.bind(_this, imgSArr[previousIndex], imgSArr, effect, stateSingleton, order, $target.getAttribute('x-data-nr'))();
                }
            }, function () {});
        }, false);

        /** for debugging **/
        //         let event = new MouseEvent('click');
        //         document.getElementById('fancy-gallery-switch-right').dispatchEvent(event);
        /** end for debugging **/
    }
    return {};
});