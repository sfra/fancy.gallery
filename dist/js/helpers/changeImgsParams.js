define([  ], (  ) => {


    function handleChange(imgSArr, callback) {
        let name = sessionStorage.getItem('fancy-gallery-order');
        let direction = parseInt(sessionStorage.getItem('fancy-gallery-reversed'), 10) === 1 ? 'reverse' : 'normal';
        let shuffled = parseInt(sessionStorage.getItem('fancy-gallery-shuffled'), 10) === 1;
        let speed = parseInt(sessionStorage.getItem('fancy-gallery-speed', 10));
        let plugin = sessionStorage.getItem('fancy-gallery-plugin');




        insertCss(JSON.parse(sessionStorage.getItem('fancy-gallery-configJSON')), plugin, callback);

        ;

        for (let i = 0, max = imgSArr.length; i < max; i++) {
            imgSArr[i].setSequence({
                name: name,
                direction,
                shuffled,
                speed
            });
            //            imgSArr[i].setElementsX();
        }
    }

    function changeImgsParams(imgSArr, callback) {
        window.ee.addListener('orderChanged', () => {
            handleChange(imgSArr, callback);
        });

    }

    return changeImgsParams;
});