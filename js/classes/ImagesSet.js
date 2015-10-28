define(['classes/ImagesSetOrder'],function(ImagesSetOrder){
'use strict';
/**
 * Constructs a ImageSet object.
 * 
 * Provides the wrapper for image consistiong of the many tiles.
 * 
 * @constructor
 *
 * @param {object} 
 * @param {string} tableSettings
 * @param {Array}
 * @param {Array}
 */
function ImagesSet(_state, _id, _elementsX, _elementsY){

    var state = _state;
    var elementsX = [];
    var elementsY = [];
    var elements=[];
    var elementsRandom = [];
    var id;   
    var hidden = false;
    var effect = 'hide';
    var rowsNr;
    var columnsNr;
    var speed = 15;
    var imagesSetIterator=new ImagesSetOrder.ImagesSetIterator(ImagesSet.tile.xdim,ImagesSet.tile.ydim);
    var oorder=imagesSetIterator.getOrder();
   
    
    if ((typeof _elementsX)!=='undefined') {
        for(var i=0, max=_elementsX.length;i<max;i++ ){
            elementsX.push(_elementsX[i]);
        };
   };
       
    if (typeof _elementsY!=='undefined') {
        for(var i=0, max=_elementsY.length;i<max;i++ ){
            elementsY.push(_elementsY[i]);
        };
    } else {
        var $imageWrapper = document.getElementById(_id);
        var rows=$imageWrapper.children;
        var cols; 
        for(var i=0, max=ImagesSet.tile.ydim; i<max;i++){
           cols=rows[i].children;
           elementsY.push([]);
           for(var j=0, max0=ImagesSet.tile.xdim; j<max0;j++){
               (elementsY[i])[j] = rows[i].children[j];
           };    
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
        rowsNr = (rows.length)+0;
        columnsNr = (rows[0].children.length)+0;
        var currentRow=[];
         for(var i=0; i< rowsNr;i++){
                for(var j=0; j<columnsNr; j++){
                    currentRow.push(rows[i].children[j]);
                };
                elements.push(currentRow);
                currentRow=[];
        };
    };
    
    this.setSpeed = function(_speed){
          speed = _speed; 
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
     * animates tiles in the order order given by a functuon order and then runs the callback 
     * @method toggleHideShowRandom 
     * @param {function} callback the function which runs after last animation
     * @param {function} order the function that for a gived xdim, ydim and index number prameters return coordinates the next element
     */  
    this.toggleShowHideFun=function(callback,order){
          console.log(elementsY);
          this.copyElements();
//        debugger;
          for(var i=0,max= ImagesSet.tile.xdim * ImagesSet.tile.ydim;i<max;i++){

                (function(j){
                    var k=j;
                    
                    setTimeout(function(){
                        var ccurentIndex = oorder[max-1-k];

                        if(hidden){
                              elementsY[ccurentIndex[1]][ccurentIndex[0]].classList.remove(effect);
                        } else {
                              elementsY[ccurentIndex[1]][ccurentIndex[0]].classList.add(effect);
                        }
                        
                        if (j===max-1) {
                            hidden=hidden?false:true;
                            (callback.bind(that))();    
                        }                           
                           },k*speed);                    
                       })(i);
            
        }
    
     
     
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

     /**
     * removes the class _class from the elements contained in
     * element given by id
     * @method toggleHideShowRandom 
     * @param {string} the name of the class
     */  
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


