define(['stateSingleton', 'ImagesSet', 'libs/__ajax','plugins/order0'], function (stateSingleton, ImagesSet, __ajax,order) {
    
   var mainPromise = new Promise(function(res,rej){
        var __aj = Object(__ajax('config.json',{method: 'GET'}));
        __aj.get().then(function(data){
             res(JSON.parse(data));
        },
        function(err){
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
         
        ImagesSet.ImagesSet.tile=data.tile;
      

        for (var i = 0; i < numberOfImgs; i++) {
            imgSArr.push(new ImagesSet.ImagesSet(false, 'image-wrapper' + i));
            imgSArr[i].setSpeed(data.speed);
        };


        imgSArr[0].setElements();
  

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
        
        //current.toggleShowHideFun(
        //    function () {
        //        var that = this;
        //        setTimeout(function () {
        //
        //            for (var i = 0, max = imgSArr.length; i < max; i++) {
        //                imgSArr[i].getDomElement().style.zIndex = -i * 10;
        //                imgSArr[i].setHidden(false);
        //            };
        //
        //            that.removeClass(effect);
        //
        //            stateSingleton.animation.isLasting = false;
        //
        //        }, 1000);
        //    },order);

    });
        
         /** for debugging **/
         var event = new MouseEvent('click');
       //  document.getElementById('cyc').dispatchEvent(event);
         /** end for debugging **/
    };
    return {};
});


function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}