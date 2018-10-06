# fancy gallery (no jquery required)  


### Installation
We assume that [bower](https://github.com/bower/bower) and [node](https://github.com/nodejs/node) are installed.

Clone the repository to the place on the server (php support is required).

If you want to install [require.js](http://requirejs.org/) dependency locally just put into console
```bash
bower install && npm install
```
### Usage
In your index.php file (or the file in which you want to put gallery), add to head section

```html
<script type="text/javascript" src="gallery.js"></script>
```
Files img0.jpg, img1.jpg ... are contained in images folder. If you want to change the number of displayed images
change the number in the file fancy.gallery.config.json and the value of variable numberOfImgs in run.js. .

All of options contained in fancy.gallery.config.json are:
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

If you want to apply different plugins to different images add to fancy.gallery.config.json the section "images"

```javascript
"images": [
        {
            "plugin": <name>,
            "sequence": "<ordered/random>"
        },
          
        {  "plugin": <name>,
            "sequence": "<ordered/random>"
        },
        
        ...
        
        "plugin": <name>,
        "sequence": "<ordered/random>"
    ]

```


Example of file is contained in config.many.files.json file.

The current repository contains demo of the fancy.gallery.



