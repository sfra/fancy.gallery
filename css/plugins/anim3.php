<?php


$hideEffect= <<<EOD
    /*opacity: 0;    */
    /*transition: all 1s linear;*/
    animation: anim .3s normal forwards; 
    animation-iteration-count: 1;
    /*transform: scale(0,0);*/

EOD;

$animationDef=<<<EOD
@keyframes anim {
  0% {
   }
  
  20%{
  
  
  }
  
    40%{
    transform: scale(1,1.5);
    border-radius: 150px;
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