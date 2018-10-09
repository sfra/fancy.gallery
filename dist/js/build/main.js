'use strict';

requirejs.config({
    baseUrl: 'js',
    paths: {
        ImagesSet: ['classes/ImagesSet'],
        Iteraror: ['classes/Iterator'],
        Sequence: ['classes/Sequence']
    }

});

requirejs.onError = function (err) {
    'use strict';

    console.warn(err);
    ;
    ;
    throw err;
};

/* it does not work in firefox without loading ImageSet at this stage */
require(['run', 'libs/__ajax', 'ImagesSet'], function (run) {});