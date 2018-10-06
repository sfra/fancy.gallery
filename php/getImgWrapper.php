<?php
    function getImgWrapper($xdim, $ydim, $tile_width, $tile_height, $id, $img_name)
    {
        $out="<div id=\"$id\" class=\"fancy-gallery-img-wrapper fancy-gallery-clearfix\">";
        $tile_height_perc = $tile_height/($ydim*$tile_height)*100;

        $tile_width_perc = $tile_width/($xdim*$tile_width)*100;


        for ($i=0; $i< $ydim; $i++) {
            $out.= "<div>";
            for ($j=0;$j<$xdim; $j++) {
                $out.= "<div style=\"background-image: url($img_name);".
                "background-size: ".($xdim*100)."% ".($ydim*100)."%;".
                "\"></div>";
            };
            $out.= "</div>";
        };
        $out.= "</div>";
        return $out;
    };

?>

