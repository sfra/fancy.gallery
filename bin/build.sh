#!/bin/bash

npm run clear

cp fancy.gallery.config.json dist/

cp -R css dist/ 
cp -R images dist/
cp -R img dist/
cp -R js dist/
cp -R php dist/
cp -R scripts dist/
node bin/replace.js dist/
rm -R dist/js/libs/eventEmitter
npm run babel
cp js/build.js dist/js/build/build.js
npm run r.js
#minify dist/js/libs/requirejs/require.js > dist/js/main-built.js.temp
minify dist/js/libs/requirejs/require.js > dist/js/require.min.js
mv dist/js/build/main-built.js dist/js/index.min.js
#cat dist/js/build/main-built.js >> dist/js/main-built.js.temp
#mv dist/js/main-built.js.temp dist/js/index.min.js
cd dist/js/
rm -R build build.js classes helpers libs main.js plugins run.js stateSingleton.js

