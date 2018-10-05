#!/bin/bash

npm run clear

cp config.json dist/

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



