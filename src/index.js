//https://en.wikipedia.org/wiki/De_Bruijn_sequence
function step(t, p, a, n, kl, callback) {
  if (t > n) {
    if (n % p == 0) {
      for (let j = 1; j <= p; j++) {
        callback(a[j]);
      }
    }
  } else {
    a[t] = a[t - p];
    step(t + 1, p, a, n, kl, callback);
    for (let j = a[t - p] + 1; j < kl; j++) {
      a[t] = j;
      step(t + 1, t, a, n, kl, callback);
    }
  }
}
/**
 *
 * @param {array|number} k - set or length of the set
 * @param {int} n - Combinations digits length
 * @returns {array} An array of the array combinations
 */
module.exports.generateCombinations = (k, n) => {
  console.time('generateCombinations')

  let ka = (typeof k == 'number') ? [...Array(k).keys()].map(v => v.toString()) : k,
    kl = ka.length,
    res = ka[kl - 1].repeat(n),
    a = new Array(kl * n).fill(0),
    sequence = new Array(kl ** n),
    pos = 0;

  step(1, 1, a, n, kl, (typeof k == 'number') ? v => {
    res = res.slice(1) + v;
    sequence[pos++] = res
  } : v => {
    res = res.slice(1) + ka[v];
    sequence[pos++] = res
  })

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

  let ka = (typeof k == 'number') ? [...Array(k).keys()].map(v => v.toString()) : k,
    kl = ka.length,
    a = new Array(kl * n).fill(0),
    sequence = new Array(kl ** n),
    pos = 0;

  step(1, 1, a, n, kl, (typeof k == 'number') ? v => sequence[pos++] = v : v => sequence[pos++] = ka[v]);

  console.timeEnd('deBruijn')
  return sequence
}