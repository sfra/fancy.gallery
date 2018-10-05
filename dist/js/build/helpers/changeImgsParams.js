'use strict';

define([], function () {

    function handleChange(imgSArr) {
        var name = sessionStorage.getItem('fancy-gallery-order');
        var direction = parseInt(sessionStorage.getItem('fancy-gallery-reversed'), 10) === 1 ? 'reverse' : 'normal';
        var shuffled = parseInt(sessionStorage.getItem('fancy-gallery-shuffled'), 10) === 1;

        for (var i = 0, max = imgSArr.length; i < max; i++) {
            imgSArr[i].setSequence({
                name: name,
                direction: direction,
                shuffled: shuffled
            });
            imgSArr[i].setElementsX();
        }
    }

    function changeImgsParams(imgSArr) {
        window.ee.addListener('orderChanged', function () {
            handleChange(imgSArr);
        });

        window.ee.addListener('shufflingChanged', function () {
            handleChange(imgSArr);
        });
    }

    return changeImgsParams;
});