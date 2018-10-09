'use strict';

define([], function () {

    var insertCss = function insertCss(dataJson) {
        var plugin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : dataJson['plugin'];
        var callback = arguments[2];


        var $style = document.getElementById('plugin-handler');

        if ($style) {
            $style.parentElement.removeChild($style);
        }

        var $pluginCss = document.getElementById('plugin-css');

        if ($pluginCss) {
            $pluginCss.parentElement.removeChild($pluginCss);
        }

        //    );

        var xmlParams = {
            numberOfImgs: dataJson.numberOfImgs,
            tileWidthPerc: parseInt(dataJson.tile.w, 10) / (parseInt(dataJson.tile.xdim, 10) * dataJson.tile.w) * 100,

            tileHeightPerc: parseInt(dataJson.tile.h, 10) / (parseInt(dataJson.tile.ydim, 10) * dataJson.tile.h) * 100,

            maxWidth: parseInt(dataJson.tile.w, 10) * parseInt(dataJson.tile.xdim)
        };

        $pluginCss = document.createElement('link');
        $pluginCss.setAttribute('rel', 'stylesheet');
        $pluginCss.setAttribute('href', 'css/plugins/' + plugin + '.css');
        $pluginCss.setAttribute('id', 'plugin-css');
        document.head.appendChild($pluginCss);

        $style = document.createElement('style');
        $style.setAttribute('id', 'plugin-handler');
        $style.appendChild(document.createTextNode(''));

        document.head.appendChild($style);

        fetch('css/main.css.xml').then(function (data) {
            return data.text();
        }).then(function (data) {

            var parserXML = new DOMParser();

            var xml = parserXML.parseFromString(data, 'text/xml');

            var rules = xml.children[0].querySelectorAll('rule');
            var rule = null;
            var style = '';
            var attributes = [];
            var parsedRules = [];
            var selector = '';
            rulesLoop: for (var i = 0, max = rules.length; i < max; i++) {
                rule = rules[i];
                selector = rules[i].children[0].innerHTML;
                style = rules[i].children[1].innerHTML;

                selector = selector.replace(/&gt;/g, '>');
                attributes = rule.attributes;
                var ruleAdded = false;
                for (var j = 0, _max = attributes.length; j < _max; j++) {
                    if (attributes[j]['name'] === 'type') {
                        parsedRules = parseIterated(rule, xmlParams, $style.sheet);
                        parsedRules.forEach(function (rule) {

                            $style.sheet.insertRule(rule.selector + ' {' + rule.style + '}');
                        });
                        ruleAdded = true;
                        //                            continue rulesLoop;
                    }
                }
                if (!ruleAdded) {
                    $style.sheet.insertRule(selector + ' { ' + parseParameters(style, xmlParams) + '}');
                }
            }

            $style = document.createElement('style');
            $style.innerHTML = xml.children[0].querySelector('rest').innerHTML.replace(/&gt;/g, '>');
            document.body.appendChild($style);
        });

        setTimeout(function () {
            callback();
        }, 100);
    };

    return insertCss;
});

function parseParameters(style, params) {
    var text = style;
    for (var prop in params) {

        if (params.hasOwnProperty(prop)) {

            text = text.replace(/@{([^}]*)}@/g, function (match, gr) {
                ; /////////
                ;
                return params[gr];
            });
        }
    }
    return text;
}

function parseIterated(rulePattern, params, $sheet) {
    var rules = [];
    var iterator = '\\' + parseParameters(rulePattern.getAttribute('iterator'), params);
    var from = parseParameters(rulePattern.getAttribute('from'), params);
    var to = parseParameters(rulePattern.getAttribute('to'), params);

    var re = new RegExp('' + iterator, 'g');

    var currRule = {
        selector: null,
        style: null
    };

    var _loop = function _loop(i) {
        currRule = {};
        currRule.selector = rulePattern.children[0].innerHTML.replace(re, function (match, gr) {
            return i;
        }).replace(/{([0-9])*([^0-9])([0-9])*}/g, replaceActions).replace(/{([0-9]*)}/g, function (match, gr) {
            return gr;
        });

        currRule.style = rulePattern.children[1].innerHTML.replace(re, function (match, left, iterator, right) {
            return i;
        }).replace(/{([0-9]*)([^0-9])([0-9]*)}/g, replaceActions).replace(/{([0-9]*)}/g, function (match, gr) {
            return gr;
        }).replace(/\s\s+/g, function (match) {
            return ' ';
        });
        rules.push(currRule);
    };

    for (var i = from; i < to; i++) {
        _loop(i);
    }

    return rules;
}

function replaceActions(match, arg0, action, arg1) {

    switch (action) {
        case '+':
            return '{' + (parseInt(arg0) + parseInt(arg1)) + '}';

        case '*':
            return '{' + parseInt(arg0) * parseInt(arg1) + '}';
    }
}