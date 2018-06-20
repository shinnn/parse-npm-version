'use strict';

const parseNpmVersion = require('.');
const test = require('tape');

test('parseNpmVersion()', async t => {
	const result = await parseNpmVersion();

	t.equal(result.toString(), result.raw, 'should get a SemVer object.');
	t.equal(result.loose, false, 'should parse npm version in non-loose mode.');
	t.equal(typeof result.major, 'number', 'should get major version.');
	t.equal(typeof result.minor, 'number', 'should get minor version.');
	t.equal(typeof result.patch, 'number', 'should get patch version.');
	t.ok(Array.isArray(result.prerelease), 'should get pre-release metadata.');
	t.equal(result.compare('1.0.0'), 1, 'should have SemVer instance methods.');

	t.end();
});
