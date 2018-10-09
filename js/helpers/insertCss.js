define([], () => {

    const insertCss = (dataJson, plugin = dataJson['plugin'], callback) => {


        let $style = document.getElementById('plugin-handler');

        if ($style) {
            $style.parentElement.removeChild($style);
        }




        let $pluginCss = document.getElementById('plugin-css');

        if ($pluginCss) {
            $pluginCss.parentElement.removeChild($pluginCss);
        }


        //    console.log(parseInt(dataJson.tile.ydim, 10));

        const xmlParams = {
            numberOfImgs: dataJson.numberOfImgs,
            tileWidthPerc: parseInt(dataJson.tile.w, 10) / (parseInt(dataJson.tile.xdim, 10) * dataJson.tile.w) * 100,


            tileHeightPerc: parseInt(dataJson.tile.h, 10) / (parseInt(dataJson.tile.ydim, 10) * dataJson.tile.h) * 100,

            maxWidth: parseInt(dataJson.tile.w, 10) * parseInt(dataJson.tile.xdim)
        }

        console.log(plugin);

        $pluginCss = document.createElement('link');
        $pluginCss.setAttribute('rel', 'stylesheet');
        $pluginCss.setAttribute('href', `css/plugins/${plugin}.css`);
        $pluginCss.setAttribute('id', 'plugin-css');
        document.head.appendChild($pluginCss);

        $style = document.createElement('style');
        $style.setAttribute('id', 'plugin-handler');
        $style.appendChild(document.createTextNode(''));

        document.head.appendChild($style);



        fetch('css/main.css.xml').then(data => {
            return data.text();
        }).then(data => {

            let parserXML = new DOMParser();

            let xml = parserXML.parseFromString(data, 'text/xml');

            let rules = xml.children[0].querySelectorAll('rule');
            let rule = null;
            let style = '';
            let attributes = [];
            let parsedRules = [];
            let selector = '';
            rulesLoop:
                for (let i = 0, max = rules.length; i < max; i++) {
                    rule = rules[i];
                    selector = rules[i].children[0].innerHTML;
                    style = rules[i].children[1].innerHTML;

                    selector = selector.replace(/&gt;/g, '>');
                    attributes = rule.attributes;
                    let ruleAdded = false;
                    for (let j = 0, max = attributes.length; j < max; j++) {
                        if (attributes[j]['name'] === 'type') {
                            parsedRules = parseIterated(rule, xmlParams, $style.sheet);
                            parsedRules.forEach((rule) => {

                                $style.sheet.insertRule(`${rule.selector} {${rule.style}}`);
                            });
                            ruleAdded = true;
                            //                            continue rulesLoop;
                        }

                    }
                    if (!ruleAdded) {
                        $style.sheet.insertRule(`${selector} { ${parseParameters(style, xmlParams)}}`);
                    }
                }



            $style = document.createElement('style');
            $style.innerHTML = xml.children[0].querySelector('rest').innerHTML.replace(/&gt;/g, '>');
            document.body.appendChild($style);



        });

        setTimeout(() => {
            callback();
        }, 100);

    }


    return insertCss;

});

function parseParameters(style, params) {
    let text = style;
    for (let prop in params) {



        if (params.hasOwnProperty(prop)) {

            text = text.replace(/@{([^}]*)}@/g, (match, gr) => {

                return params[gr];

            })
        }

    }
    return text;

}

function parseIterated(rulePattern, params, $sheet) {
    let rules = [];
    let iterator = '\\' + (parseParameters(rulePattern.getAttribute('iterator'), params));
    let from = (parseParameters(rulePattern.getAttribute('from'), params));
    let to = parseParameters(rulePattern.getAttribute('to'), params);

    let re = new RegExp(`${iterator}`, 'g');


    let currRule = {
        selector: null,
        style: null
    };

    for (let i = from; i < to; i++) {
        currRule = {};
        currRule.selector = rulePattern.children[0].innerHTML.replace(re, (match, gr) => {
            return i;
        }).replace(/{([0-9])*([^0-9])([0-9])*}/g, replaceActions).replace(/{([0-9]*)}/g, (match, gr) => {
            return gr;
        });

        currRule.style = rulePattern.children[1].innerHTML.replace(re, (match, left, iterator, right) => {
            return i;
        }).replace(/{([0-9]*)([^0-9])([0-9]*)}/g, replaceActions).replace(/{([0-9]*)}/g, (match, gr) => {
            return gr;
        }).replace(/\s\s+/g, (match) => {
            return ' ';
        });
        rules.push(currRule);
    }



    return rules;


}


function replaceActions(match, arg0, action, arg1) {

    switch (action) {
        case '+':
            return `{${parseInt(arg0) + parseInt(arg1)}}`;

        case '*':
            return `{${parseInt(arg0) * parseInt(arg1)}}`;
    }


}