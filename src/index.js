//https://en.wikipedia.org/wiki/De_Bruijn_sequence
/**
 *
 * @param {array|number} k - set or length of the set
 * @param {int} n - Combinations digits length
 * @param {bool=false} sequence - If true you will get the entire combination else only the new digit
 */

module.exports.deBruijn = function* (k, n, sequence) {
  let ktype = typeof k != 'number',
    kl = ktype ? k.length : k,
    a = new Array(kl * n).fill(0);

  sequence = sequence ? new Array(n).fill(ktype ? k[kl - 1] : kl - 1) : null;

  yield* (function* step(t, p) {
    if (t > n) {
      if (n % p == 0) {
        for (let j = 1; j <= p; j++) {
          let v = ktype ? k[a[j]] : a[j];
          if (sequence) {
            sequence.shift()
            sequence.push(v)
          }
          yield sequence ?? v
        }
      }
    } else {
      a[t] = a[t - p];
      yield* step(t + 1, p);
      for (let j = a[t - p] + 1; j < kl; j++) {
        a[t] = j;
        yield* step(t + 1, t);
      }
    }
  })(1, 1)
}