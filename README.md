# utf2char
> Decode \uXXXX to UTF-8 Character

[![Build Status][build-status]][build-url]
[![npm][npm-download]][npm-dl-url]
[![NSP Status][nsp-image]][nsp-url]
[![contributions welcome][contri-img]][contri-url]
===

It decode
```
\u1000\u1001\u1002\u1003\u1004\u1005\u1006\u1007\u1008\u1009\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u1020\u1021
```
to `ကခဂဃငစဆဇဈဉတထဒဓနပဖဗဘမဠအ`.

## Installation
```
npm install --save utf2char
```

## Usage
### Programmitically
```javascript
const utf2char = require('utf2char');

let mystr = '\u1000\u1001\u1002\u1003\u1004\u1005\u1006\u1007\u1008\u1009\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u1020\u1021';

let decodedStr = utf2char(mystr);
console.log(decodedStr);//ကခဂဃငစဆဇဈဉတထဒဓနပဖဗဘမဠအ
```

### CLI
You need to install globally to use CLI feature.
```
npm install -g utf2char
```

```
utf2char filepath //generate filepath.new which contain decoded \uXXXX
```

You can use with overwrite feature.
```
utf2char filepath -o //overwirte with decoded \uXXXX
```

## License
[MIT](./LICENSE)

[build-status]: https://travis-ci.org/AungMyoKyaw/utf2char.svg?branch=master
[build-url]: https://travis-ci.org/AungMyoKyaw/utf2char
[npm-download]: https://img.shields.io/npm/dt/utf2char.svg
[npm-dl-url]: https://www.npmjs.com/package/utf2char
[nsp-image]: https://nodesecurity.io/orgs/aung-myo-kyaw/projects/4887eed3-97d1-45ef-bef8-ccbe3417be1f/badge
[nsp-url]: https://nodesecurity.io/orgs/aung-myo-kyaw/projects/4887eed3-97d1-45ef-bef8-ccbe3417be1f
[contri-img]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg
[contri-url]: https://github.com/AungMyoKyaw/utf2char/issues
