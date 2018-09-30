window.onload = () => {
    console.log('gallery.js');
    setTimeout(
        () => {
            fetch('php/galWrapper.php').then((data) => {
                return data.text();
            }).then((data) => {
                console.log('data');
                console.log(data);
                document.getElementById('fancy-gallery').innerHTML = data;
            });
        }, 0);


    setTimeout(() => {
        let $link = document.createElement('link');
        $link.setAttribute('rel', 'stylesheet');
        $link.setAttribute('href', 'css/main.css.php');
        $link.setAttribute('id', 'css-plugin');
        let $script = document.createElement('script');
        $script.setAttribute('data-main', 'js/main')
        $script.setAttribute('src', 'js/libs/requirejs/require.js');
        document.querySelector('head').appendChild($link);
        document.querySelector('head').appendChild($script);
    }, 500);

};