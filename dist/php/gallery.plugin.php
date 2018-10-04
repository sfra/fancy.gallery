<?php
        include "getImgWrapper.php";

        
        $config_string = json_decode(file_get_contents("../config.json"));

        $numberOfImgs = $config_string->numberOfImgs;
        $xdim = $config_string->tile->xdim;
        $ydim = $config_string->tile->ydim;
        $tile_width = $config_string->tile->w;
        $tile_height = $config_string->tile->h;
        for ($i=0; $i<$numberOfImgs; $i++) {
            echo getImgWrapper($xdim, $ydim, $tile_width, $tile_height, 'image-wrapper'.$i, 'images/img'.$i.'.jpg');
        };
