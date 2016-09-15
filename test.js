import test from 'ava';
import {CLIEngine} from 'eslint';
import config from './';

const isObject = obj => typeof obj === 'object' && obj !== null;
const isString = value => typeof value === 'string';

const code = `
const CONVERSION_TABLE = {
  m: {
    km: m => m / 1000,
    mi: m => m * 0.000621371,
  },
};

function convertUnit(from: string, to: string, value: number): number {
  const transform = CONVERSION_TABLE[from][to];

  return transform(value);
}

convertUnit('m', 'km', 1000);
`;

test('test basic properties of config', t => {
	t.is(isString(config.parser), true);
	t.is(isObject(config.rules), true);
	t.is(Array.isArray(config.plugins), true);
});

test('load config in eslint to validate all rule syntax is correct', t => {
	const cli = new CLIEngine({
		useEslintrc: false,
		configFile: 'eslintrc.json'
	});

	t.is(cli.executeOnText(code).errorCount === 0, true);
});
