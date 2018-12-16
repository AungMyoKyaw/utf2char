# utf2char

> Decode \uXXXX to UTF-8 Character

[![Build Status][travis]][travis-url]
[![code style: prettier][prettier]][prettier-url]
[![npm][npm-download]][npm-dl-url]
[![contributions welcome][contri]][contri-url]
[![License: MIT][license]][license-url]

===

It decode

```shell
\u1000\u1001\u1002\u1003\u1004\u1005\u1006\u1007\u1008\u1009\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u1020\u1021
```

to

```shell
ကခဂဃငစဆဇဈဉတထဒဓနပဖဗဘမဠအ
```

## Installation

```shell
npm install --save utf2char
```

## Usage

### Programmitically

```javascript
const utf2char = require('utf2char');

let mystr =
  '\u1000\u1001\u1002\u1003\u1004\u1005\u1006\u1007\u1008\u1009\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u1020\u1021';

let decodedStr = utf2char(mystr);
console.log(decodedStr); //ကခဂဃငစဆဇဈဉတထဒဓနပဖဗဘမဠအ
```

### CLI

You need to install globally to use CLI feature.

```shell
npm install -g utf2char
```

```shell
utf2char filepath //generate filepath.new which contain decoded \uXXXX
```

You can use with overwrite feature.

```shell
utf2char filepath -o //overwirte with decoded \uXXXX
```

## License

MIT © [Aung Myo Kyaw](https://github.com/AungMyoKyaw)

[contri]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square
[contri-url]: https://github.com/AungMyoKyaw/utf2char/issues
[travis]: https://img.shields.io/travis/AungMyoKyaw/utf2char/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/AungMyoKyaw/utf2char
[npm-download]: https://img.shields.io/npm/dt/utf2char.svg?style=flat-square
[npm-dl-url]: https://www.npmjs.com/package/utf2char
[license]: https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square
[license-url]: https://opensource.org/licenses/MIT
[prettier]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://github.com/prettier/prettier
