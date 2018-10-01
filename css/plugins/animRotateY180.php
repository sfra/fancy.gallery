<?php


$hideEffect= <<<EOD
    animation: anim 1s normal forwards; 
    animation-iteration-count: 1;

EOD;

$animationDef=<<<EOD
@keyframes anim {
  0% {

  }
  
  50%{


  }
  80% {
    
    
  }

    90% {
    
  }
  
  
  100% {
/*        -webkit-filter: blur(2px) brightness(3.2) drop-shadow(9px 9px 20px black) grayscale(0.6) sepia(0.4);*/
      rotateY(180deg);
      opacity: 0;
  }    
}
EOD;

?>