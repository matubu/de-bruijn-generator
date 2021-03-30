const generator = require('../'),
  alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

console.log(generator.generateCombinations(5, 5));
console.log(generator.deBruijn(10, 5));
console.log(generator.generateCombinations(alphabet, 5));
console.log(generator.deBruijn(alphabet, 5));