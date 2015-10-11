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
        /*transform: scale(1,1);*/
            -webkit-filter: blur(0px);
            filter: blur(0px);
            /*-webkit-filter: grayscale(0%);*/
  }
  
  50%{
        /*border-radius: 450px;*/
    -webkit-filter: blur(10px);
    filter: blur(10px);
                    /*-webkit-filter: grayscale(100%);*/
  }
  80% {
    
    
  }

    90% {
/*    opacity: 1;*/
  }
  
  
  100% {
     /*-webkit-filter: grayscale(100%);*/
    /*transform: scale(.2,0);*/
    opacity: 0;
  }
}
EOD;

?>