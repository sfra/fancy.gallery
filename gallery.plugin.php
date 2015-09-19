<?php
        include "getImgWrapper.php";

        
        $config_string = json_decode(file_get_contents("config.json"));
        $numberOfImgs = $config_string->numberOfImgs;
        $xdim = $config_string->tile->xdim;
        $ydim = $config_string->tile->ydim;
        for($i=0; $i<$numberOfImgs; $i++){
            echo getImgWrapper($xdim,$ydim,'image-wrapper'.$i,'images/img'.$i.'.jpg');
              
        };


?>