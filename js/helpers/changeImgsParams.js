define([], () => {


    function handleChange(imgSArr) {
        let name = sessionStorage.getItem('fancy-gallery-order');
        let direction = parseInt(sessionStorage.getItem('fancy-gallery-reversed'), 10) === 1 ? 'reverse' : 'normal';
        let shuffled = parseInt(sessionStorage.getItem('fancy-gallery-shuffled'), 10) === 1;
        let speed = parseInt(sessionStorage.getItem('fancy-gallery-speed', 10));

        console.log({
            name: name,
            direction,
            shuffled,
            speed
        });

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

    function changeImgsParams(imgSArr) {
        window.ee.addListener('orderChanged', () => {
            handleChange(imgSArr);
        });

    }

    return changeImgsParams;
});