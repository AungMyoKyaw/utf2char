const fs = require('fs');
const chai = require('chai');
const should = chai.should();

const utf2char = require('../dist/utf2char');

describe('utf2char', () => {
  it('Return String Data', done => {
    let mystr = fs.readFileSync('test/sample.txt', 'utf8');
    let char = utf2char(mystr);
    char.should.be.a('string');
    char.should.be.equal('ကခဂဃငစဆဇဈဉတထဒဓနပဖဗဘမဠအ\n');
    done();
  });

  it('Create new File', done => {
    let mystr = fs.readFileSync('test/sample.txt', 'utf8');
    utf2char(mystr, 'test/sample.txt');
    let char = fs.readFileSync('test/sample.txt.new', 'utf8');
    char.should.be.equal('ကခဂဃငစဆဇဈဉတထဒဓနပဖဗဘမဠအ\n');
    done();
  });
});
