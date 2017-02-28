# eslint-config-server-shiwaforce

## Main concept, the idea behind the things below

![code quality transformation](./quality-transformation.png "Code quality transformation")

We want to work with beautiful, nicely formatted code, so with the help of eslint we aim to enforce it - as much as we can. In an ideal world everybody would write such high quality code. Until we reach this state to standardise code formatting the eslint plugin can be a great help.

## Installation

```
npm install eslint eslint-config-server-shiwaforce --save-dev
```

## Usage

If you've installed eslint-config-server-shiwaforce locally within your project create the .eslintrc file at the root of your node project.
You can create this file (.eslintrc) at a different location but in this case you need to reference it manually. (see details on the [eslint page](http://eslint.org/docs/user-guide/command-line-interface))

```json
{
	"extends": "eslint-config-server-shiwaforce"
}

```
Run the linter by executing the command below:

```
./node_modules/.bin/eslint server/**/*.js
```

In case of a global installation the start the linter with...

```
eslint server/**/*.js
```

If running eslint gives a message indicating that running `eslint --init` is necessary then you created the .eslintrc file in the wrong place.

This command does NOT walk the entire dependency tree based on `require`-s or `import`-s, it only walks the file or files listed here. Of course, wild card characters can be used. For more information please visit the dedicated page at eslint ([cli docs](http://eslint.org/docs/user-guide/command-line-interface))

## Extending/Overriding the config

Add the `"rules"` key to your config then add your additional/override rules. For example, if you want to change the `"indent"` and `"eol-last"` rules from default to your own add this:

```json
{
	"extends": "eslint-config-server-shiwaforce",
	"rules": {
		"indent": [2, "space"],
		"eol-last":[0]
	}
}
```

## Additional information about rules
[Eslint](http://eslint.org)
