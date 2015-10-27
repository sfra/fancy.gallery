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
        
        
        
        /* resize image according to the windows height */
        dom.adjustTiles(data);
        
        window.onresize = function () {
            dom.adjustTiles(data);

        };

        
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
        document.getElementById('cyc').addEventListener('click', function (e) {

            if (stateSingleton.animation.isLasting) { // do not execute function if during animation 
                return;
            };

            stateSingleton.animation.isLasting = true;
            
            var previous = imgSArr[currentIndex];
            var previousIndex;

            if (currentIndex + 1 < imgSArr.length) {
                previousIndex = currentIndex;
                currentIndex += 1;
            } else {
                currentIndex = 0;
            };

            var previousDom = previous.getDomElement();

            if (data.sequence === 'random') {
                (Sequence['random'].bind(this, previous, imgSArr, effect, stateSingleton, currentIndex))();
            } else if (data.sequence === 'ordered') {
                (Sequence['ordered'].bind(this, previous, imgSArr, effect, stateSingleton, order, currentIndex))();
            }

        });



        document.getElementById('cyc2').addEventListener('click', function (e) {

            if (stateSingleton.animation.isLasting) {
                return;
            };

            stateSingleton.animation.isLasting = true;

            var previous = imgSArr[currentIndex];
            var previousIndex;

            if (currentIndex > 0) {
                previousIndex = currentIndex;
                currentIndex -= 1;
            } else {
                currentIndex = imgSArr.length - 1;
            };

            var previousDom = previous.getDomElement();
            
            var reindexPromise = new Promise(function (res, rej) {
                if (dom.reindexImgWrappers(currentIndex)) {
                    res();
                };

            });
            
            reindexPromise.then(function () {
                if (data.sequence === 'random') {
                    (Sequence['random'].bind(this, previous, imgSArr, effect, stateSingleton, currentIndex))();
                } else if (data.sequence === 'ordered') {
                    (Sequence['ordered'].bind(this, previous, imgSArr, effect, stateSingleton, order, currentIndex))();
                }
            }, function () {});



        });





        /** for debugging **/
        //         var event = new MouseEvent('click');
        //         document.getElementById('cyc').dispatchEvent(event);
        /** end for debugging **/
    };
    return {};
});


