<?php
    function getImgWrapper($xdim,$ydim,$tile_width,$tile_height,$id,$img_name){
        $out="<div id=\"$id\" class=\"img-wrapper clearfix\">\n";
        $tile_height_perc = $tile_width/($xdim*$tile_height)*100;
        $tile_width_perc = $tile_width/($xdim*$tile_width)*100;
        for($i=0; $i< $ydim; $i++){
            $out.= "<div>\n";
            for($j=0;$j<$xdim; $j++){
                $out.= "<div style=\"background-image: url($img_name);".
                "background-size: ".($tile_width_perc*100)."% ".($tile_width_perc*100)."%;".
                " background-position:  ".($j*($tile_width_perc+1))."% ".($i*($tile_width_perc+1))."%;".
                "\"></div>\n";
            };
            $out.= "</div>\n";    
        };
        
        $out.= "</div>\n";
         return $out;       
    };

?>

