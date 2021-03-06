'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  // Report CommonJS `require` calls and `module.exports` or `exports.*`
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
  'import/no-commonjs': 'error',

  // Report AMD `require` and `define` calls
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
  'import/no-amd': 'error',

  // No Node.js builtin modules
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
  'import/no-nodejs-modules': 'off'
};