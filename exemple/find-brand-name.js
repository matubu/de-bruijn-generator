//the proper way of finding your brand name :
const { deBruijn } = require('../src'),
  alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

let generator = deBruijn(alphabet, 3, true);

function soundGood() {
  return Math.random() > .999//really efficient
}

let word = generator.next().value;
while (word != undefined) {
  word = word.join('');
  if (soundGood(word)) {
    console.log('Your new brand name should be :', word);
    break;
  }
  word = generator.next().value;
}