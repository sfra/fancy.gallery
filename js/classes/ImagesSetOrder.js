define([],function(){
    var ImagesSetIterator = function(_x,_y){
       // debugger;
        var x=_x;
        var y=_y;
        var order=[];
        var visited = [];
        
        //for(var i=0;i<y;i++){
        //    visited.push([]);
        //    for(var j=0;j<x;j++){
        //        visited[i][j]=false;
        //    }
        //    
        //}
        //
        //console.log(visited);
        
        
        /* direction expressed by right,bottom */
        var direction=[1,0];

        
        var current = 0;
        var xi=0;
        var yi=0;
        while(current<x*y){
            debugger;
            if (visited[xi]===undefined) {
                (visited[xi]=[]);
            };

            current+=1;
            switch (direction.join()) {
                case '1,0':
                    if (xi>=x || visited[xi][yi]!==undefined) {
                        xi-=1;
                        yi+=1;
                        direction=[0,1];
                    } else {
                        order.push([xi,yi]);
                        visited[xi][yi]=true;
                        xi+=1;
                    }; break;
                case '0,1':
                    if (yi>=y || visited[xi][yi]) {
                        yi-=1;
                        xi-=1;
//                        yi-=1;
                        direction=[-1,0];
                    } else {
                        order.push([xi,yi]);
                        visited[xi][yi]=true;
                        yi+=1;
                    }; break;
                case '-1,0':
                    if (xi<0 || visited[xi][yi]) {
                        xi+=1;
                        yi-=1;
                        direction=[0,-1];
                    } else {
                        order.push([xi][yi]);
                        visited[xi][yi]=true;
                        xi-=1;
                    }; break;
                case '0,-1':
                    if (yi<0 || visited[xi][yi]) {
                        yi+=1;
                        xi+=1;
                        direction=[1,0];
                        
                    } else {
                        order.push([xi,yi]);
                        visited[xi][yi]=true;
                        yi-=1;
                    }; break;
               
            }
              
        }
        
    
    
    
    
    
    
       
    };    
     return { ImagesSetIterator: ImagesSetIterator};
});