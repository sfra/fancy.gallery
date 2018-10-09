'use strict';

define([], function () {

    'use strict';

    function random(current, imgSArr, effect, stateSingleton, currentIndex) {
        current.toggleHideShowRandom(function () {
            setTimeout(function () {
                rearangeAfterMove(imgSArr, effect, stateSingleton, currentIndex);
            }, 1000);
        });
    }

    function ordered(previous, imgSArr, effect, stateSingleton, order, currentIndex) {
        previous.toggleShowHideFun(function () {
            setTimeout(function () {
                rearangeAfterMove(imgSArr, effect, stateSingleton, currentIndex);
            }, 1000);
        }, order);
    }

    function rearangeAfterMove(imgSArr, effect, stateSingleton, currentIndex) {
        var indexNext = 0;
        var i = currentIndex;
        for (var max = imgSArr.length; i < max; i++) {
            imgSArr[i].getDomElement().style.zIndex = -indexNext++ * 10;
            imgSArr[i].setHidden(false);
            imgSArr[i].removeClass(effect);
        }

        for (i = 0; i < currentIndex; i++) {
            imgSArr[i].getDomElement().style.zIndex = -indexNext++ * 10;
            imgSArr[i].setHidden(false);
            imgSArr[i].removeClass(effect);
        }

        stateSingleton.animation.isLasting = false;
    }

    return {
        random: random,
        ordered: ordered
    };
});