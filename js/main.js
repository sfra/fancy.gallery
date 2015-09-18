requirejs.config({
    baseUrl: 'js',
    paths: {
        ImagesSet: ['classes/ImagesSet'],
        Iteraror: ['classes/Iterator']/*,
       __Promise: ['libs/requirejs-promise/requirejs-promise']*/

    }

});


requirejs.onError = function (err) {
    console.warn(err);
    console.log(err.requireType);
    console.log('modules: ' + err.requireModules);
    throw err;
};

/* it does not work in firefox without loading ImageSet at this stage */
require(['run', 'libs/__ajax', 'ImagesSet'], function (run) {


});