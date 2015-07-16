define([],function(){
var Iteraror = function(_elements){
    //debugger;
    var elements;    
    var index;
    var length;
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
   
    this.next = function(){
        if (!this.hasNext()) {
            return null;
        }
        index++;
        
        return elements[index];
    }
    
    this.hasNext = function(){
        return index<length;
    }
    
    this.rewind = function(){
        index =0;
        return elements[index];
    }
    
    this.current = function(){
        
        return elements[index];
    }
    
   
   
   
};    
    
 return Iteraror;   
});


