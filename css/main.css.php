<?php
$config_string = json_decode(file_get_contents("../config.json"));
$numberOfImgs = $config_string->numberOfImgs;

header("Content-type: text/css", true);

/*$configFile = fopen("config.json", "r") or die("Unable to open file!");
$config= json_decode(fread($configFile,filesize("config.json")));
print_r($config);
fclose($configFile);*/

/*$imgs=3;*/

?>

#gal-wrapper {
    height: 300px;
    
}


.img-wrapper {
    position: relative;
    width: 100%;
}

.img-wrapper > div {

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

.image-wrapper.hide > div > div {
    transition: all 1s linear;
    transform: rotateY(90deg);
    
}



.image-wrapper.hidden > div > div {
     transform: rotateY(90deg);
}



.img-wrapper.hide > div  {
    transition: all 1s linear;
    transform: rotateX(45deg);
     
}

.img-wrapper.hidden > div  {
     transform: rotateX(45deg);
     
}



.img-wrapper > div > div.hide {
    
    transition: all 1s linear;
    transform: rotateX(90deg);
    /*transform: skewX(90deg) skewY(70deg);*/
    /*height: 0%;*/
    opacity: 0;
    
}


/*.img-wrapper > div > div.hidden {
    

    transform: skewX(90deg) skewY(70deg);
    width: 0%;
    opacity: 0;
    
}*/




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
    top:600px;
    
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