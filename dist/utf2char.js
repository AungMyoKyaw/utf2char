#!/usr/bin/env node
'use strict';

var fs = require('fs');
var filePath = process.argv[2];
var overWrite = process.argv[3] === '-o';

var toStr = function toStr(mystr, filePath) {
	var utfList = mystr.match(/\\u.{4}/gm) || [];
	utfList.forEach(function (word) {
		var codePoint = parseInt(word.slice(-4), 16);
		var wordRegex = new RegExp('\\' + word, 'gm');
		mystr = mystr.replace(wordRegex, String.fromCodePoint(codePoint));
	});
	if (filePath) {
		overWrite && fs.writeFileSync('' + filePath, mystr);
		!overWrite && fs.writeFileSync(filePath + '.new', mystr);
		console.log('Successfully Decoded :-)');
	} else {
		return mystr;
	}
};

if (filePath && fs.existsSync(filePath)) {
	var isDir = void 0;
	try {
		isDir = fs.lstatSync(filePath).isDirectory();
	} catch (err) {
		isDir = null;
	}
	var mystr = !isDir ? fs.readFileSync(filePath, 'utf8') : '';
	!isDir && toStr(mystr, filePath);
} else {
	console.log("Pls provide file path :-)");
}

module.exports = toStr;