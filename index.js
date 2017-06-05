'use strict';

var loadSemver = require('load-semver');
var npmCliVersion = require('npm-cli-version');
var PinkiePromise = require('pinkie-promise');

module.exports = function parseNpmVersion() {
  return PinkiePromise.all([
    loadSemver(),
    npmCliVersion()
  ]).then(function(results) {
    var parse = results[0];
    var version = results[1];

    return parse(version, false);
  });
};
