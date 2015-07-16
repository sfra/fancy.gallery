<?php 
    
    include "getImgWrapper.php";
    $xdim = 10;
    $ydim = 10;

    $config_string = json_decode(file_get_contents("config.json"));
    $numberOfImgs = $config_string->numberOfImgs;
?>


<!DOCTYPE html>
<html>
  
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="css/main.css.php" />
        <script data-main="js/main" src="js/libs/requirejs/require.js"></script> 
    
    </head>
    
    <body>
        
    <div id="gal-wrapper">    
  <?php
        echo getImgWrapper($xdim,$ydim,'image-wrapper0','images/img0.jpg');
        echo getImgWrapper($xdim,$ydim,'image-wrapper1','images/img1.jpg');
        echo getImgWrapper($xdim,$ydim,'image-wrapper2','images/img2.jpg');
        
    ?>
        
    </div>

        


                <button id="cyc">&gt;&gt;</button>
               
    </body>
</html>