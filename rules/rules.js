/**
 * wrapper for rules
 * @author sarkiroka on 2017.02.17.
 */
var extend = require('extend');
var beauty = require('./beauty');
var complexity = require('./complexity');
var debugging = require('./debugging');
var git = require('./git');
var separator = require('./separator');
var spacing = require('./spacing');
var etc = require('./etc');

var rules = extend({}, beauty, complexity, debugging, git, separator, spacing, etc);
module.exports = rules;
