# parse-npm-version

[![npm version](https://img.shields.io/npm/v/parse-npm-version.svg)](https://www.npmjs.com/package/parse-npm-version)
[![Build Status](https://travis-ci.org/shinnn/parse-npm-version.svg?branch=master)](https://travis-ci.org/shinnn/parse-npm-version)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/parse-npm-version.svg)](https://coveralls.io/github/shinnn/parse-npm-version?branch=master)

Parse the installed [`npm` CLI](https://github.com/npm/npm) version with [`node-semver`](https://github.com/npm/node-semver)

```javascript
const parseNpmVersion = require('parse-npm-version');

(async () => {
  const result = await parseNpmVersion(); /* SemVer {
    raw: '6.1.0',
    major: 6,
    minor: 1,
    patch: 0,
    prerelease: [],
    ...
  } */
})();
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install parse-npm-version
```

## API

```javascript
const parseNpmVersion = require('parse-npm-version');
```

### parseNpmVersion()

Return: `Promise<SemVer>`

The resultant promise will be fulfilled with a [`SemVer`](https://github.com/npm/node-semver/blob/v5.5.0/semver.js#L284) instance for the current [`npm --version`](https://docs.npmjs.com/misc/config#version).

```javascript
parseNpmVersion().then(result => {
  result.constructor.name; //=> 'SemVer'
  result.toString(); //=> '6.1.0'

  result.compare('6.0.0'); //=> 1
  result.compare('6.1.0'); //=> 0
  result.compare('6.2.0'); //=> -1
});
```

## Related project

* [npm-cli-version](https://github.com/shinnn/npm-cli-version) — Similar to this module, but gets a raw version `string` instead of a `SemVer` object

## License

[ISC License](./LICENSE) © 2017 - 2018 Shinnosuke Watanabe
