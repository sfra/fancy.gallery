define(['stateSingleton', 'ImagesSet', 'libs/__ajax', 'libs/Promise'], function (stateSingleton, ImagesSet, __ajax, Prom) {
    var numberOfImgs = 4;
    var elementsX;
    var imgSArr = [];
    var effect = 'scale';
    //var __aj = Object(__ajax('config.json',{method: 'GET'}));
    //    __aj.get().then(function(data){
    //        var numberOfImgs = JSON.parse(data).numberOfImgs;                
    //        console.log(numberOfImgs);
    //    },
    //    function(err){
    //    console.log(err);
    //
    //});







    var elementsX = [];


    for (var i = 0; i < numberOfImgs; i++) {
        imgSArr.push(new ImagesSet.ImagesSet(false, 'image-wrapper' + i));
    };


    imgSArr[0].setElements();
    console.log(imgSArr[0].getElements());

    var $imagesWrapper = imgSArr[0].getDomElement().parentNode;

    for (var i = 0, max = imgSArr.length; i < max; i++) {
        imgSArr[i].setElementsX();
        imgSArr[i].setEffect(effect);
    }


    document.getElementById('cyc').addEventListener('click', function (e) {
        if (stateSingleton.animation.isLasting) {
            return;
        }

        stateSingleton.animation.isLasting = true;
        var current = imgSArr.shift();
        imgSArr.push(current);

        var currentDom = current.getDomElement();
        console.log(currentDom);
        //current.toggleHideShow(function(){
        //    var that = this;
        //    setTimeout(function(){
        //
        //        for(var i=0, max = imgSArr.length; i< max; i++){
        //            imgSArr[i].getDomElement().style.zIndex=-i*10;
        //            imgSArr[i].setHidden(false);
        //        };
        //
        //        for(var i=0, max=that.getDomElement().children.length; i<max;i++){
        //            for(var j=0, max=that.getDomElement().children[i].children.length;j<max;j++){
        //                that.getDomElement().children[i].children[j].classList.remove('hide');  
        //            };
        //            
        //
        //        };
        //        
        //        stateSingleton.animation.isLasting = false;
        //        
        //        },1000);
        //});


        current.toggleHideShowRandom(
            function () {
                var that = this;
                setTimeout(function () {

                    for (var i = 0, max = imgSArr.length; i < max; i++) {
                        imgSArr[i].getDomElement().style.zIndex = -i * 10;
                        imgSArr[i].setHidden(false);
                    };

                    that.removeClass(effect);

                    stateSingleton.animation.isLasting = false;

                }, 1000);
            });

    });


    return {};
});


function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}