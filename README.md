# Airbnb Flow - ESLint Shareable Config
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

[travis-image]: https://img.shields.io/travis/johnie/eslint-config-airbnb-flow/master.svg
[travis-url]: https://travis-ci.org/johnie/eslint-config-airbnb-flow
[npm-image]: https://img.shields.io/npm/v/eslint-config-airbnb-flow.svg
[npm-url]: https://npmjs.org/package/eslint-config-airbnb-flow
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-airbnb-flow.svg
[downloads-url]: https://npmjs.org/package/eslint-config-airbnb-flow

> An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for Flow support in [Airbnb JavaScript Style](https://github.com/airbnb/javascript)

## Install

```bash
npm install eslint-config-airbnb-flow
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about [Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

This Shareable Config adds Flow to the baseline Airbnb JavaScript Style rules provided in `eslint-config-airbnb`.

Here's how to install everything you need:

```bash
npm install eslint-config-airbnb eslint-config-airbnb-flow
```

Then, add this to your .eslintrc file:

```
{
  "extends": ["airbnb", "airbnb-flow"]
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your `.eslintrc` file.

## Learn more

For the full listing of rules, editor plugins, FAQs, and more, visit the main [Airbnb JavaScript Style repo](https://github.com/airbnb/javascript).

## License

MIT © [Johnie Hjelm](https://johnie.com)
