
const $plugin = document.getElementById('fancy-gallery-plugin');
const $sequence = document.getElementById('fancy-gallery-sequence');

$plugin.addEventListener('change',()=>{
    document.getElementById('css-plugin').setAttribute('href',`css/main.css.php?plugin=${$plugin.value}`);
},false);

$sequence.addEventListener('change',()=>{
    sessionStorage.setItem('fancy-gallery-sequence',$sequence.value);

},false);