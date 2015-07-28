fancy gallery (no jquery required)  
=====================

Clone the repository to the place on the server (php support is required).
Then put in the console
If you want to install [require.js](http://requirejs.org/) dependency locally just put into console
```bash
bower install
```

In your index.php file (or the file in which you want to put gallery), add to head section

```html
			<link rel="stylesheet" href="css/main.css.php" />
			<script data-main="js/main" src="js/libs/requirejs/require.js"></script> 
```

and in the place where the gallery has to be rendered

```php
   <?php
        include "gallery.plugin.php";
    ?>
```
By the way, you need [bower](http://bower.io/).

Files img0.jpg, img1.jpg ... are contained in images folder. If you want to change the number of displayed images
change the number in the file config.json and the value of variable numberOfImgs in run.js. In the case of
js file the value can be set by the usage of ajax, but it would increase the number of requests.  


