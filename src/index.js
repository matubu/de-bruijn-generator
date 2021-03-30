//https://en.wikipedia.org/wiki/De_Bruijn_sequence
//callback
/**
 *
 * @param {array|number} k - set or length of the set
 * @param {int} n - Combinations digits length
 * @returns {array} An array of the array combinations
 */
module.exports.generateCombinations = (k, n) => {
  console.time('generateCombinations')

  if (typeof k == 'number') k = [...Array(5).keys()].map(v => v.toString());
  let kl = k.length,
    res = k[kl - 1].repeat(n),
    a = new Array(kl * n).fill(0),
    sequence = new Array(kl ** n),
    pos = 0;

  (function db(t, p) {
    if (t > n) {
      if (n % p == 0) {
        for (let j = 1; j <= p; j++) {
          res = res.slice(1) + k[a[j]];
          sequence[pos++] = res;
        }
      }
    } else {
      a[t] = a[t - p];
      db(t + 1, p);
      for (let j = a[t - p] + 1; j < kl; j++) {
        a[t] = j;
        db(t + 1, t);
      }
    }
  })(1, 1);

  console.timeEnd('generateCombinations')
  return sequence
}
/**
 *
 * @param {array|number} k - set or length of the set
 * @param {int} n - Combinations digits length
 * @returns {array} The De Bruijn sequence as an array
 */
module.exports.deBruijn = (k, n) => {
  console.time('deBruijn')

  if (typeof k == 'number') k = [...Array(5).keys()].map(v => v.toString());
  let kl = k.length,
    a = new Array(kl * n).fill(0),
    sequence = new Array(kl ** n),
    pos = 0;

  (function db(t, p) {
    if (t > n) {
      if (n % p == 0) {
        for (let j = 1; j <= p; j++) sequence[pos++] = k[a[j]];
      }
    } else {
      a[t] = a[t - p];
      db(t + 1, p);
      for (let j = a[t - p] + 1; j < kl; j++) {
        a[t] = j;
        db(t + 1, t);
      }
    }
  })(1, 1);

  console.timeEnd('deBruijn')
  return sequence
}