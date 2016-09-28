# freeform-semantic-commit-analyzer
[![npm version](https://badge.fury.io/js/freeform-semantic-commit-analyzer.svg)](http://badge.fury.io/js/freeform-semantic-commit-analyzer)
[![Build Status](https://travis-ci.org/artemv/freeform-semantic-commit-analyzer.svg?branch=master)](https://travis-ci.org/artemv/freeform-semantic-commit-analyzer)
[![Coverage Status](https://coveralls.io/repos/artemv/freeform-semantic-commit-analyzer/badge.svg)](https://coveralls.io/r/artemv/freeform-semantic-commit-analyzer)
[![Dependency Status](https://david-dm.org/artemv/freeform-semantic-commit-analyzer.svg)](https://david-dm.org/artemv/freeform-semantic-commit-analyzer)
[![devDependency Status](https://david-dm.org/artemv/freeform-semantic-commit-analyzer/dev-status.svg)](https://david-dm.org/artemv/freeform-semantic-commit-analyzer#info=devDependencies)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

An analyzeCommits plugin for [semantic-release](https://github.com/semantic-release/semantic-release) covering most commit types.

## Major Releases

SEE: https://github.com/semantic-release/semantic-release#major-breaking-release

- Breaking Changes

## Minor Releases

- feat

SEE: https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#type

## Patch Releases

- chore
- docs
- fix
- perf
- refactor
- revert
- unstructured commits

## This fork
Changes list compared to https://github.com/semantic-release/commit-analyzer:
* unstructured commits yield in patch versions
* most other commit types yield in patch versions
* you can disable some version change types by specifying allowed version types in package.json like this:
```
  "publishConfig": {
    "tag": "1x"
  },
  "release": {
    "branch": "1x",
    "analyzeCommits": {
        "path": "./node_modules/freeform-semantic-commit-analyzer/dist/index.js",
        "allowed": ["patch", "minor"],
        "fallback": "minor"
    }
  }
```
Here, only 'patch' and 'minor' version changes are allowed - this is a package for legacy 1.x branch and we don't want
it to jump out of 1.x versions range ocasionally. Default fallback version type is 'patch'.
