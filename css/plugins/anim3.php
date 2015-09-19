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
            -webkit-filter: grayscale(0%);
  }
  
  20%{
    /*-webkit-filter: grayscale(100%);*/
    transform: scale(10,1) translateX(20px);
  
  }
  
    40%{
    /*-webkit-filter: grayscale(100%);*/
    transform: scale(1,1) translateX(-60px);
  
  }
  
  80% {
    /*opacity: 1;*/
  }
  
  
  100% {
     /*-webkit-filter: grayscale(100%);*/
    transform: translateX(-20px);
    opacity: 0;
  }
}
EOD;

?>