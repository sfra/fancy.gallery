<?php
        include "getImgWrapper.php";
        $xdim = 10;
        $ydim = 10;

        $config_string = json_decode(file_get_contents("config.json"));
        $numberOfImgs = $config_string->numberOfImgs;
        
        for($i=0; $i<$numberOfImgs; $i++){
            echo getImgWrapper($xdim,$ydim,'image-wrapper'.$i,'images/img'.$i.'.jpg');
              
        };


?>