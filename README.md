# esdoc-babel-plugin

An [ESDoc](https://esdoc.org/) plugin which loads and transforms your javascript based on your project [Babel config](http://babeljs.io/docs/usage/babelrc/). This allows you to write *next-gen* JS :metal:,
using the latest and greatest features (e.g. [Flowtype](https://flow.org), ES2015+), while providing the benefits of having auto-generated documentation.


## Install

```sh
npm install -S esdoc-babeljs-plugin
```

## Usage
Add the plugin to the ``plugin`` property in your ``.esdoc.json`` config file.

```json
{
  "source": "./src",
  "destination": "./doc",
  "plugins": [{
    "name": "esdoc-babeljs-plugin"
  }]
}
```

Add to your NPM scripts

```json
{
    "scripts": {
        "gen-docs": "esdoc -c .esdoc.json"
  },
}
```

and run:

```sh
npm run gen-docs
```

## License - MIT
See [LICENSE](/LICENSE) for details.

## Acknowledgements
This plugin is inspired by the [esdoc-flow-plugin](https://www.npmjs.com/package/esdoc-flow-plugin). However, this no longer appears to be actively maintained.

## NOTES

Although ESDoc has support for ES2015+ core syntax, JS enhancements (e.g. Flowtype) or new syntax emerge all the time, which means that you'll probably hit a limit of what ESDoc understands.
This plugin transfers your Babel setup to help ESDoc understand your code.
