<?php
$config_string = json_decode(file_get_contents("../config.json"));
$heigth =$config_string->tile->h;
$width =$config_string->tile->w;
$hideEffect= <<<EOD
    /*opacity: 0;    */
    /*transition: all 1s linear;*/
    animation: anim 3s normal forwards; 
    animation-iteration-count: 1;
    /*transform: scale(0,0);*/

EOD;

$animationDef=<<<EOD
@keyframes anim {
  0% {
       /* position: absolute;*/
        /*transform: scale(1,1);*/
  }
  
  20%{
     opacity: 0.1;
        
  }

  
  
  100% {
    transform: translate(-{$width}px,-{$heigth}px) scale(0,0);
    opacity: 0;
  }
}
EOD;

?>