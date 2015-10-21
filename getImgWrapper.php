<?php
    function getImgWrapper($xdim,$ydim,$tile_width,$tile_height,$id,$img_name){
        $out="<div id=\"$id\" class=\"img-wrapper clearfix\">";
        $tile_height_perc = $tile_height/($ydim*$tile_height)*100;

        $tile_width_perc = $tile_width/($xdim*$tile_width)*100;
        //echo $tile_height_perc."\n";
        //echo $tile_width_perc."\n";

        for($i=0; $i< $ydim; $i++){
            $out.= "<div>";
            for($j=0;$j<$xdim; $j++){
                $out.= "<div style=\"background-image: url($img_name);".
//                 "width:".$tile_width_perc."%;\n".
                "background-size: ".($xdim*100)."% ".($ydim*100)."%;".
                //" background-position:  ".-($j*($tile_width_perc))."% ".-($i*($tile_height_perc))."%;".
//                " background-position:  ".($j*$tile_width_perc)."% ".($i*($tile_width_perc))."%;".
//                " background-position:  ".($j*100)."% ".($i*(200))."%;".
                "\"></div>";
            };
            $out.= "</div>";    
        };
        
        $out.= "</div>";
         return $out;       
    };

?>

