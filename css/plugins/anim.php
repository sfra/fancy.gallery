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
        /*transform: scale(1,1);*/
  }
  
  50%{
     transform: translate(30px,-5px) scale(.8,.2); 
     /*transform: translateX(30px);*/
    /*transform: translateX(30px) scale(1,1);*/
        
  }
  80% {
    transform: translate(0px,5px) scaleX(.8,.1);
    
  }

    90% {
    transform: translate(0px,0px) scaleX(1,1);
    
  }
  
  
  100% {
    transform: translate(-30px,10px) scale(.2,0);
  }
}
EOD;

?>