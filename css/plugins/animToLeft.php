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
       /* position: absolute;*/
        /*transform: scale(1,1);*/
  }
  
  50%{
    
        
  }

  
  
  100% {
    transform: translateX(-100px) scaleX(0);
    opacity: 0;
  }
}
EOD;

?>