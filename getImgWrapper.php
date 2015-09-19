<?php
    function getImgWrapper($xdim,$ydim,$tile_width,$tile_height,$id,$img_name){
        $out="<div id=\"$id\" class=\"img-wrapper\">\n";
        
        for($i=0; $i< $ydim; $i++){
            $out.= "<div>\n";
            for($j=0;$j<$xdim; $j++){
                $out.= "<div style=\"background: url($img_name)  -".($j*$tile_width)."px -".($i*$tile_height)."px;".
                "left: ".$tile_width*$j."px\"></div>\n";
            };
            $out.= "</div>\n";    
        };
        
        $out.= "</div>\n";
         return $out;       
    };

?>

