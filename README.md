# De Bruijn sequence js generator
A javascript implementation of the [de Bruijn sequence](https://en.wikipedia.org/wiki/De_Bruijn_sequence) algorithm

# Exemple :

``` js
const { deBruijn } = require('de-bruijn-js-generator');

let generator = deBruijn(10, 8); // create a generator for a 8 digits code in base 10
// if the third argument is true you will get the entire code every time
let value = generator.next().value;

while (value != undefined) {
  value = generator.next().value;
  // here value contain only the new digit
  console.log(value);
}
```

# Methods

The only method provided is call `deBruijn` it take three arguments :
  1. `k` is the alphabet (as an array) or the max digit (excluded)
  2. `n` is the length of the code
  3. `s` is optional (false by default), if true the entire code will be returned at every iterations

# Install :

```
npm install de-bruijn-js-generator
```
