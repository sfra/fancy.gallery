<?php
$config_string = json_decode(file_get_contents("../config.json"));
$numberOfImgs = $config_string->numberOfImgs;
$plugin = $config_string->plugin;
require_once("plugins/".$plugin.".php");
header("Content-type: text/css", true);

?>

#gal-wrapper {
    height: 300px;
    
}


.img-wrapper {
    position: relative;
    width: 100%;
}

.img-wrapper > div {
    overflow: hidden;
    width: 400px;
    height: 20px;
    
}



.img-wrapper > div > div {
    /*transition: all 1s linear;*/
    /*background-image: url("../images/obraz.jpg");*/
    float: left;
    width: 40px;
    height: 20px;
    position: relative;

}




/*.image-wrapper.hidden > div > div {
     transform: rotateY(90deg);
}



.img-wrapper.hidden > div  {
     transform: rotateX(45deg);
     
}

*/








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
    top:-{$current_top}px;
}\n
EOT;
};



?>

#cyc {
    position: absolute;
    top:300px;
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