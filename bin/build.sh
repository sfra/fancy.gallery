#!/bin/bash


cp config.json dist/

cp -R css dist/
cp -R images dist/
cp -R img dist/
cp -R js dist/
cp -R php dist/
cp -R scripts dist/
node bin/replace.js dist/
rm -R dist/js/libs/eventEmitter



