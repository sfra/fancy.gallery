define([], function () {
    // TODO: resize tile

    window.onload = function () {

       // changeTileBG();
    };

    window.onresize = function () {
      //  changeTileBG();
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
                debugger;
                //      console.dir($tiles[i].children[j]);
                
                for (var k = 0, max = $images.length; k < max; k++) {
                replacer = $images[k].children[i].children[j].getAttribute('style');
                replacer = replacer.replace(/background\-position:[^;]*;/, 'background-position: ' + (j * tile_width) + 'px ' + (-(i * tile_height)) + 'px;');
                    $images[k].children[i].children[j].setAttribute('style', replacer);

                };

            };
        };



    };




    return {};
});