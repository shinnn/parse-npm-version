# parse-npm-version

[![npm version](https://img.shields.io/npm/v/parse-npm-version.svg)](https://www.npmjs.com/package/parse-npm-version)
[![Build Status](https://travis-ci.com/shinnn/parse-npm-version.svg?branch=master)](https://travis-ci.com/shinnn/parse-npm-version)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/parse-npm-version.svg)](https://coveralls.io/github/shinnn/parse-npm-version?branch=master)

Parse the installed [`npm` CLI](https://github.com/npm/cli) version with [`node-semver`](https://github.com/npm/node-semver)

```javascript
const parseNpmVersion = require('parse-npm-version');

(async () => {
  const result = await parseNpmVersion(); /* SemVer {
    raw: '6.7.0',
    major: 6,
    minor: 7,
    patch: 0,
    prerelease: [],
    ...
  } */
})();
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install parse-npm-version
```

## API

```javascript
const parseNpmVersion = require('parse-npm-version');
```

### parseNpmVersion()

Return: `Promise<SemVer>`

The resultant promise will be fulfilled with a [`SemVer`](https://github.com/npm/node-semver/blob/v5.6.0/semver.js#L287) instance for the current [`npm --version`](https://docs.npmjs.com/misc/config#version).

```javascript
(async () => {
  const result = await parseNpmVersion();

  result.constructor.name; //=> 'SemVer'
  result.toString(); //=> '6.7.0'

  result.compare('6.6.0'); //=> 1
  result.compare('6.7.0'); //=> 0
  result.compare('6.8.0'); //=> -1
})();
```

## Related project

* [npm-cli-version](https://github.com/shinnn/npm-cli-version) — Similar to this module, but gets a raw version `string` instead of a `SemVer` object

## License

[ISC License](./LICENSE) © 2017 - 2019 Shinnosuke Watanabe
