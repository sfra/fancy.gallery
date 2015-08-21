define([],function(){
'use strict';
function ImagesSet(_state, _id, _elementsX, _elementsY){

    var state = _state;
    var elementsX = [];
    var elementsY = [];
    var elements=[];
    var elementsRandom = [];
    var id;   
    var hidden = false;
    var effect = 'hide';
   
   if ((typeof _elementsX)!=='undefined') {
        for(var i=0, max=_elementsX.length;i<max;i++ ){
            elementsX.push(_elementsX[i]);
        };
   };
       
    if (typeof _elementsY!=='undefined') {
        for(var i=0, max=_elementsY.length;i<max;i++ ){
            elementsY.push(_elementsY[i]);
        };
    };
   
   if (typeof _id!=='undefined') {
        id=_id;
   };
   
    this.getState = function(){
            return state;
    };
    
    this.setElements = function(){
        var $imageWrapper = document.getElementById(id);
        var rows=$imageWrapper.children;
        var rowsNr = rows.length;
        var columnsNr = rows[0].children.length;
        var currentRow=[];
         for(var i=0; i< rowsNr;i++){
                for(var j=0; j<columnsNr; j++){
                    currentRow.push(rows[i].children[j]);
                };
                elements.push(currentRow);
                currentRow=[];
        };
    };
    
    
    this.copyElements = function(){
         for(var i=0, max=elementsX.length; i< max;i++){
            elementsRandom[i]=elementsX[i];   
        };
    };
    
    this.getElements = function(){
            return elements;      
    };
    
    
    this.setElementsX = function(){
        var $imageWrapper = document.getElementById(id);
        
        elementsX= (function(){
            var elementsY = $imageWrapper.children;
            var elementsX = [];
            var maxY = $imageWrapper.children.length;
            var maxX= $imageWrapper.children[0].children.length;
         
            for(var i=0 ;i<maxY; i++ ){
                for(var j=0; j< maxX; j++){
                    elementsX.push($imageWrapper.children[i].children[j]);                
                }; 
            };
        
        return elementsX;   
    
    })();
    }
   var that=this;
   


     /**
     * animates tiles in the order of occurung and then runs the callback 
     * @method toggleHideShow 
     * @param {function} callback the function which runs after last animation
     */
     this.toggleHideShow = function(callback){
    
             for(var i=0,max= elementsX.length;i<max;i++){

                (function(j){
                    var k=j;
                
                    setTimeout(function(){
                        if(hidden){
                        elementsX[k].classList.remove(effect);

                        } else {
                            elementsX[k].classList.add(effect);
                            console.log(effect);
                        }
                        
                        if (j===max-1) {
                            hidden=hidden?false:true;
                            (callback.bind(that))();
                            
                        }   
                        
                           },k*5);                    
                       })(i);
            
           };
    };
    
    
    
     /**
     * animates tiles in the random order and then runs the callback 
     * @method toggleHideShowRandom 
     * @param {function} callback the function which runs after last animation
     */  
    this.toggleHideShowRandom= function(callback){
        this.copyElements();

             
        for(var i=0,max= elementsX.length;i<max;i++){

                (function(j){
                    var k=j;
                
                    setTimeout(function(){
                        var currentIndex = parseInt(Math.random()*elementsRandom.length);

                        if(hidden){
                            ((elementsRandom.splice(currentIndex,1))[0]).classList.remove(effect);
                        } else {
                            ((elementsRandom.splice(currentIndex,1))[0]).classList.add(effect);
                        }
                        
                        if (j===max-1) {
                            hidden=hidden?false:true;
                            (callback.bind(that))();    
                        }                           
                           },k*25);                    
                       })(i);
            
             //   }
                
                       //    hidden=hidden?false:true;
                     //       (callback.bind(that))();

        }
    
    
    };
    
    this.getDomElement = function(){
        return document.getElementById(id);
    };
    
    this.setHidden = function(isHidden){
        hidden = isHidden;
    };


     this.setEffect = function(_effect){
          effect = _effect;
     };


     this.removeClass = function(_class){
          var $imageWrapper = document.getElementById(id);
          var maxY = $imageWrapper.children.length;
          var maxX= $imageWrapper.children[0].children.length;
          
          for(var i=0,maxY; i<maxY;i++){
               for(var j=0; j<maxX;j++){
                    $imageWrapper.children[i].children[j].classList.remove(_class);               
               };          
          };
     
     }



     


};



    return {ImagesSet:ImagesSet};
});


