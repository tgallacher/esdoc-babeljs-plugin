const babel = require('babel-core');
const findBabelrc = require('find-babel-config');

const DEFAULTS = [];

const arrayUnique = arr => Array.from(new Set(arr));

exports.onHandleCode = (event) => {
    try {
        // ESDoc doesn't appear to like Async calls, so use sync version
        const data = findBabelrc.sync(process.cwd(), 5);

        if( ! data.file){
            throw new Error('esdoc-babel-plugin: .babelrc file not found');
        }

        const config = data.config;

        const plugins = Array.isArray(config.plugins)
            ? config.plugins.concat(DEFAULTS)
            : DEFAULTS;

        const babelrc = Object.assign({}, { plugins: arrayUnique(plugins) });
        const result = babel.transform(event.data.code, babelrc);

        /* eslint no-param-reassign: off */
        event.data.code = result.code;
    }
    catch (error){
        /* eslint no-console: off */
        console.error(error);
    }
};
