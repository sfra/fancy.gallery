'use strict';

define([], function () {

    function handleChange(imgSArr, callback) {
        var name = sessionStorage.getItem('fancy-gallery-order');
        var direction = parseInt(sessionStorage.getItem('fancy-gallery-reversed'), 10) === 1 ? 'reverse' : 'normal';
        var shuffled = parseInt(sessionStorage.getItem('fancy-gallery-shuffled'), 10) === 1;
        var speed = parseInt(sessionStorage.getItem('fancy-gallery-speed', 10));
        var plugin = sessionStorage.getItem('fancy-gallery-plugin');

        insertCss(JSON.parse(sessionStorage.getItem('fancy-gallery-configJSON')), plugin, callback);

        ;

        for (var i = 0, max = imgSArr.length; i < max; i++) {
            imgSArr[i].setSequence({
                name: name,
                direction: direction,
                shuffled: shuffled,
                speed: speed
            });
            //            imgSArr[i].setElementsX();
        }
    }

    function changeImgsParams(imgSArr, callback) {
        window.ee.addListener('orderChanged', function () {
            handleChange(imgSArr, callback);
        });
    }

    return changeImgsParams;
});