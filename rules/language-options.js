import globals from 'globals';
export default {
	globals: {
		...globals.es2021,
		...globals.jasmine,
		...globals.jest,
		...globals.node
	}
};
