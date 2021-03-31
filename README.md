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

# Install :

```
npm install de-bruijn-js-generator
```
