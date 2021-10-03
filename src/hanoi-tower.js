import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disks, turns) {
  const hanoiObj = { turns: 0, seconds: 0, };
  const minTurns = 2**disks - 1;
  const miSeconds = Math.floor(minTurns * (1/(turns/60/60)));
  hanoiObj.turns = minTurns;
  hanoiObj.seconds = miSeconds;

  return hanoiObj;
}
