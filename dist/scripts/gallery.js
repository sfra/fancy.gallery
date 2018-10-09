(() => {

    let config = null;

    fetch('fancy.gallery.config.json').then((data) => {
        return data.json();
    }).then((data) => {
        config = data;
        gallery();

    });

    const $head = document.querySelector('head');

    const run = window.onload || (() => {});

    window.onload = () => {

        run();

        let $link = document.createElement('link');
        $link.setAttribute('rel', 'stylesheet');
        $link.setAttribute('href', 'css/main.css.php');
        $link.setAttribute('id', 'css-plugin');
        let $script = document.createElement('script');




        

        

            $script.setAttribute('data-main', 'js/index.min.js');
            $script.setAttribute('src', 'js/require.min.js');
            

        // $head.appendChild($link);
        $head.appendChild($script);


    };




    function gallery() {

        const $fancyGalleryGalWrapper = document.createElement('div');
        $fancyGalleryGalWrapper.setAttribute('id', 'fancy-gallery-gal-wrapper');
        $fancyGalleryGalWrapper.classList.add('fancy-gallery-clearfix');

        for (let i = 0; i < config.numberOfImgs; i++) {
            $fancyGalleryGalWrapper.appendChild(getImgWrapper(config.tile.xdim, config.tile.ydim, `image-wrapper${i}`, `images/img${i}.jpg`));
        }

        $fancyGalleryGalWrapper.innerHTML = `${$fancyGalleryGalWrapper.innerHTML}
        <div id = "fancy-gallery-navi" >
            <div id = "fancy-gallery-switch-left" >
                <img src = "img/left_arrow.png" / >
            </div>
        <div id="fancy-gallery-slides-nav"></div>
            <div id = "fancy-gallery-switch-right" ><img src = "img/left_arrow.png" /></div>
        </div>`;

        document.getElementById('fancy-gallery').appendChild($fancyGalleryGalWrapper);


    }



    function getImgWrapper(xdim, ydim, id, img_name) {

        let out = document.createElement('div');
        out.setAttribute('id', id);
        out.classList.add('fancy-gallery-img-wrapper');
        out.classList.add('fancy-gallery-clearfix');

        let child = null,
            subchild;
        for (let i = 0; i < ydim; i++) {
            child = document.createElement('div');

            for (let j = 0; j < xdim; j++) {
                subchild = document.createElement('div');
                subchild.setAttribute('style', `background-image: url(${img_name}); background-size: ${xdim * 100}% ${ydim * 100}%`);
                child.appendChild(subchild);
            };
            out.appendChild(child);
        };

        return out;
    };
})();