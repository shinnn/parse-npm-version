# parse-npm-version

[![NPM version](https://img.shields.io/npm/v/parse-npm-version.svg)](https://www.npmjs.com/package/parse-npm-version)
[![Build Status](https://travis-ci.org/shinnn/parse-npm-version.svg?branch=master)](https://travis-ci.org/shinnn/parse-npm-version)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/parse-npm-version.svg)](https://coveralls.io/github/shinnn/parse-npm-version?branch=master)

Get the currently installed [`npm` CLI](https://github.com/npm/npm) version and parse it with [`node-semver`](https://github.com/npm/node-semver)

```javascript
const parseNpmVersion = require('parse-npm-version');

(async () => {
  const result = await parseNpmVersion(); /* SemVer {
    loose: false,
    raw: '5.0.2',
    major: 5,
    minor: 0,
    patch: 2,
    prerelease: [],
    build: [],
    version: '5.0.2'
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

The resultant promise will be fulfilled with a [`SemVer`](https://github.com/npm/node-semver/blob/v5.3.0/semver.js#L272) instance for the current [`npm --version`](https://docs.npmjs.com/misc/config#version).

```javascript
parseNpmVersion().then(result => {
  result.constructor.name; //=> 'SemVer'
  result.toString(); //=> '5.0.2'

  result.compare('5.0.1'); //=> 1
  result.compare('5.0.2'); //=> 0
  result.compare('5.0.3'); //=> -1
});
```

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed)
