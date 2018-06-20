'use strict';

const loadSemver = require('load-semver');
const npmCliVersion = require('npm-cli-version');

module.exports = async function parseNpmVersion() {
  const [parse, version] = await Promise.all([
    loadSemver(),
    npmCliVersion()
  ]);

  return parse(version, false);
};
