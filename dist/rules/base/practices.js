'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint quote-props: 'off' */

const MAX_COMPLEXITY_LEVEL = 10;

exports.default = {

  // Enforces getter/setter pairs in objects
  // http://eslint.org/docs/rules/accessor-pairs
  'accessor-pairs': ['off', {
    setWithoutGet: true,
    getWithoutSet: false
  }],

  // Enforces `return` statements in callbacks of array’s methods
  // http://eslint.org/docs/rules/array-callback-return
  'array-callback-return': 'error',

  // Treat var as Block Scoped
  // http://eslint.org/docs/rules/block-scoped-var
  'block-scoped-var': 'error',

  // Limit Cyclomatic Complexity
  // http://eslint.org/docs/rules/complexity
  'complexity': ['warn', MAX_COMPLEXITY_LEVEL],

  // require `return` statements to either always or never specify values
  // http://eslint.org/docs/rules/consistent-return
  // TODO Check this 'error' or 'warn'
  'consistent-return': ['error', { treatUndefinedAsUnspecified: false }],

  // Require Following Curly Brace Conventions
  // http://eslint.org/docs/rules/curly
  'curly': ['error', 'multi-line', 'consistent'],

  // Require `default` Case in `switch` Statements
  // http://eslint.org/docs/rules/default-case
  'default-case': ['error', { commentPattern: '^no\\sdefault$' }],

  // Enforce newline before and after dot
  // http://eslint.org/docs/rules/dot-location
  'dot-location': ['error', 'property'],

  // Require Dot Notation
  // http://eslint.org/docs/rules/dot-notation
  'dot-notation': ['error', { allowKeywords: false }],

  // Require `===` and `!==`
  // Use '===' only with 'true', 'false', '0', '""' or '[]' values
  // http://eslint.org/docs/rules/eqeqeq
  'eqeqeq': 'off',

  // Require Guarding `for-in`
  // http://eslint.org/docs/rules/guard-for-in
  'guard-for-in': 'off',

  // Disallow Use of `alert`, `confirm`, and `prompt`
  // http://eslint.org/docs/rules/no-alert
  'no-alert': 'warn',

  // Disallow Use of `arguments.caller` or `arguments.callee`
  // http://eslint.org/docs/rules/no-caller
  'no-caller': 'error',

  // Disallow lexical declarations in `case`/`default` clauses
  // http://eslint.org/docs/rules/no-case-declarations
  'no-case-declarations': 'error',

  // Disallow Regexs That Look Like Division
  // http://eslint.org/docs/rules/no-div-regex
  'no-div-regex': 'error',

  // Disallow `return` before `else`
  // http://eslint.org/docs/rules/no-else-return
  'no-else-return': 'error',

  // Disallow empty functions
  // http://eslint.org/docs/rules/no-empty-function
  'no-empty-function': ['error', { allow: [] }],

  // Disallow empty destructuring patterns
  // http://eslint.org/docs/rules/no-empty-pattern
  'no-empty-pattern': 'error',

  // Disallow Null Comparisons
  // http://eslint.org/docs/rules/no-eq-null
  'no-eq-null': 'error',

  // Disallow `eval()`
  // http://eslint.org/docs/rules/no-eval
  'no-eval': ['error', { allowIndirect: false }],

  // Disallow Extending of Native Objects
  // http://eslint.org/docs/rules/no-extend-native
  'no-extend-native': ['error', { exceptions: [] }],

  // Disallow unnecessary function binding
  // http://eslint.org/docs/rules/no-extra-bind
  'no-extra-bind': 'error',

  // Disallow Unnecessary Labels
  // http://eslint.org/docs/rules/no-extra-label
  'no-extra-label': 'error',

  // Disallow `case` Statement Fallthrough
  // http://eslint.org/docs/rules/no-fallthrough
  'no-fallthrough': ['error', { commentPattern: 'break\\somitted' }],

  // Disallow Floating Decimals
  // http://eslint.org/docs/rules/no-floating-decimal
  'no-floating-decimal': 'error',

  // Disallow the type conversion with shorter notations
  // http://eslint.org/docs/rules/no-implicit-coercion
  'no-implicit-coercion': ['warn', { allow: ['~', '!!'] }],

  // Disallow `var` and Named Functions in Global Scope
  // http://eslint.org/docs/rules/no-implicit-globals
  'no-implicit-globals': 'error',

  // Disallow Implied `eval()`
  // http://eslint.org/docs/rules/no-implied-eval
  'no-implied-eval': 'error',

  // Disallow `this` keywords outside of classes or class-like objects
  // http://eslint.org/docs/rules/no-invalid-this
  // TODO Temporary disabled by this issue https://github.com/babel/eslint-plugin-babel/issues/12
  'no-invalid-this': 'off',

  // Disallow the use of the `__iterator__` property
  // http://eslint.org/docs/rules/no-iterator
  'no-iterator': 'error',

  // Disallow Labeled Statements
  // http://eslint.org/docs/rules/no-labels
  'no-labels': ['error', {
    allowLoop: false,
    allowSwitch: false
  }],

  // Disallow Unnecessary Nested Blocks
  // http://eslint.org/docs/rules/no-lone-blocks
  'no-lone-blocks': 'error',

  // Disallow Functions in Loops
  // http://eslint.org/docs/rules/no-loop-func
  'no-loop-func': 'error',

  // Disallow Magic Numbers
  // http://eslint.org/docs/rules/no-magic-numbers
  // TODO Check this need or not
  'no-magic-numbers': ['warn', {
    ignore: [1],
    ignoreArrayIndexes: true,
    enforceConst: true,
    detectObjects: true
  }],

  // Disallow multiple spaces
  // http://eslint.org/docs/rules/no-multi-spaces
  'no-multi-spaces': ['error', { exceptions: { Property: false } }],

  // Disallow Multiline Strings
  // http://eslint.org/docs/rules/no-multi-str
  'no-multi-str': 'error',

  // Disallow Reassignment of Native Objects
  // http://eslint.org/docs/rules/no-native-reassign
  'no-native-reassign': ['error', { exceptions: [] }],

  // Disallow `new` For Side Effects
  // http://eslint.org/docs/rules/no-new
  'no-new': 'error',

  // Disallow Function Constructor
  // http://eslint.org/docs/rules/no-new-func
  'no-new-func': 'error',

  // Disallow Primitive Wrapper Instances
  // http://eslint.org/docs/rules/no-new-wrappers
  'no-new-wrappers': 'error',

  // disallow octal literals
  // http://eslint.org/docs/rules/no-octal
  'no-octal': 'error',

  // disallow octal escape sequences in string literals
  // http://eslint.org/docs/rules/no-octal-escape
  'no-octal-escape': 'error',

  // Disallow Reassignment of Function Parameters
  // http://eslint.org/docs/rules/no-param-reassign
  // TODO Check how difficult to refactor
  'no-param-reassign': ['error', { props: true }],

  // Disallow Use of `__proto__`
  // http://eslint.org/docs/rules/no-proto
  'no-proto': 'error',

  // Disallow Redeclaring Variables
  // http://eslint.org/docs/rules/no-redeclare
  'no-redeclare': ['error', { builtinGlobals: true }],

  // Disallow Assignment in `return` Statement
  // http://eslint.org/docs/rules/no-return-assign
  'no-return-assign': ['error', 'always'],

  // Disallow Script URLs
  // http://eslint.org/docs/rules/no-script-url
  'no-script-url': 'error',

  // Disallow Self Assignment
  // http://eslint.org/docs/rules/no-self-assign
  'no-self-assign': 'error',

  // Disallow Self Compare
  // http://eslint.org/docs/rules/no-self-compare
  'no-self-compare': 'error',

  // Disallow Use of the Comma Operator
  // http://eslint.org/docs/rules/no-sequences
  'no-sequences': 'error',

  // Restrict what can be thrown as an exception
  // http://eslint.org/docs/rules/no-throw-literal
  'no-throw-literal': 'error',

  // Disallow unmodified conditions of loops
  // http://eslint.org/docs/rules/no-unmodified-loop-condition
  'no-unmodified-loop-condition': 'error',

  // Disallow Unused Expressions
  // http://eslint.org/docs/rules/no-unused-expressions
  'no-unused-expressions': ['error', {
    allowShortCircuit: false,
    allowTernary: false
  }],

  // Disallow Unused Labels
  // http://eslint.org/docs/rules/no-unused-labels
  'no-unused-labels': 'error',

  // Disallow unnecessary `.call()` and `.apply()`
  // http://eslint.org/docs/rules/no-useless-call
  'no-useless-call': 'error',

  // Disallow unnecessary concatenation of strings
  // http://eslint.org/docs/rules/no-useless-concat
  'no-useless-concat': 'error',

  // Disallow unnecessary escape usage
  // http://eslint.org/docs/rules/no-useless-escape
  'no-useless-escape': 'error',

  // Disallow use of the `void` operator
  // http://eslint.org/docs/rules/no-void
  'no-void': 'error',

  // Disallow Warning Comments
  // http://eslint.org/docs/rules/no-warning-comments
  'no-warning-comments': ['warn', {
    terms: ['TODO', 'FIXME'],
    location: 'start'
  }],

  // disallow `with` statements
  // http://eslint.org/docs/rules/no-with
  'no-with': 'error',

  // Require Radix Parameter
  // http://eslint.org/docs/rules/radix
  'radix': ['error', 'as-needed'],

  // Require Variable Declarations to be at the top of their scope
  // http://eslint.org/docs/rules/vars-on-top
  'vars-on-top': 'error',

  // Require IIFEs to be Wrapped
  // http://eslint.org/docs/rules/wrap-iife
  'wrap-iife': ['error', 'outside'],

  // Require or disallow Yoda Conditions
  // http://eslint.org/docs/rules/yoda
  'yoda': ['error', 'never', { exceptRange: true }]
};