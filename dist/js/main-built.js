define('stateSingleton',[], () => {
    return {
        image: {
            hidden: false
        },
        animation: {
            isLasting: false
        },
        order: {
            name: 'snail',
            direction: 'reverse'
        }
    };
});
define('classes/ImagesSetOrder',[], () => {
    'use strict';
    class ImagesSetOrder {
        constructor(x, y) {

            this.x = x;
            this.y = y;

            this.getOrder = () => {
                return this.order;
            };

            this.setReverseOrder = () => {
                return this.order.reverse();
            };

            this.order = [];
        }

        getOrder() {
            return this.order;
        }
        setReverseOrder() {
            return this.order.reverse();
        }
    }

    class ImagesSetIterator extends ImagesSetOrder {

        constructor(x, y) {
            super(x, y);

            let direction = [1, 0] /* direction expressed by right,bottom */ ,
                current = 0,
                xi = 0,
                yi = 0;
            const visited = [];

            while (this.order.length < this.x * this.y) {

                if (visited[xi] === undefined) {
                    (visited[xi] = []);
                }

                current += 1;

                switch (direction.join()) {
                    case '1,0':
                        if (xi >= this.x || visited[xi][yi] !== undefined) {
                            xi -= 1;
                            yi += 1;
                            direction = [0, 1];
                        } else {
                            this.order.push([xi, yi]);
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
                            this.order.push([xi, yi]);
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
                            this.order.push([xi, yi]);
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
                            this.order.push([xi, yi]);
                            visited[xi][yi] = true;
                            yi -= 1;
                        }
                        break;
                }
            }
        }
    }

    class ImagesSetIteratorSnake extends ImagesSetOrder {
        constructor(x, y) {
            super(x, y);

            for (let i = 0; i < this.x; i++) {
                if (i % 2 === 0) {
                    for (let j = 0; j < this.y; j++) {
                        this.order.push([i, j]);
                    }
                }

                if (i % 2 === 1) {
                    for (let j = this.y - 1; j >= 0; j--) {
                        this.order.push([i, j]);
                    }
                }
            }
        }
    }



    class ImagesSetIteratorSnake2 extends ImagesSetOrder {
        constructor(x, y) {
            super(x, y);

            for (let i = 0; i < this.y; i++) {
                if (i % 2 === 0) {
                    for (let j = 0; j < this.x; j++) {
                        this.order.push([j, i]);
                    }
                }

                if (i % 2 === 1) {
                    for (let j = this.x - 1; j >= 0; j--) {
                        this.order.push([j, i]);
                    }
                }
            }
        }
    }



    class ImagesSetIteratorFactory {
        constructor(x, y, order) {
            this.x = x;
            this.y = y;
            this.order = order;

        }
        get() {
            switch (this.order) {
                case 'snail':
                    return new ImagesSetIterator(this.x, this.y);
                case 'snake':
                    return new ImagesSetIteratorSnake(this.x, this.y);
                case 'snake2':
                    return new ImagesSetIteratorSnake2(this.x, this.y);

            }
        }
        set(order) {
            this.order = order;
        }
    }

    return {
        ImagesSetIterator,
        ImagesSetIteratorSnake,
        ImagesSetIteratorFactory
    };
});
define('classes/ImagesSet',['classes/ImagesSetOrder', 'stateSingleton'], function (ImagesSetOrder, stateSingleton) {
    'use strict';
    /**
     * Constructs a ImageSet object.
     * 
     * Provides the wrapper for image consistiong of the many tiles.
     * 
     * @constructor
     *
     * @param {object} 
     * @param {string} tableSettings
     * @param {Array}
     * @param {Array}
     */
    function ImagesSet(_state, _id, _elementsX, _elementsY) {
        console.log('ImagesSet');
        const state = _state;


        const imgSetItFactory = new ImagesSetOrder.ImagesSetIteratorFactory(ImagesSet.tile.xdim, ImagesSet.tile.ydim, stateSingleton.order.name);
        let imagesSetIterator = null,
            oorder = null;

        let id, hidden = false,
            effect = 'hide',
            rowsNr, columnsNr, speed = 15,
            elementsX = [],
            elementsY = [],
            elements = [],
            elementsRandom = [];

            
        this.setSequence = (order) => {
            imgSetItFactory.set(order.name);
            imagesSetIterator = imgSetItFactory.get();


            if (stateSingleton.order.direction === 'reverse') {
                imagesSetIterator.setReverseOrder();
            }
            oorder = imagesSetIterator.getOrder();
            if ((typeof _elementsX) !== 'undefined') {
                for (let i = 0, max = _elementsX.length; i < max; i++) {
                    elementsX.push(_elementsX[i]);
                }
            }

            if (typeof _elementsY !== 'undefined') {
                for (let i = 0, max = _elementsY.length; i < max; i++) {
                    elementsY.push(_elementsY[i]);
                }
            } else {
                let $imageWrapper = document.getElementById(_id);
                let rows = $imageWrapper.children;
                let cols;
                for (let i = 0, max = ImagesSet.tile.ydim; i < max; i++) {
                    cols = rows[i].children;
                    elementsY.push([]);
                    for (let j = 0, max0 = ImagesSet.tile.xdim; j < max0; j++) {
                        (elementsY[i])[j] = rows[i].children[j];
                    }
                }
            }
        }
        this.setSequence(stateSingleton.order);

        if (typeof _id !== 'undefined') {
            id = _id;
        }

        this.getState = () => {
            return state;
        };

        this.setElements = () => {
            const $imageWrapper = document.getElementById(id),
                rows = $imageWrapper.children;
            rowsNr = (rows.length);
            columnsNr = (rows[0].children.length) + 0;
            let currentRow = [];
            for (let i = 0; i < rowsNr; i++) {
                for (let j = 0; j < columnsNr; j++) {
                    currentRow.push(rows[i].children[j]);
                }
                elements.push(currentRow);
                currentRow = [];
            }
        };

        this.setSpeed = (_speed) => {
            speed = _speed;
        };

        this.copyElements = () => {
            for (let i = 0, max = elementsX.length; i < max; i++) {
                elementsRandom[i] = elementsX[i];
            }
        };

        this.getElements = () => {
            return elements;
        };


        this.setElementsX = () => {
            let $imageWrapper = document.getElementById(id);

            elementsX = (() => {
                let elementsY = $imageWrapper.children;
                let elementsX = [];
                let maxY = $imageWrapper.children.length;
                let maxX = $imageWrapper.children[0].children.length;

                for (let i = 0; i < maxY; i++) {
                    for (let j = 0; j < maxX; j++) {
                        elementsX.push($imageWrapper.children[i].children[j]);
                    }
                }

                return elementsX;

            })();
        };



        /**
         * animates tiles in the order of occurung and then runs the callback 
         * @method toggleHideShow 
         * @param {function} callback the function which runs after last animation
         */
        this.toggleHideShow = (callback) => {

            for (let i = 0, max = elementsX.length; i < max; i++) {

                ((j) => {
                    let k = j;

                    setTimeout(() => {
                        if (hidden) {
                            elementsX[k].classList.remove(effect);

                        } else {
                            elementsX[k].classList.add(effect);
                        }

                        if (j === max - 1) {
                            hidden = hidden ? false : true;
                            (callback.bind(this))();

                        }

                    }, k * 5);
                })(i);

            }
        };

        /**
         * animates tiles in the order given by a function order and then runs the callback 
         * @method toggleShowHideFun 
         * @param {function} callback the function which runs after last animation
         * @param {function} order the function that for a gived xdim, ydim and index number prameters return coordinates the next element
         */
        this.toggleShowHideFun = (callback, order) => {
            console.log('toggleShowHideFun');
            this.copyElements();

            for (let i = 0, max = ImagesSet.tile.xdim * ImagesSet.tile.ydim; i < max; i++) {

                ((j) => {
                    let k = j;

                    setTimeout(() => {
                        let ccurentIndex = oorder[max - 1 - k];

                        if (hidden) {
                            elementsY[ccurentIndex[1]][ccurentIndex[0]].classList.remove(effect);
                        } else {
                            elementsY[ccurentIndex[1]][ccurentIndex[0]].classList.add(effect);
                        }

                        if (j === max - 1) {
                            hidden = hidden ? false : true;
                            (callback.bind(this))();
                        }
                    }, k * speed);
                })(i);

            }


        };


        /**
         * animates tiles in the random order and then runs the callback 
         * @method toggleHideShowRandom 
         * @param {function} callback the function which runs after last animation
         */
        this.toggleHideShowRandom = (callback) => {
            this.copyElements();


            for (let i = 0, max = elementsX.length; i < max; i++) {

                ((j) => {
                    let k = j;

                    setTimeout(() => {
                        let currentIndex = parseInt(Math.random() * elementsRandom.length);

                        if (hidden) {
                            ((elementsRandom.splice(currentIndex, 1))[0]).classList.remove(effect);
                        } else {
                            ((elementsRandom.splice(currentIndex, 1))[0]).classList.add(effect);
                        }

                        if (j === max - 1) {
                            hidden = hidden ? false : true;
                            (callback.bind(this))();
                        }
                    }, k * 25);
                })(i);

            }


        };

        this.getDomElement = () => {
            return document.getElementById(id);
        };

        this.setHidden = (isHidden) => {
            hidden = isHidden;
        };


        this.setEffect = (_effect) => {
            effect = _effect;
        };

        /**
         * removes the class _class from the elements contained in
         * element given by id
         * @method toggleHideShowRandom 
         * @param {string} the name of the class
         */
        this.removeClass = (_class) => {
            let $imageWrapper = document.getElementById(id);
            let maxY = $imageWrapper.children.length;
            let maxX = $imageWrapper.children[0].children.length;

            for (let i = 0; i < maxY; i++) {
                for (let j = 0; j < maxX; j++) {
                    $imageWrapper.children[i].children[j].classList.remove(_class);
                }
            }

        };

    }



    return {
        ImagesSet
    };
});
/*

*		var __ajax=new __ajax('/someUrl');
*
* __ajax.get(function(data){},function(err){});
*/


/*
 *
 */

define('libs/__ajax',[], function () {
  function __ajax(_url, _config) {

    let xmlhttp;
    let config = {};
    let url = _url;

    let parameters = '';

    let setParameters = (obj) => {

      parameters = '';
      for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          parameters += prop + "=" + obj[prop] + '&';
        }
      };

      parameters = parameters.substr(0, parameters.length - 1);

    };



    config.method = (_config === undefined) ? 'GET' : (_config.method || 'POST');

    // Object.defineProperty(config, 'method', {
    //   configurable: true,
    //   enumerable: true,
    //   value: (_config === undefined) ? 'GET' : (_config.method || 'POST')
    // });

    if (typeof _config !== 'undefined' && typeof _config.parameters !== 'undefined') {
      setParameters(_config.parameters);
    };

    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else {
      xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }




    let promise = null;

    return {
      setUrl: (_url) => {
        url = _url;
      },

      setParameters: setParameters,
      addParameters: (params)=>{
        for(let prop in params) {
          if(params.hasOwnProperty(prop)) {
            parameters+=`&${prop}=${params[prop]}`;
          }
        }
      },
      getParameters: ()=> {
        return parameters;
      },
      setMethod: (meth)=>{
        config.method =meth;
      },

      get: ()=> {
        promise = new Promise((res, rej)=> {

          xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState === 4) {
              if (xmlhttp.status === 200) {
                res(xmlhttp.responseText);
              } else if (xmlhttp.status === 400) {
                rej('[400]');
              } else {
                rej('[ne 200]')
              }
            }
          };

          xmlhttp.open(config.method, url, true);

          //                    if(config.method==='post') {
          xmlhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          //
          //                                      };
          //              xmlhttp.send(JSON.stringify(parameters));
          xmlhttp.send(parameters);

        });


        return promise;

      }
    };

  }

    return __ajax;

});

define('plugins/order0',[], () => {
    const order = (x, y, index) => {
        let direction = null;
        if (!index % 2) {
            direction = {
                x: 1,
                x: y
            };
        }


        return [parseInt(index / x), index % x];

    };

    return order;

});
define('classes/Sequence',[], () => {

    'use strict';

    function random(current, imgSArr, effect, stateSingleton, currentIndex) {
        current.toggleHideShowRandom(
            () => {
                setTimeout(() => {
                    rearangeAfterMove(imgSArr, effect, stateSingleton, currentIndex);

                }, 1000);
            });
    }


    function ordered(previous, imgSArr, effect, stateSingleton, order, currentIndex) {
        previous.toggleShowHideFun(
            () => {
                setTimeout(() => {
                    rearangeAfterMove(imgSArr, effect, stateSingleton, currentIndex);

                }, 1000);
            }, order);
    }



    function rearangeAfterMove(imgSArr, effect, stateSingleton, currentIndex) {
        let indexNext = 0;
        let i = currentIndex;
        for (let max = imgSArr.length; i < max; i++) {
            imgSArr[i].getDomElement().style.zIndex = -(indexNext++) * 10;
            imgSArr[i].setHidden(false);
            imgSArr[i].removeClass(effect);
        }

        for (i = 0; i < currentIndex; i++) {
            imgSArr[i].getDomElement().style.zIndex = -(indexNext++) * 10;
            imgSArr[i].setHidden(false);
            imgSArr[i].removeClass(effect);
        }


        stateSingleton.animation.isLasting = false;
    }

    return {
        random,
        ordered
    };

});
define('helpers/dom',[], function () {
    // TODO: resize tile
    'use strict';

    const $galWrapper = document.getElementById('fancy-gallery-gal-wrapper');


    /**
     * adjust the tiles to the width 
     * @method adjustTiles 
     * @param {object} config object
     */
    function adjustTiles(data) {
        let currentWidth = $galWrapper.offsetWidth,
            orginalWidth = data.tile.w * data.tile.xdim,
            orginalHeight = data.tile.h * data.tile.ydim,
            factor = currentWidth / orginalWidth,
            currentHeight = (orginalHeight / orginalWidth) * currentWidth;

        $galWrapper.style.height = currentHeight + 'px';


        for (let k = 0, maxNr = data.numberOfImgs; k < maxNr; k++) {
            for (let i = 0, maxY = data.tile.ydim; i < maxY; i++) {
                for (let j = 0, maxX = data.tile.xdim; j < maxX; j++) {
                    $galWrapper.children[k].children[i].children[j].style.backgroundPosition =
                        '-' + (factor * data.tile.w * j) + 'px -' + (factor * data.tile.h * i) + 'px ';
                }
            }
        }

    }

    /**
     * changes the the order of the images  
     * @method reindexImgWrappers 
     * @param {number} index of the current image
     */
    function reindexImgWrappers(current, next) {


        for (let i = 0, max = $galWrapper.children.length - 1; i < max; i++) {
            if (i !== current && i !== next) {
                $galWrapper.children[i].style.zIndex = 0;
            }
        }

        $galWrapper.children[current].style.zIndex = 20;
        $galWrapper.children[next].style.zIndex = 10;





        return true;
    }


    /**
     * 
     * @method changeTileBG 
     */
    function changeTileBG() {
        const tile_height = document.querySelectorAll('.fancy-gallery-img-wrapper')[0].children[0].children[9].offsetHeight,
            tile_width = document.querySelectorAll('.fancy-gallery-img-wrapper')[0].children[0].children[9].offsetWidth,
            $tiles = document.querySelectorAll('.fancy-gallery-img-wrapper > div'),
            $images = document.querySelectorAll('.fancy-gallery-img-wrapper'),
            tiles_vert = $tiles.length,
            tiles_hor = $tiles[0].children.length;

        let current_image = null;



        for (let i = 0; i < tiles_vert; i++) {
            for (let j = 0; j < tiles_hor; j++) {
                for (let k = 0, max = $images.length; k < max; k++) {
                    replacer = $images[k].children[i].children[j].getAttribute('style');
                    replacer = replacer.replace(/background\-position:[^;]*;/,
                        'background-position: ' + (j * tile_width) + 'px ' + (-(i * tile_height)) + 'px;');
                    $images[k].children[i].children[j].setAttribute('style', replacer);

                }

            }
        }



    }

    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    const $buttons = document.getElementById('fancy-gallery-slides-nav').children;

    function setButton(nr) {

        for (let i = 0, max = $buttons.length; i < max; i++) {
            if (i === nr) {
                $buttons[i].classList.add('active');
            } else {
                $buttons[i].classList.remove('active');

            }

        }
    }


    return {
        adjustTiles,
        reindexImgWrappers,
        insertAfter,
        setButton
    };
});
define('run',['stateSingleton', 'classes/ImagesSet', 'libs/__ajax', 'plugins/order0', 'classes/Sequence', 'helpers/dom'], (stateSingleton, ImagesSet, __ajax, order, Sequence, dom) => {
    'use strict';
    let currentIndex = 0; // the number of the current image
    let reindexPromise = null,
        sequence = null;

    const $slidesNav = document.getElementById('fancy-gallery-slides-nav');

    let mainPromise = new Promise((res, rej) => { //promise loading config file
        let __aj = Object(__ajax('config.json', {
            method: 'GET'
        }));
        __aj.get().then((data) => {
                res(JSON.parse(data));
            },
            (err) => {
                console.log(err);
                rej(err);
            });
    });


    mainPromise.then(mainResolve);

    function mainResolve(data) {

        const numberOfImgs = data.numberOfImgs;
        let imgSArr = [],
            elementsX = [],
            effect = data.effect;

        sequence = data.sequence;




        for (let i = 0; i < numberOfImgs; i++) {
            $slidesNav.appendChild(((j) => {
                let out = document.createElement('div');
                out.classList.add('fancy-gallery-slide-button');
                let inside = document.createElement('p');
                inside.setAttribute('x-data-nr', i);
                let img = new Image(data.tile.xdim * data.tile.w / 7, data.tile.ydim * data.tile.h / 7);
                img.src = 'images/img' + j + '.jpg';
                inside.appendChild(img);
                inside.classList.add('fancy-gallery-clearfix');
                out.appendChild(inside);

                return out;
            })(i));

        }



        /* resize image according to the windows height */
        dom.adjustTiles(data);

        window.onresize = () => {
            dom.adjustTiles(data);

        };

        /* set switch button to 0 */
        dom.setButton(0);
        /* set imported properties from config to ImagesSet */
        ImagesSet.ImagesSet.tile = data.tile;

        for (let i = 0; i < numberOfImgs; i++) {
            imgSArr.push(new ImagesSet.ImagesSet(false, 'image-wrapper' + i));
            imgSArr[i].setSpeed(data.speed);
        }

        imgSArr[0].setElements();

        let $imagesWrapper = imgSArr[0].getDomElement().parentNode;

        for (let i = 0, max = imgSArr.length; i < max; i++) {
            imgSArr[i].setElementsX();
            imgSArr[i].setEffect(effect);
        }



        /* events listeners */
        document.getElementById('fancy-gallery-switch-right').addEventListener('click', (e) => {

            if (stateSingleton.animation.isLasting) { // do not execute the function if during animation 
                return;
            }

            let sequence = data.sequence;

            let fgs = sessionStorage.getItem('fancy-gallery-sequence');
            if (typeof fgs !== 'undefined' && fgs !== null) {
                sequence = fgs;
            }

            stateSingleton.animation.isLasting = true;

            let current = imgSArr[currentIndex];
            let previousIndex = currentIndex;

            currentIndex = (currentIndex + 1) % numberOfImgs;


            dom.setButton(currentIndex);
            reindexPromise = new Promise((res, rej) => {
                if (dom.reindexImgWrappers(previousIndex, currentIndex)) {
                    res();
                }

            });

            reindexPromise.then(() => {


                if (sequence === 'random') {

                    (Sequence.random.bind(this, current, imgSArr, effect, stateSingleton, currentIndex))();
                } else if (sequence === 'ordered') {
                    (Sequence.ordered.bind(this, current, imgSArr, effect, stateSingleton, [], currentIndex))();
                }
            });


        });

        document.getElementById('switch-left').addEventListener('click', (e) => {

            if (stateSingleton.animation.isLasting) {
                return;
            }

            let fgs = sessionStorage.getItem('fancy-gallery-sequence');
            if (typeof fgs !== 'undefined' && fgs !== null) {
                sequence = fgs;
            } else {
                sequence = data.sequence;
            }

            stateSingleton.animation.isLasting = true;

            let previous = imgSArr[currentIndex];
            let previousIndex = currentIndex;



            if (currentIndex > 0) {
                currentIndex -= 1;
            } else {
                currentIndex = imgSArr.length - 1;
            }



            reindexPromise = new Promise((res, rej) => {

                if (dom.reindexImgWrappers(previousIndex, currentIndex)) {
                    res();
                }

            });
            dom.setButton(currentIndex);

            reindexPromise.then(() => {
                if (sequence === 'random') {
                    (Sequence.random.bind(this, previous, imgSArr, effect, stateSingleton, currentIndex))();
                } else if (sequence === 'ordered') {
                    (Sequence.ordered.bind(this, previous, imgSArr, effect, stateSingleton, order, currentIndex))();
                }
            }, (err) => {
                console.log(err);
            });

        });



        $slidesNav.addEventListener('click', (e) => {
            const $target = e.target;

            if ($target.tagName !== 'P') {
                return;
            }

            if (stateSingleton.animation.isLasting) {
                return;
            }

            let fgs = sessionStorage.getItem('fancy-gallery-sequence');
            if (typeof fgs !== 'undefined' && fgs !== null) {
                sequence = fgs;
            } else {
                sequence = data.sequence;
            }


            stateSingleton.animation.isLasting = true;
            let previousIndex = currentIndex;
            currentIndex = parseInt($target.getAttribute('x-data-nr'), 10);
            dom.setButton(currentIndex);
            reindexPromise = new Promise((res, rej) => {
                if (dom.reindexImgWrappers(previousIndex, currentIndex)) {
                    res();
                }
            });


            reindexPromise.then(() => {
                if (sequence === 'random') {
                    (Sequence.random.bind(this, imgSArr[previousIndex], imgSArr, effect, stateSingleton, $target.getAttribute('x-data-nr')))();
                } else if (sequence === 'ordered') {
                    (Sequence.ordered.bind(this, imgSArr[previousIndex], imgSArr, effect, stateSingleton, order, $target.getAttribute('x-data-nr')))();
                }
            }, () => {});


        }, false);



        /** for debugging **/
        //         let event = new MouseEvent('click');
        //         document.getElementById('fancy-gallery-switch-right').dispatchEvent(event);
        /** end for debugging **/
    }
    return {};
});
requirejs.config({
    baseUrl: 'js',
    paths: {
        ImagesSet: ['classes/ImagesSet'],
        Iteraror: ['classes/Iterator'],
        Sequence: ['classes/Sequence']
    }

});


requirejs.onError = (err) => {
    'use strict';
    console.warn(err);
    console.log(err.requireType);
    console.log('modules: ' + err.requireModules);
    throw err;
};

/* it does not work in firefox without loading ImageSet at this stage */
require(['run', 'libs/__ajax', 'classes/ImagesSet'], (run) => {


});
define("main", function(){});

