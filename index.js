/**
 * eslint config server set
 * apply to your nodejs application server side code
 * @author sarkiroka on 2017.02.17.
 */
var envrionment = require('./rules/envrionment');
var rules = require('./rules/rules');

module.exports = {
	env: envrionment,
	rules: rules
};
