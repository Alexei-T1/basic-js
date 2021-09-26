import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(mem) {
  if(!Array.isArray(mem)) return false;
  mem = mem.filter((i) => {
    return (typeof i === "string");
  }).map(i => {
    i = i.trim();
    i = i[0].toUpperCase();
    return i;
  }).sort();
  return mem.join("");
}

// function createDreamTeam(mem) {
//   mem = mem.filter((i) => {
//     return (typeof i === "string");
//   }).map(i => {
//     i = i[0].toUpperCase();
//     return i;
//   });
//   return mem.join("");
// }