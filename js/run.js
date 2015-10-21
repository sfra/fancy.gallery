define(['stateSingleton', 'ImagesSet', 'libs/__ajax','plugins/order0','Sequence','helpers/dom'], function (stateSingleton, ImagesSet, __ajax,order,Sequence,dom) {
    
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

 
    var currentIndex = 0;
    
    function mainResolve(data) {

   
        dom.matchHeight(data);    
        window.onresize = function(){
         dom.matchHeight(data);

      };
    
    
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
        var current = imgSArr[currentIndex];
        var previousIndex;

        if(currentIndex+1<imgSArr.length){
            previousIndex = currentIndex;
            currentIndex+=1;
            
        } else {
            currentIndex=0;
        }
    
            
        var currentDom = current.getDomElement();

      
         if (data.sequence==='random') {
            (Sequence['random'].bind(this,current,imgSArr,effect, stateSingleton,currentIndex))();
         } else if (data.sequence==='ordered') {
            (Sequence['ordered'].bind(this,current,imgSArr,effect, stateSingleton,order,currentIndex))();
         }
  
    });
        
        
        
        
        
        
        
        
        document.getElementById('cyc2').addEventListener('click', function (e) {
        
            if (stateSingleton.animation.isLasting) {
                return;
            }
            
        stateSingleton.animation.isLasting = true;
        var current = imgSArr[currentIndex];
        var previousIndex;

        if(currentIndex > 0 ){
            previousIndex = currentIndex;
            currentIndex-=1;
            
            
        } else {
            currentIndex=imgSArr.length-1;
        }
    

            
        var currentDom = current.getDomElement();

      
         if (data.sequence==='random') {
            (Sequence['random'].bind(this,current,imgSArr,effect, stateSingleton,currentIndex))();
         } else if (data.sequence==='ordered') {
            (Sequence['ordered'].bind(this,current,imgSArr,effect, stateSingleton,order,currentIndex))();
         }
  
    });

        
        
        
        
         /** for debugging **/
//         var event = new MouseEvent('click');
//         document.getElementById('cyc').dispatchEvent(event);
         /** end for debugging **/
    };
    return {};
});


function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}