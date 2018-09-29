fancy gallery (no jquery required)  
=====================

[bower](http://bower.io/) is required. 
Clone the repository to the place on the server (php support is required).
Then put in the console
If you want to install [require.js](http://requirejs.org/) dependency locally just put into console
```bash
bower install && npm install
```

In your index.php file (or the file in which you want to put gallery), add to head section

```html
<script type="text/javascript" src="gallery.js"></script>
```


Files img0.jpg, img1.jpg ... are contained in images folder. If you want to change the number of displayed images
change the number in the file config.json and the value of variable numberOfImgs in run.js. In the case of
js file the value can be set by the usage of ajax, but it would increase the number of requests.

All of options contained in config.json are:
```javascript
{
    "numberOfImgs": "4",
    "effect" : "hide",
    "plugin" : "animToTop", /* the name of plugin responsible for animation. Plugins are contained in css/plugins/ folder */
    "speed": 50,            /* speed of the animation */
    "sequence": "ordered",  /* the sequence can be ordered or random */

    /* parameters of tiles */
    "tile" :{
        "xdim":10, /* the number of tiles in the horizontal division */
        "ydim":5,  /* the number of tiles in the vertical division */
        "w": 70,   /* width of a particular tile */ 
        "h": 105   /* height of a particular tile */
    }
}
```



