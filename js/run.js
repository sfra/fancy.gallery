define(['stateSingleton', 'ImagesSet', 'libs/__ajax', 'plugins/order0', 'classes/Sequence', 'helpers/dom', 'helpers/changeImgsParams'], (stateSingleton, ImagesSet, __ajax, order, Sequence, dom, changeImgsParams) => {
    'use strict';
    let currentIndex = 0; // the number of the current image
    let reindexPromise = null,
        sequence = null,
        imgSArr = [],
        images = [];

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
        let elementsX = [],
            effect = data.effect;

        sequence = data.sequence;




        for (let i = 0; i < numberOfImgs; i++) {

            if (typeof data.images) {
                images[i] = data.images[i];
            }


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

        changeImgsParams(imgSArr);

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
            if (images.length > 0) {
                document.getElementById('css-plugin').setAttribute('href', `css/main.css.php?plugin=${images[currentIndex].plugin}`);
            }
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
            if (images.length > 0) {
                document.getElementById('css-plugin').setAttribute('href', `css/main.css.php?plugin=${images[currentIndex].plugin}`);
            }

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

            if (images.length > 0) {
                document.getElementById('css-plugin').setAttribute('href', `css/main.css.php?plugin=${images[currentIndex].plugin}`);
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