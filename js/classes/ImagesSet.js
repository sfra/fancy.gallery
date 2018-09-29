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

    const state = _state,    imagesSetIterator=new ImagesSetOrder.ImagesSetIterator(ImagesSet.tile.xdim,ImagesSet.tile.ydim), oorder=imagesSetIterator.getOrder();
    let id, hidden = false, effect = 'hide', rowsNr, columnsNr, speed = 15, elementsX = [], elementsY = [], elements=[],elementsRandom = [];

 
   
    
    if ((typeof _elementsX)!=='undefined') {
        for(let i=0, max=_elementsX.length;i<max;i++ ){
            elementsX.push(_elementsX[i]);
        }
   }
       
    if (typeof _elementsY!=='undefined') {
        for(let i=0, max=_elementsY.length;i<max;i++ ){
            elementsY.push(_elementsY[i]);
        }
    } else {
        let $imageWrapper = document.getElementById(_id);
        let rows=$imageWrapper.children;
        let cols; 
        for(let i=0, max=ImagesSet.tile.ydim; i<max;i++){
           cols=rows[i].children;
           elementsY.push([]);
           for(let j=0, max0=ImagesSet.tile.xdim; j<max0;j++){
               (elementsY[i])[j] = rows[i].children[j];
           }    
        }  
     }
   
   if (typeof _id!=='undefined') {
        id=_id;
   }
   
    this.getState = ()=>{
            return state;
    };
    
    this.setElements = ()=>{
        const $imageWrapper = document.getElementById(id),rows=$imageWrapper.children;
        rowsNr = (rows.length);
        columnsNr = (rows[0].children.length)+0;
        let currentRow=[];
         for(let i=0; i< rowsNr;i++){
                for(let j=0; j<columnsNr; j++){
                    currentRow.push(rows[i].children[j]);
                }
                elements.push(currentRow);
                currentRow=[];
        }
    };
    
    this.setSpeed = (_speed)=>{
          speed = _speed; 
    };
    
    this.copyElements = ()=>{
         for(let i=0, max=elementsX.length; i< max;i++){
            elementsRandom[i]=elementsX[i];   
        }
    };
    
    this.getElements = ()=>{
            return elements;      
    };
    
    
    this.setElementsX = ()=>{
        let $imageWrapper = document.getElementById(id);
        
        elementsX= (()=>{
            let elementsY = $imageWrapper.children;
            let elementsX = [];
            let maxY = $imageWrapper.children.length;
            let maxX= $imageWrapper.children[0].children.length;
         
            for(let i=0 ;i<maxY; i++ ){
                for(let j=0; j< maxX; j++){
                    elementsX.push($imageWrapper.children[i].children[j]);                
                } 
            }
        
        return elementsX;   
    
    })();
    };
   


     /**
     * animates tiles in the order of occurung and then runs the callback 
     * @method toggleHideShow 
     * @param {function} callback the function which runs after last animation
     */
     this.toggleHideShow =  (callback)=>{
    
             for(let i=0,max= elementsX.length;i<max;i++){

                ((j)=>{
                    let k=j;
                
                    setTimeout(()=>{
                        if(hidden){
                        elementsX[k].classList.remove(effect);

                        } else {
                            elementsX[k].classList.add(effect);
                        }
                        
                        if (j===max-1) {
                            hidden=hidden?false:true;
                            (callback.bind(this))();
                            
                        }   
                        
                           },k*5);                    
                       })(i);
            
           }
    };
    
     /**
     * animates tiles in the order order given by a functuon order and then runs the callback 
     * @method toggleHideShowRandom 
     * @param {function} callback the function which runs after last animation
     * @param {function} order the function that for a gived xdim, ydim and index number prameters return coordinates the next element
     */  
    this.toggleShowHideFun= (callback,order)=>{
 
        this.copyElements();

          for(let i=0,max= ImagesSet.tile.xdim * ImagesSet.tile.ydim;i<max;i++){

                ((j)=>{
                    let k=j;
                    
                    setTimeout(()=>{
                        let ccurentIndex = oorder[max-1-k];

                        if(hidden){
                              elementsY[ccurentIndex[1]][ccurentIndex[0]].classList.remove(effect);
                        } else {
                              elementsY[ccurentIndex[1]][ccurentIndex[0]].classList.add(effect);
                        }
                        
                        if (j===max-1) {
                            hidden=hidden?false:true;
                            (callback.bind(this))();    
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
    this.toggleHideShowRandom= (callback)=>{
        this.copyElements();

             
        for(let i=0,max= elementsX.length;i<max;i++){

                ((j)=>{
                    let k=j;
                
                    setTimeout(()=>{
                        let currentIndex = parseInt(Math.random()*elementsRandom.length);

                        if(hidden){
                            ((elementsRandom.splice(currentIndex,1))[0]).classList.remove(effect);
                        } else {
                            ((elementsRandom.splice(currentIndex,1))[0]).classList.add(effect);
                        }
                        
                        if (j===max-1) {
                            hidden=hidden?false:true;
                            (callback.bind(this))();    
                        }                           
                           },k*25);                    
                       })(i);

        }
    
    
    };
    
    this.getDomElement = ()=>{
        return document.getElementById(id);
    };
    
    this.setHidden = (isHidden)=>{
        hidden = isHidden;
    };


     this.setEffect = (_effect)=>{
          effect = _effect;
     };

     /**
     * removes the class _class from the elements contained in
     * element given by id
     * @method toggleHideShowRandom 
     * @param {string} the name of the class
     */  
     this.removeClass = (_class)=>{
          let $imageWrapper = document.getElementById(id);
          let maxY = $imageWrapper.children.length;
          let maxX= $imageWrapper.children[0].children.length;
          
          for(let i=0; i<maxY;i++){
               for(let j=0; j<maxX;j++){
                    $imageWrapper.children[i].children[j].classList.remove(_class);               
               }
          }
     
     };

}



    return {ImagesSet};
});


