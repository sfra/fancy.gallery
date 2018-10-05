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
    

    
        $script.setAttribute('src', 'js/build/main-built.js');
        

    $head.appendChild($link);
    $head.appendChild($script);


};