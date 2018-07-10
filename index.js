'use strict';

const loadSemver = require('load-semver');
const npmCliVersion = require('npm-cli-version');

module.exports = async function parseNpmVersion(...args) {
	const argLen = args.length;

	if (argLen !== 0) {
		throw new RangeError(`Expected no arguments, but got ${argLen} argumrnts.`);
	}

	const [parse, version] = await Promise.all([
		loadSemver(),
		npmCliVersion()
	]);

	return parse(version, false);
};
