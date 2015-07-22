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
        
        for($i=0; $i<$numberOfImgs; $i++){
            echo getImgWrapper($xdim,$ydim,'image-wrapper'.$i,'images/img'.$i.'.jpg');
        };
    

        
    ?>
        
    </div>

        


                <button id="cyc">&gt;&gt;</button>
               
    </body>
</html>