define([], function () {
    // TODO: resize tile
    'use strict';

    var $gal_wrapper = document.getElementById('gal-wrapper');


    /**
     * adjust the tiles to the width 
     * @method adjustTiles 
     * @param {object} config object
     */
    function adjustTiles(data) {
        var currentWidth = $gal_wrapper.offsetWidth;
        var orginalWidth = data.tile.w * data.tile.xdim;
        var orginalHeight = data.tile.h * data.tile.ydim;
        var factor = currentWidth / orginalWidth;
        var currentHeight = (orginalHeight / orginalWidth) * currentWidth;
        $gal_wrapper.style.height = currentHeight + 'px';


        for (var k = 0, maxNr = data.numberOfImgs; k < maxNr; k++) {
            for (var i = 0, maxY = data.tile.ydim; i < maxY; i++) {
                for (var j = 0, maxX = data.tile.xdim; j < maxX; j++) {
                    $gal_wrapper.children[k].children[i].children[j].style.backgroundPosition =
                        '-' + (factor * data.tile.w * j) + 'px -' + (factor * data.tile.h * i) + 'px ';
                };
            };
        };

    };

    /**
     * changes the the order of the images  
     * @method reindexImgWrappers 
     * @param {number} index of the current image
     */
    function reindexImgWrappers(current) {

        for (var i = 0, max_ = $gal_wrapper.children.length; i < max_; i++) {
            console.log($gal_wrapper.children[i]);

        }


        var index = 0;
        $gal_wrapper.children[current].style.zIndex = -5;
        for (var i = current + 1, maxUpper = $gal_wrapper.children.length; i < maxUpper; i++) {
            $gal_wrapper.children[i].style.zIndex = -(index++ * 10);
        }

        for (var i = 0; i < current; i++) {
            $gal_wrapper.children[i].style.zIndex = -(index++ * 10);
        }

        for (var i = 0; i < $gal_wrapper.children.length; i++) {
            console.log($gal_wrapper.children[i].style.zIndex);
        };



        return true;
    };

    
    /**
    * 
    * @method changeTileBG 
    */
    function changeTileBG() {
        var tile_height = document.querySelectorAll('.img-wrapper')[0].children[0].children[9].offsetHeight;
        var tile_width = document.querySelectorAll('.img-wrapper')[0].children[0].children[9].offsetWidth;
        var $tiles = document.querySelectorAll('.img-wrapper > div');
        var $images = document.querySelectorAll('.img-wrapper');
        var tiles_vert = $tiles.length;
        var tiles_hor = $tiles[0].children.length;
        var current_image = null;



        for (var i = 0; i < tiles_vert; i++) {
            for (var j = 0; j < tiles_hor; j++) {
                for (var k = 0, max = $images.length; k < max; k++) {
                    replacer = $images[k].children[i].children[j].getAttribute('style');
                    replacer = replacer.replace(/background\-position:[^;]*;/,
                                                'background-position: ' + (j * tile_width) + 'px ' + (-(i * tile_height)) + 'px;');
                    $images[k].children[i].children[j].setAttribute('style', replacer);

                };

            };
        };



    };

    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    };


    return {
        adjustTiles: adjustTiles,
        reindexImgWrappers: reindexImgWrappers,
        insertAfter: insertAfter
    };
});