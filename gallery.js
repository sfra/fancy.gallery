window.onload = ()=>{
    setTimeout(
        ()=>{fetch('galWrapper.php').then((data)=>{
        return data.text();
    }).then((data)=>{
        document.getElementById('fancy-gallery').innerHTML = data;
    });}
    ,0);
    let $link = document.createElement('link');
    $link.setAttribute('rel','stylesheet');
    $link.setAttribute('href','css/main.css.php');
    let $script = document.createElement('script');
    $script.setAttribute('data-main','js/main')
    $script.setAttribute('src','js/libs/requirejs/require.js');
    document.querySelector('head').appendChild($link);
    document.querySelector('head').appendChild($script);
};