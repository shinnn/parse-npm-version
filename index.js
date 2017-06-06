'use strict';

const loadSemver = require('load-semver');
const npmCliVersion = require('npm-cli-version');

function parseVersion(arr) {
  const parse = arr[0];
  const version = arr[1];

  return parse(version, false);
}

module.exports = function parseNpmVersion() {
  return Promise.all([
    loadSemver(),
    npmCliVersion()
  ]).then(parseVersion);
};
