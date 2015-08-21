/*

*		var __ajax=new __ajax('/someUrl');
* 
* __ajax.get(function(data){},function(err){});
*/


/*
 *
 */

define([], function () {
    function __ajax(_url, _config) {
        'use strict';
        var xmlhttp;
        var config = {};
        var url = _url;
        Object.defineProperty(config, 'method', {
            configurable: true,
            enumerable: true,
            value: (_config === undefined) ? 'GET' : (_config.method || 'GET')
        });

        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }


        var promise;





        return {
            setUrl: function (_url) {
                url = _url;
            },
            get: function () {
                promise = new Promise(function (res, rej) {

                    xmlhttp.onreadystatechange = function () {
                        if (xmlhttp.readyState == 4) {
                            if (xmlhttp.status == 200) {
                                res(xmlhttp.responseText);
                            } else if (xmlhttp.status == 400) {
                                rej('[400]');
                            } else {
                                rej('[ne 200]')
                            }
                        }
                    };

                    xmlhttp.open(config.method, url, true);
                    xmlhttp.send();
                });


                return promise;

            }
        }

    };


    return __ajax;

});