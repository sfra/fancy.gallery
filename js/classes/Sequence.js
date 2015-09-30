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
            
            
            
            function ordered(current, imgSArr, effect,  stateSingleton,order) {
                current.toggleShowHideFun(
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
                },order);
            };
            
            
    

    
    return {random: random, ordered: ordered};
    
});