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
     transform: translate(100px,-5px) scale(.8,.4); 
     /*transform: translateX(30px);*/
    /*transform: translateX(30px) scale(1,1);*/
        
  }
  70% {
    transform: translate(-10px,5px)  scaleX(.8,.2) rotateY(90deg); 

  }

    90% {
    transform: translate(-20px,0px) scaleX(1,1) rotateY(180deg);
    
  }
  
  
  100% {
    
    opacity: 0;
  }
}
EOD;

?>