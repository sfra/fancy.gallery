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

    width: 100%;
    /*overflow: none;*/
}


.img-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
/*    top: -200px;*/
}

.img-wrapper > div {
    width: 100%;
    height: <?= $tile_height_perc ?>%;
    
}



.img-wrapper > div > div {

    display: block;
    float: left;
    width: <?= $tile_width_perc ?>%;
    height: 100%;

}











<?= $animationDef ?>




.img-wrapper > div > div.hide {
    <?= $hideEffect ?>;
    
}














<?php
$current_top = null;
$current_zIndex = null;
for($i=1;$i<$numberOfImgs; $i++){
    $current_top = $i*100;
    $current_zIndex = $i*10;
echo <<<EOT
#image-wrapper{$i} {

    z-index: -{$current_zIndex};
    top: -{$current_top}%;

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


.clearfix:after {
     content: "";
    display: table;
    clear: both;
}


}