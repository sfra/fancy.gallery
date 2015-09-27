define([],function(){
    var order=function(x,y,index){
        var direction;
        if (!index%2) {
            direction={x:1,x:y};
        };
        
        
        return [parseInt(index/x),index%x];
    
    };    
    
     return order;
    
});