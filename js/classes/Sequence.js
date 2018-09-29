define([], () => {

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