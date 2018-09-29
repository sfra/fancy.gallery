<?php


$hideEffect= <<<EOD
    /*opacity: 0;    */
    /*transition: all 1s linear;*/
    animation: anim 2s normal forwards; 
    animation-iteration-count: 1;
    /*transform: scale(0,0);*/

EOD;

$animationDef=<<<EOD
@keyframes anim {
  0% {
        fillter: sepia(0);
        opacity:1;
  }
  
  
  
  100% {
    filter: sepia(1)
    opacity: 0;
  }
}
EOD;

?>