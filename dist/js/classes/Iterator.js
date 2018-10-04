define([],()=>{
'use strict';
const Iteraror = function(_elements){

    let elements, index, length;
    
    this.setElements = function(_elements){
        
        if (typeof _elements=== 'undefined') {
            elements =[];

        } else {
            elements = _elements;
            index = 0;
        }
   
   };
   
   this.setElements(_elements);
   
   length = elements.length ;
   
    this.next = ()=>{
        if (!this.hasNext()) {
            return null;
        }
        index++;
        
        return elements[index];
    };
    
    this.hasNext = ()=>{
        return index<length;
    };
    
    this.rewind = ()=>{
        index =0;
        return elements[index];
    };
    
    this.current = ()=>{
        
        return elements[index];
    };
    
   
   
   
};    
    
 return Iteraror;   
});


