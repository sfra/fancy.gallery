<?php


$hideEffect= <<<EOD
    /*opacity: 0;    */
    /*transition: all 1s linear;*/
    animation: anim 1s normal forwards; 
    animation-iteration-count: 1;
    /*transform: scale(0,0);*/

EOD;

$animationDef=<<<EOD
@keyframes anim {
  0% {
        transform: scale(1,1);
  }
  
  50%{
        transform: scaleY(600);
        
  }
  80% {
    
    
  }

    90% {
    
  }
  
  
  100% {
    /*transform: scale(.2,0);*/
    opacity: 0;
  }
}
EOD;

?>