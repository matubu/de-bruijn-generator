const generator = require('../src'),
  codeLength = 6;

class CodePadlock  {
  constructor(codeLength) {
    this.codeLength = codeLength;
    this.code = new Array(codeLength).fill(0).map(v => Math.floor(Math.random() * 10)).join('');
    this.codeInput = '';
    console.log(this.code);
  }
  test(digit) {
    this.codeInput += digit;
    let overflow = this.codeInput.length - this.codeLength;
    if (overflow > 0) this.codeInput = this.codeInput.slice(overflow);
    return this.code == this.codeInput;
  }
}

let gen = generator.deBruijn(10, codeLength),
  codePadlock = new CodePadlock(codeLength);

console.time('Took')
let v = gen.next().value;
while (v != undefined) {
  v = gen.next().value;
  if (codePadlock.test(v)) break;
}
console.log('The code is ' + codePadlock.codeInput);
console.timeEnd('Took')