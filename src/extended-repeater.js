import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

export default function repeater(str, opt) {
  let rep = opt.repeatTimes;
  let sep = (opt.separator) ? opt.separator: "+";
  let repA = opt.additionRepeatTimes;
  if (opt.addition === false || opt.addition === null){
    opt.addition = "" + opt.addition;
  }
  let sepA = (opt.addition) ? opt.addition: "";
  let sepAa = (opt.additionSeparator) ? opt.additionSeparator: "|";
  let strR = "";
  for(let i = 1; i <= rep; i++) {

      strR += str + sepA;

    if(opt.additionRepeatTimes > 1){

      for(let i = 1; i < repA; i++) {
        strR += sepAa + sepA;
    } 

  }
  if(rep > i){
    strR += sep;
  }
}

  return (rep) ? strR: str + sepA;
}
