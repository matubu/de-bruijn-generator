//the proper way of finding your brand name :
const { deBruijn } = require('../src'),
  alphabet = [...'abcdefghijklmnopqrstuvwxyz'],
  brandNameLength = 3;

let generator = deBruijn(alphabet, brandNameLength, true);

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