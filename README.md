# parse-npm-version

[![NPM version](https://img.shields.io/npm/v/parse-npm-version.svg)](https://www.npmjs.com/package/parse-npm-version)
[![Build Status](https://travis-ci.org/shinnn/parse-npm-version.svg?branch=master)](https://travis-ci.org/shinnn/parse-npm-version)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/parse-npm-version.svg)](https://coveralls.io/github/shinnn/parse-npm-version?branch=master)

Parse the installed [`npm` CLI](https://github.com/npm/npm) version with [`node-semver`](https://github.com/npm/node-semver)

```javascript
const parseNpmVersion = require('parse-npm-version');

(async () => {
  const result = await parseNpmVersion(); /* SemVer {
    raw: '5.0.3',
    major: 5,
    minor: 0,
    patch: 3,
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

The resultant promise will be fulfilled with a [`SemVer`](https://github.com/npm/node-semver/blob/v5.3.0/semver.js#L272) instance for the current [`npm --version`](https://docs.npmjs.com/misc/config#version).

```javascript
parseNpmVersion().then(result => {
  result.constructor.name; //=> 'SemVer'
  result.toString(); //=> '5.0.3'

  result.compare('5.0.2'); //=> 1
  result.compare('5.0.3'); //=> 0
  result.compare('5.0.4'); //=> -1
});
```

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed)
