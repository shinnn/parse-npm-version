'use strict';

const importPackage = require('import-package');
const npmCliVersion = require('npm-cli-version');

importPackage.preload('semver');

module.exports = async function parseNpmVersion(...args) {
	const argLen = args.length;

	if (argLen !== 0) {
		throw new RangeError(`Expected no arguments, but got ${argLen} argumrnts.`);
	}

	const [parse, version] = await Promise.all([
		importPackage('semver'),
		npmCliVersion()
	]);

	return parse(version, false);
};
