import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

export default function countCats(m) {
  let cats = 0;
  m.forEach(element => {

    let n = element.reduce((count, next) => {
      if (next == "^^") {
        count++;
        return count;
      }
      else {
        return count + 0;
      }
    }, 0);
    cats += n;
  });
  return cats;
}

