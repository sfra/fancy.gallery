const fs = require('fs');
const path = require('path');



if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}

let pth = path.resolve(process.argv[2]);




function readdirRec(pth, callback) {

    //    console.log('pth');
    //   console.log(pth);
    fs.readdir(pth, (err, list) => {


        if (err) {
            console.log(err);
            return;
        }

        let file = null;
        for (let i = 0, max = list.length; i < max; i++) {

            file = path.resolve(pth, list[i]);
            // console.log('[');
            // console.log(list[i]);

            //            console.log(file);

            let stat = fs.statSync(file); // console.log(file);
            //console.log(stat.isDirectory());
            //console.log(']');
            if (stat && stat.isDirectory()) {
                readdirRec(file + '/', callback);
            } else {
                callback(file);
            }


        }


    });

}



readdirRec(pth, (file) => {
    if (!file.match(/\.js$/)) {
        return;
    }
    fs.readFile(file, 'utf8', (err, data) => {
        let out = data.replace(/\/\*\[rm[\s\S]*?\/\*rm\]\*\//g, (match) => {
            console.log(match);
            return '';
        });
        out = out.replace(/console\.log\([^\)]*\)/g, (match) => {
            console.log(match);
            return '';
        });

        // out = out.replace(/.use strict./g, (match) => {
        //     console.log(match);
        //     return '';
        // });
        fs.writeFile(file, out, () => {});
    });


});