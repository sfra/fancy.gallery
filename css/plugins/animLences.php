<?php


$hideEffect= <<<EOD
    /*opacity: 0;    */
    /*transition: all 1s linear;*/
    animation: anim .7s normal forwards; 
    animation-iteration-count: 1;
    /*transform: scale(0,0);*/

EOD;

$animationDef=<<<EOD
@keyframes anim {
  0% {
   }
  

  
    20%{
    transform: scale(1.2,2);
    border-radius: 1350px;
  }
  
  80% {
  }
  
  
  100% {
     /*-webkit-filter: grayscale(100%);*/
    transform: scale(0,0);
    /*opacity: 0;*/
  }
}
EOD;

?>