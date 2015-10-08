<?php
$config_string = json_decode(file_get_contents("../config.json"));
$numberOfImgs = $config_string->numberOfImgs;
$plugin = $config_string->plugin;

$tile_width_perc = ($config_string->tile->w)/($config_string->tile->xdim * $config_string->tile->w)*100;
$tile_height_perc = ($config_string->tile->h)/($config_string->tile->ydim * $config_string->tile->h)*100;

require_once("plugins/".$plugin.".php");
header("Content-type: text/css", true);
if(!isset($animationDef)) {$animationDef="";};
?>


#gal-wrapper {
    /*height: 300px;*/

    width: 100%<?= $config_string->tile->w * $config_string->tile->xdim ?>px;
    height: <?= $config_string->tile->h * $config_string->tile->ydim ?>px;
}


.img-wrapper {
        position: absolute;
    overflow: hidden;
    width: 100%;
}

.img-wrapper > div {
    overflow: hidden;
    width: 100%;
    height: <?= $config_string->tile->h ?>px;
    
}



.img-wrapper > div > div {
    /*transition: all 1s linear;*/
    /*background-image: url("../images/obraz.jpg");*/
    overflow: hidden;
    float: left;
    width: <?= $tile_width_perc?>%;
    height: 100%;
    /*position: relative;*/
    /*position: absolute;*/
}




/*.image-wrapper.hidden > div > div {
     transform: rotateY(90deg);
}



.img-wrapper.hidden > div  {
     transform: rotateX(45deg);
     
}

*/



<?= $animationDef ?>




.img-wrapper > div > div.hide {
    <?= $hideEffect ?>;
    
}






.img-wrapper > div > div.scale {
    
    transition: all .4s cubic-bezier(0.42, 0, 0.58, 1);

    transform: scale(0);
 
    
}







<?php
$current_top = null;
$current_zIndex = null;
for($i=1;$i<$numberOfImgs; $i++){
$current_top = $i*200;
$current_zIndex = $i*10;
echo <<<EOT
#image-wrapper{$i} {

    z-index: -{$current_zIndex};
    /*top:-{$current_top}px;*/
}\n
EOT;
};



?>

#cyc {
    position: absolute;
    top:600px;
    left: 10px;
    float: left;
    
}


footer {
    position: relative;
    z-index: 10;
    height: 40px;
    line-height: 40px;
    padding-left: 40px;
    background-color: #445566;
    color: #bbaabb;
    text-align: center;
    padding: 10px;
    font-family: Arial;
    font-size: 13px;

    clear: both;

    
}