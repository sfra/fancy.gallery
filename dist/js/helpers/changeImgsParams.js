define([], () => {

    function changeImgsParams(imgSArr) {
        window.ee.addListener('orderChanged', () => {
            let name = sessionStorage.getItem('fancy-gallery-order');
            let direction = parseInt(sessionStorage.getItem('fancy-gallery-reversed'), 10) === 1 ? 'reverse' : 'normal';

            for (let i = 0, max = imgSArr.length; i < max; i++) {
                imgSArr[i].setSequence({
                    name: name,
                    direction
                });
                imgSArr[i].setElementsX();
            }
            //            stateSingleton.order.direction = direction;
        });
    }

    return changeImgsParams;
});