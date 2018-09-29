define(['stateSingleton', 'ImagesSet', 'libs/__ajax', 'plugins/order0', 'Sequence', 'helpers/dom'], function (stateSingleton, ImagesSet, __ajax, order, Sequence, dom) {

    var currentIndex = 0; // the number of the current image



    var mainPromise = new Promise(function (res, rej) { //promise loading config file
        var __aj = Object(__ajax('config.json', {
            method: 'GET'
        }));
        __aj.get().then(function (data) {
                res(JSON.parse(data));
            },
            function (err) {
                console.log(err);

            });
    });


    mainPromise.then(mainResolve);

    function mainResolve(data) {

        var numberOfImgs = data.numberOfImgs;
        var effect = data.effect;
        var elementsX;
        var imgSArr = [];
        var elementsX = [];


        var $slidesNav = document.getElementById('slides-nav');


        for (var i = 0; i < numberOfImgs; i++) {
            $slidesNav.appendChild(((j)=> {
                var out = document.createElement('div');
                out.classList.add('slide-button');
                var inside = document.createElement('p');
                inside.setAttribute('x-data-nr',i);
                var img = new Image(data.tile.xdim * data.tile.w / 7, data.tile.ydim * data.tile.h / 7);
                img.src = 'images/img' + j + '.jpg';
                inside.appendChild(img);
                inside.classList.add('clearfix');
                out.appendChild(inside);
                
                return out;
            })(i));

        };



        /* resize image according to the windows height */
        dom.adjustTiles(data);

        window.onresize = function () {
            dom.adjustTiles(data);

        };

        dom.setButton(0);
        /* set import properties from config to ImagesSet */
        ImagesSet.ImagesSet.tile = data.tile;

        for (var i = 0; i < numberOfImgs; i++) {
            imgSArr.push(new ImagesSet.ImagesSet(false, 'image-wrapper' + i));
            imgSArr[i].setSpeed(data.speed);
        };

        imgSArr[0].setElements();

        var $imagesWrapper = imgSArr[0].getDomElement().parentNode;

        for (var i = 0, max = imgSArr.length; i < max; i++) {
            imgSArr[i].setElementsX();
            imgSArr[i].setEffect(effect);
        };



        /* events listeners */
        document.getElementById('switch-right').addEventListener('click', (e)=> {

            if (stateSingleton.animation.isLasting) { // do not execute the function if during animation 
                return;
            };

            stateSingleton.animation.isLasting = true;

            var current = imgSArr[currentIndex];
            var previousIndex=currentIndex;

            currentIndex=(currentIndex+1)%numberOfImgs;


            dom.setButton(currentIndex);
            reindexPromise = new Promise((res,rej)=>{
                if(dom.reindexImgWrappers(previousIndex,currentIndex)){
                    res();
                };

            });
                

            

            reindexPromise.then(()=>{
                

                if (data.sequence === 'random') {
                    (Sequence['random'].bind(this, current, imgSArr, effect, stateSingleton, currentIndex))();
                } else if (data.sequence === 'ordered') {
                    (Sequence['ordered'].bind(this, current, imgSArr, effect, stateSingleton, order, currentIndex))();
                }
            });


        });


//        console.log(imgSArr[0].getDomElement().classList);
        document.getElementById('switch-left').addEventListener('click', (e)=> {

            if (stateSingleton.animation.isLasting) {
                return;
            };

            stateSingleton.animation.isLasting = true;

            var previous = imgSArr[currentIndex];
            var previousIndex=currentIndex;


            
            if (currentIndex > 0) {
                currentIndex -= 1;
            } else {
                currentIndex = imgSArr.length - 1;
            };

  

            reindexPromise = new Promise((res, rej)=> {
                
                if (dom.reindexImgWrappers(previousIndex,currentIndex)) {
                    res();
                };

            });
            dom.setButton(currentIndex);

            reindexPromise.then(() =>{
                if (data.sequence === 'random') {
                    (Sequence['random'].bind(this, previous, imgSArr, effect, stateSingleton, currentIndex))();
                } else if (data.sequence === 'ordered') {
                    (Sequence['ordered'].bind(this, previous, imgSArr, effect, stateSingleton, order, currentIndex))();
                }
            }, function () {}); 



        });



        $slidesNav.addEventListener('click',(e)=>{
            const $target = e.target;

            if($target.tagName!=='P') {
                return;
            }

            if(stateSingleton.animation.isLasting) {
                return;
            }


            stateSingleton.animation.isLasting = true;
            console.log('========');
            let previousIndex = currentIndex;
            currentIndex= parseInt($target.getAttribute('x-data-nr'),10);
            dom.setButton(currentIndex);
            reindexPromise = new Promise((res, rej)=> {
                if (dom.reindexImgWrappers(previousIndex,currentIndex)) {
                    res();
                };
            });


            reindexPromise.then(()=> {
                if (data.sequence === 'random') {
                    (Sequence['random'].bind(this, imgSArr[previousIndex], imgSArr, effect, stateSingleton, $target.getAttribute('x-data-nr')))();
                } else if (data.sequence === 'ordered') {
                    (Sequence['ordered'].bind(this, imgSArr[previousIndex], imgSArr, effect, stateSingleton, order, $target.getAttribute('x-data-nr')))();
                }
            }, ()=>{});


        },false);

        /** for debugging **/
        //         var event = new MouseEvent('click');
        //         document.getElementById('switch-right').dispatchEvent(event);
        /** end for debugging **/
    };
    return {};
});