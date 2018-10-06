const $head = document.querySelector('head');

window.onload = () => {
    setTimeout(
        () => {
            fetch('php/galWrapper.php').then((data) => {
                return data.text();
            }).then((data) => {
                document.getElementById('fancy-gallery').innerHTML = data;
            });
        }, 0);



    let $link = document.createElement('link');
    $link.setAttribute('rel', 'stylesheet');
    $link.setAttribute('href', 'css/main.css.php');
    $link.setAttribute('id', 'css-plugin');
    let $script = document.createElement('script');
    /*[rm]*/

    $script.setAttribute('data-main', 'js/main');
    $script.setAttribute('src', 'js/libs/requirejs/require.js');
    /*rm]*/

    /*[rm*/
    if (false) { /*rm]*/
        $script.setAttribute('data-main', 'js/index.min.js');
        $script.setAttribute('src', 'js/require.min.js');
        /*[rm*/
    } /*rm]*/

    $head.appendChild($link);
    $head.appendChild($script);


};