'use strict';

define([], function () {
    // TODO: resize tile
    'use strict';

    var $galWrapper = document.getElementById('fancy-gallery-gal-wrapper');

    /**
     * adjust the tiles to the width 
     * @method adjustTiles 
     * @param {object} config object
     */
    function adjustTiles(data) {
        var currentWidth = $galWrapper.offsetWidth,
            orginalWidth = data.tile.w * data.tile.xdim,
            orginalHeight = data.tile.h * data.tile.ydim,
            factor = currentWidth / orginalWidth,
            currentHeight = orginalHeight / orginalWidth * currentWidth;

        $galWrapper.style.height = currentHeight + 'px';

        for (var k = 0, maxNr = data.numberOfImgs; k < maxNr; k++) {
            for (var i = 0, maxY = data.tile.ydim; i < maxY; i++) {
                for (var j = 0, maxX = data.tile.xdim; j < maxX; j++) {
                    $galWrapper.children[k].children[i].children[j].style.backgroundPosition = '-' + factor * data.tile.w * j + 'px -' + factor * data.tile.h * i + 'px ';
                }
            }
        }
    }

    /**
     * changes the the order of the images  
     * @method reindexImgWrappers 
     * @param {number} index of the current image
     */
    function reindexImgWrappers(current, next) {

        for (var i = 0, max = $galWrapper.children.length - 1; i < max; i++) {
            if (i !== current && i !== next) {
                $galWrapper.children[i].style.zIndex = 0;
            }
        }

        $galWrapper.children[current].style.zIndex = 20;
        $galWrapper.children[next].style.zIndex = 10;

        return true;
    }

    /**
     * 
     * @method changeTileBG 
     */
    function changeTileBG() {
        var tile_height = document.querySelectorAll('.fancy-gallery-img-wrapper')[0].children[0].children[9].offsetHeight,
            tile_width = document.querySelectorAll('.fancy-gallery-img-wrapper')[0].children[0].children[9].offsetWidth,
            $tiles = document.querySelectorAll('.fancy-gallery-img-wrapper > div'),
            $images = document.querySelectorAll('.fancy-gallery-img-wrapper'),
            tiles_vert = $tiles.length,
            tiles_hor = $tiles[0].children.length;

        var current_image = null;

        for (var i = 0; i < tiles_vert; i++) {
            for (var j = 0; j < tiles_hor; j++) {
                for (var k = 0, max = $images.length; k < max; k++) {
                    replacer = $images[k].children[i].children[j].getAttribute('style');
                    replacer = replacer.replace(/background\-position:[^;]*;/, 'background-position: ' + j * tile_width + 'px ' + -(i * tile_height) + 'px;');
                    $images[k].children[i].children[j].setAttribute('style', replacer);
                }
            }
        }
    }

    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    var $buttons = document.getElementById('fancy-gallery-slides-nav').children;

    function setButton(nr) {

        for (var i = 0, max = $buttons.length; i < max; i++) {
            if (i === nr) {
                $buttons[i].classList.add('active');
            } else {
                $buttons[i].classList.remove('active');
            }
        }
    }

    return {
        adjustTiles: adjustTiles,
        reindexImgWrappers: reindexImgWrappers,
        insertAfter: insertAfter,
        setButton: setButton
    };
});