define([], function () {
    // TODO: resize tile
    'use strict';
  
    var $gal_wrapper = document.getElementById('gal-wrapper');
  

   

    function matchHeight(data){
        var currentWidth = $gal_wrapper.offsetWidth;
        var orginalWidth = data.tile.w * data.tile.xdim;
        var orginalHeight = data.tile.h * data.tile.ydim;
        
        var factor = currentWidth/orginalWidth;
        
        
        var currentHeight = (orginalHeight/orginalWidth) * currentWidth;
        //console.log((orginalHeight/orginalWidth));
        //console.log($gal_wrapper.children[0].children[0]);
        
        $gal_wrapper.style.height = currentHeight+'px';
        
        console.log(factor);

        for(var k=0, maxNr=data.numberOfImgs;k<maxNr;k++){
            for(var i=0, maxY=data.tile.ydim;i<maxY; i++ ){
                for(var j=0, maxX=data.tile.xdim; j<maxX; j++){
//                    debugger;
                    $gal_wrapper.children[k].children[i].children[j].style.backgroundPosition =
                    '-'+(factor*data.tile.w*j)+'px -'+(factor*data.tile.h*i)+'px ';
//                    $gal_wrapper.children[k].children[i].children[j].style.backgroundPosition='-'+(data.tile.w*j)+'px';
                  //  console.dir( $gal_wrapper.children[k].children[i].children[j].style.backgroundPosition);
                }
            
            }
        };
        
        
                


//        var $gal_wrapper_children = $gal_wrapper.children;
//        
//
//
//        var fullHeight = (data.tile.h*data.tile.ydim)/(data.tile.w*data.tile.xdim) * $gal_wrapper.offsetWidth;
//        $gal_wrapper.style.height = fullHeight+'px';
//        
//        var height = (((data.tile.w*data.tile.ydim)/(data.tile.h*data.tile.ydim)) * $gal_wrapper.offsetWidth); 
//        for(var i=0;i<$gal_wrapper_children.length;i++){
//            $gal_wrapper_children[i].style.height = fullHeight+'px';
//            for(var j=0; i<$gal_wrapper_children[i].children[j].lenght ;j++){
//                    console.log($gal_wrapper_children[i].children[j]);                
//                  $gal_wrapper_children[i].children[j].style.width=$gal_wrapper.offsetWidth/data.tile.xdim+'px';
//            };
//        };
       // debugger;
        //$gal_wrapper.style.height = data.tile.ydim*height+'px'; 
        
    };
    
    
    
    function changeTileBG() {
        var tile_height = document.querySelectorAll('.img-wrapper')[0].children[0].children[9].offsetHeight;
        var tile_width = document.querySelectorAll('.img-wrapper')[0].children[0].children[9].offsetWidth;
        var $tiles = document.querySelectorAll('.img-wrapper > div');

        var $images = document.querySelectorAll('.img-wrapper');

        //        console.dir($tiles[0].children[0].getAttribute('style'));
        var replacer = null;
        var tiles_vert = $tiles.length;
        var tiles_hor = $tiles[0].children.length;

        var current_image = null;



        for (var i = 0; i < tiles_vert; i++) {
            for (var j = 0; j < tiles_hor; j++) {
               // debugger;
                //      console.dir($tiles[i].children[j]);
                
                for (var k = 0, max = $images.length; k < max; k++) {
                replacer = $images[k].children[i].children[j].getAttribute('style');
                replacer = replacer.replace(/background\-position:[^;]*;/, 'background-position: ' + (j * tile_width) + 'px ' + (-(i * tile_height)) + 'px;');
                    $images[k].children[i].children[j].setAttribute('style', replacer);

                };

            };
        };



    };




    return {matchHeight: matchHeight};
});