'use strict';

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

    var xmlhttp = void 0;
    var config = {};
    var url = _url;

    var parameters = '';

    var setParameters = function setParameters(obj) {

      parameters = '';
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          parameters += prop + "=" + obj[prop] + '&';
        }
      };

      parameters = parameters.substr(0, parameters.length - 1);
    };

    config.method = _config === undefined ? 'GET' : _config.method || 'POST';

    // Object.defineProperty(config, 'method', {
    //   configurable: true,
    //   enumerable: true,
    //   value: (_config === undefined) ? 'GET' : (_config.method || 'POST')
    // });

    if (typeof _config !== 'undefined' && typeof _config.parameters !== 'undefined') {
      setParameters(_config.parameters);
    };

    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else {
      xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }

    var promise = null;

    return {
      setUrl: function setUrl(_url) {
        url = _url;
      },

      setParameters: setParameters,
      addParameters: function addParameters(params) {
        for (var prop in params) {
          if (params.hasOwnProperty(prop)) {
            parameters += '&' + prop + '=' + params[prop];
          }
        }
      },
      getParameters: function getParameters() {
        return parameters;
      },
      setMethod: function setMethod(meth) {
        config.method = meth;
      },

      get: function get() {
        promise = new Promise(function (res, rej) {

          xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4) {
              if (xmlhttp.status === 200) {
                res(xmlhttp.responseText);
              } else if (xmlhttp.status === 400) {
                rej('[400]');
              } else {
                rej('[ne 200]');
              }
            }
          };

          xmlhttp.open(config.method, url, true);

          //                    if(config.method==='post') {
          xmlhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          //
          //                                      };
          //              xmlhttp.send(JSON.stringify(parameters));
          xmlhttp.send(parameters);
        });

        return promise;
      }
    };
  }

  return __ajax;
});