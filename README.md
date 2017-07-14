# utf2char
> Decode \uXXXX to UTF-8 Character

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
```
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
