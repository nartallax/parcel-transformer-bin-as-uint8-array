#!/usr/bin/env bash

set -e
cd `dirname "$0"`

rm -rf ./target 2> /dev/null
mkdir target
cp ./*.js target/
cp ./*.d.ts target/
cp package.json target/
cp README.md target/
cd target

touch .eslintrc.js # prevents error on next line if it wasn't copied
rm .eslintrc.js

npm publish --access public