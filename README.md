# De Bruijn sequence javascript generator
📦 a javascript implementation of the [de Bruijn sequence](https://en.wikipedia.org/wiki/De_Bruijn_sequence) algorithm

## Exemple :

``` js
const { deBruijn } = require('de-bruijn-generator');

let generator = deBruijn(10, 8), value; // create a generator for a 8 digits code in base 10
// if the third argument is true you will get the entire code every time

while (value = generator.next().value) // here value contain only the new digit
  console.log(value);
```

## Methods

The only method provided is call `deBruijn` it take three arguments :
  - `k` is the alphabet (as an array) or the max digit (excluded)
  - `n` is the length of the code
  - `s` is optional (false by default), if true the entire code will be returned at every iterations

## Install :

With [npm](https://www.npmjs.com/package/de-bruijn-generator)
```
npm install de-bruijn-generator
```

On browser
``` html
<script src="https://unpkg.com/de-bruijn-generator/src/index.js"></script>
```
``` js
let generator = deBruijnGenerator.deBruijn(10, 8);
generator.next().value;
```
