define(['__Promise'], function (__Promise) {

console.log(__Promise);
    //var _Promise;
    if (typeof Promise === "undefined" || Promise.toString().indexOf("[native code]") === -1) {
            Promise = __Promise;
    } else {
        
        _Promise = Promise;
    }


    return _Promise;
});