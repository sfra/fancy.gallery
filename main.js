const $plugin = document.getElementById('fancy-gallery-plugin');

const $form = document.querySelector('input');
const $sequence = document.getElementById('fancy-gallery-sequence');
const $order = document.querySelector('#fancy-gallery-order > select');
const $reversed = document.querySelector('input[name="reversed"]');
const $shuffled = document.querySelector('input[name="shuffled"]');
const $speed = document.querySelector('input[name="speed"]');
const $range = document.querySelector('input[type="range"]');

const state = {
    mouseIsDown: false
};

const run = window.onload || (() => {});


window.ee = new EventEmitter();

console.dir(ee);
window.onload = () => {

    run();

    $order.dispatchEvent(new Event('focus')); //.focus();







    //    alert(sessionStorage.getItem('fancy-gallery-order'));
    sessionStorage.clear();
    sessionStorage.setItem('fancy-gallery-order', 'snail');
    sessionStorage.setItem('fancy-gallery-reversed', 0);
    sessionStorage.setItem('fancy-gallery-speed', 50);



    $speed.addEventListener('click', (e) => {
        e.preventDefault();
    }, false);


    $speed.addEventListener('focus', (e) => {
        $speed.setAttribute('prev-value', $speed.value);
    }, false);

    $speed.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            unfocusAll();

        }

        if (e.key === 'Escape') {
            $speed.value = $speed.getAttribute('prev-value');
            unfocusAll();
        }


        console.log(e.key);



    });

    $speed.addEventListener('change', handleSpeed, false);

    $range.addEventListener('change', (e) => {
        $speed.value = $range.value;
    }, false);

    // $range.addEventListener('mousedown', (e) => {
    //     console.log(e);
    // }, false);

    $range.addEventListener('mousemove', (e) => {

        if (!state.mouseIsDown) return;
        $speed.value = $range.value;
    }, false);

    $range.addEventListener('change', handleSpeed, false);

    document.addEventListener('mousedown', () => {
        state.mouseIsDown = true;
    }, false);


    document.addEventListener('mouseup', () => {
        state.mouseIsDown = false;
    }, false);

    $plugin.addEventListener('change', () => {
        document.getElementById('css-plugin').setAttribute('href', `css/main.css.php?plugin=${$plugin.value}`);
    }, false);

    $sequence.addEventListener('change', handleSequence, false);



    $order.addEventListener('change', handleOrder, false);

    $reversed.addEventListener('change', handleReversed, false);

    $shuffled.addEventListener('change', handleShuffled, false);
    //wconsole.log($shuffled);

    function handleSequence() {
        let sequence = $sequence.value;
        sessionStorage.setItem('fancy-gallery-sequence', sequence);
        if (sequence === 'ordered') {
            document.getElementById('fancy-gallery-order').classList.remove('hidden');
        } else {
            document.getElementById('fancy-gallery-order').classList.add('hidden');
        }
    }

    function handleOrder() {
        let order = $order.value;
        console.log(order);

        sessionStorage.setItem('fancy-gallery-order', $order.value);
        ee.emit('orderChanged');
    }





    function handleReversed() {
        $reversed.value = 1 - parseInt($reversed.value, 10);

        sessionStorage.setItem('fancy-gallery-reversed', parseInt($reversed.value, 10));
        console.log(sessionStorage.getItem('fancy-gallery-reversed'));
        ee.emit('orderChanged');
    }



    function handleSpeed() {
        $range.value = $speed.value;
        sessionStorage.setItem('fancy-gallery-speed', $speed.value);
        ee.emit('orderChanged');
    }



    function handleShuffled() {
        $shuffled.value = 1 - parseInt($shuffled.value, 10);
        sessionStorage.setItem('fancy-gallery-shuffled', parseInt($shuffled.value, 10));
        ee.emit('orderChanged');
    }

    function unfocusAll() {
        let $input = document.createElement('input');
        document.body.appendChild($input);
        $input.style.position = 'absolute';
        $input.style.top = `${pageYOffset}px`;
        $input.style.left = `${pageXOffset}px`;
        $input.focus();
        document.body.removeChild($input);
    }
}