#!/usr/bin/env node

const fs = require('fs');
const filePath = process.argv[2];
const overWrite = process.argv[3] === '-o';

const toStr = (mystr, filePath) => {
  let utfList = mystr.match(/\\u.{4}/gm) || [];
  utfList.forEach(word => {
    let codePoint = parseInt(word.slice(-4), 16);
    let wordRegex = new RegExp(`\\${word}`, 'gm');
    mystr = mystr.replace(wordRegex, String.fromCodePoint(codePoint));
  });
  if (filePath) {
    overWrite && fs.writeFileSync(`${filePath}`, mystr);
    !overWrite && fs.writeFileSync(`${filePath}.new`, mystr);
    console.log('Successfully Decoded :-)');
  } else {
    return mystr;
  }
};

if (filePath && fs.existsSync(filePath)) {
  let isDir;
  try {
    isDir = fs.lstatSync(filePath).isDirectory();
  } catch (err) {
    isDir = null;
  }
  let mystr = !isDir ? fs.readFileSync(filePath, 'utf8') : '';
  !isDir && toStr(mystr, filePath);
} else {
  console.log('Pls provide file path :-)');
}

module.exports = toStr;
