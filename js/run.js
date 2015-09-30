define(['stateSingleton', 'ImagesSet', 'libs/__ajax','plugins/order0','Sequence'], function (stateSingleton, ImagesSet, __ajax,order,Sequence) {
    
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

      
         if (data.sequence==='random') {
            (Sequence['random'].bind(this,current,imgSArr,effect, stateSingleton))();
         } else if (data.sequence==='ordered') {
            (Sequence['ordered'].bind(this,current,imgSArr,effect, stateSingleton,order))();
         }
         
        
    });
        
         /** for debugging **/
         var event = new MouseEvent('click');
         document.getElementById('cyc').dispatchEvent(event);
         /** end for debugging **/
    };
    return {};
});


function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}