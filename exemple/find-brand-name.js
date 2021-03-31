//the proper way of finding your brand name :
const generator = require('../src'),
  alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

let gen = generator.deBruijn(alphabet, 3, true);

function soundGood() {
  return Math.random() > .999//really efficient
}

let word = gen.next().value;
while (word != undefined) {
  word = word.join('');
  if (soundGood(word)) {
    console.log('Your new brand name should be :', word);
    break;
  }
  word = gen.next().value;
}