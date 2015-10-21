define([],function(){
    
            
            
            function random (current, imgSArr, effect,  stateSingleton) {           
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
            };
            
            
            
            function ordered(current, imgSArr, effect,  stateSingleton,order,currentIndex) {
                current.toggleShowHideFun(
                function () {
                    var that = this;
                    //debugger;
                    setTimeout(function () {
                        var indexNext=0;
                        var i = currentIndex;
                        for (i, max = imgSArr.length; i < max; i++) {
                            imgSArr[i].getDomElement().style.zIndex = -(indexNext++) * 10;
                            imgSArr[i].setHidden(false);
                            imgSArr[i].removeClass(effect);
                        };
                        
                        for(i=0; i<currentIndex;i++){
                            imgSArr[i].getDomElement().style.zIndex = -(indexNext++) * 10;
                            imgSArr[i].setHidden(false);
                            imgSArr[i].removeClass(effect);
                        }
        
                        
                    
                    


        
                        stateSingleton.animation.isLasting = false;
        
                    }, 1000);
                },order);
            };
            
            
    

    
    return {random: random, ordered: ordered};
    
});