<?php
header("Content-type: text/css; charset: UTF-8");
$config_string = json_decode(file_get_contents("../fancy.gallery.config.json"));
$numberOfImgs = $config_string->numberOfImgs;
$plugin = null;

if (isset($_GET['plugin'])) {
    $plugin=$_GET['plugin'];
} else {
    $plugin = $config_string->plugin;
}

$tile_width_perc = ($config_string->tile->w)/($config_string->tile->xdim * $config_string->tile->w)*100;
$tile_height_perc = ($config_string->tile->h)/($config_string->tile->ydim * $config_string->tile->h)*100;

$isMobile = preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);

$hideEffect= <<<EOD
    /*opacity: 0;    */
    /*transition: all 1s linear;*/
    animation: anim 2s normal forwards; 
    animation-iteration-count: 1;
    /*transform: scale(0,0);*/

EOD;
/** plugin file can be in plg and css files or only css file */
if (file_exists("plugins/".$plugin.".css")) {
    require_once("plugins/".$plugin.".css");
} else {
    require_once("plugins/".$plugin.".plg");
}



if (!isset($animationDef)) {
    $animationDef="";
};
?>

* {
    margin: 0px;
    padding: 0px;
}


::before,
::after {
    content: "";
    display: block;
    height: 0px;
    line-height: 0px;
}

#fancy-gallery-gal-wrapper {
    /*height: 300px;*/
    max-width: <?= $config_string->tile->w * $config_string->tile->xdim ?>px;
    width: 100%;
    overflow: hidden;
    left: 33px;
    position: relative;
    background: rgba(0, 0, 0, 0);
}


.fancy-gallery-img-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    background: rgba(0, 0, 0, 0); 
/*    top: -200px;*/
}

.fancy-gallery-img-wrapper > div {
    position: relative;
    width: 100%;
    height: <?= $tile_height_perc ?>%;
    text-decoration:none;
    background: rgba(0, 0, 0, 0);
    <?php
        if ($isMobile) {
            echo "margin: -1px 0px;\n";
        } else {
            echo "margin: 0px;\n";
        };
    ?>
/*    margin: -2px;*/
}



.fancy-gallery-img-wrapper > div > div {
    position: relative;
    display: block;
    float: left;
    width: <?= $tile_width_perc ?>%;
    height: 100%;
    border-collapse: collapse;
    outline: none;
    text-decoration:none;
    <?php
        if ($isMobile) {
            echo "margin: -1px -1px;\n";
        } else {
            echo "margin: 0px;\n";
        };
    ?>


}



<?= $animationDef ?>




.fancy-gallery-img-wrapper > div > div.hide {
    <?= $hideEffect ?>;
    
}



<?php
$current_top = null;
$current_zIndex = null;
for ($i=1;$i<$numberOfImgs; $i++) {
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



#fancy-gallery-navi {
    position: absolute;
    z-index: 99;
    width: 100%;
    min-height: 50px;
    background-color: rgba(100,100,100,0);
    color: #ff0000;
    bottom: 0px;      
    display: block;
    margin-left: auto;
    margin-right: auto;
    transform: translate(20%,0%);
}

#fancy-gallery-navi > div {
    float: left;
    border-radius: 10px;
    height: 50px;
    margin-top: -14px;
    
}

#fancy-gallery-navi > div:nth-child(3) {
    transform: rotate(180deg);
}








#fancy-gallery-slides-nav {
/*    width: 80%;*/
    margin-left: 30px;
    margin-right: 30px;
    height: 50px;
    line-height: 50px;
    display: block;
}




#fancy-gallery-navi div > .fancy-gallery-slide-button {
    width: 10px;
    height: 10px;
    float: left;
    background-color: #112233;
    
    border-radius: 10px;
    margin: 15px 20px;
        line-height: 20px;
      display: block;


}

#fancy-gallery-navi div > .fancy-gallery-slide-button.active {
    transition: all 1s ease-in;
    background-color: #fafafa;
}


.fancy-gallery-slide-button:hover {
        background-color: #556677;
    
}

.fancy-gallery-slide-button > p > img {
    transform: scale(0);
    transition: all .5s linear;
    position: relative;
    top:-85px;
    left:-50px;
    border: 4px solid rgba(100,100,100,0.5);
    border-radius: 10px;
    opacity: 0;
}

.fancy-gallery-slide-button:hover > p > img {
    transition: all 1s linear;
    transform: scale(1);
    opacity: 1;
}





.fancy-gallery-clearfix:after {
     content: "";
    display: table;
    clear: both;
}

#fancy-gallery-switch-right {
    position: relative;
    bottom: 18px;
}





#fancy-gallery-switch-right:hover {
    animation-name: arrowRight;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-iteration-count:1;
    animation-duration: 1s;
}



#fancy-gallery-switch-left {
    position: relative;

    
}

#fancy-gallery-switch-left:hover {
    animation-name: arrowLeft;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-iteration-count:1;
    animation-duration: 1s;

    
}


@keyframes arrowRight{
    0%{ left:5px;

    }
    25%{left:-5px;}
    50% {left:5px;}
    75%{left:0px;}
    100% {left:5px;}
  }

  @keyframes arrowLeft{
    0%{ left:-5px;

    }
    25%{left:5px;}
    50% {left:-5px;}
    75%{left:0px;}
    100% {left:-5px;}
  }