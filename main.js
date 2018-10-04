const $plugin = document.getElementById('fancy-gallery-plugin');
const $sequence = document.getElementById('fancy-gallery-sequence');
const $order = document.querySelector('#fancy-gallery-order > select');
const $reversed = document.querySelector('#fancy-gallery-order > input');


window.ee = new EventEmitter();

sessionStorage.clear();
sessionStorage.setItem('fancy-gallery-order', 'snail');
sessionStorage.setItem('fancy-gallery-reversed', 0);



$plugin.addEventListener('change', () => {
    document.getElementById('css-plugin').setAttribute('href', `css/main.css.php?plugin=${$plugin.value}`);
}, false);

$sequence.addEventListener('change', () => {
    let sequence = $sequence.value;
    sessionStorage.setItem('fancy-gallery-sequence', sequence);
    if (sequence === 'ordered') {
        document.getElementById('fancy-gallery-order').classList.remove('hidden');
    } else {
        document.getElementById('fancy-gallery-order').classList.add('hidden');
    }
}, false);

$order.addEventListener('change', () => {
    let order = $order.value;

    sessionStorage.setItem('fancy-gallery-order', $order.value);
    ee.emit('orderChanged');

}, false);
$reversed.addEventListener('change', () => {
    $reversed.value  = 1 - parseInt($reversed.value, 10);

    sessionStorage.setItem('fancy-gallery-reversed', parseInt($reversed.value, 10));
console.log(sessionStorage.getItem('fancy-gallery-reversed'));
    ee.emit('orderChanged');
}, false);
