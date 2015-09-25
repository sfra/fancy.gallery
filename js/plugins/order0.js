define([],function(){
    var order=function(x,y,index){
        return [parseInt(index/x),index%x];
    
    };    
    
     return order;
    
});