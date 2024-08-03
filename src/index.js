const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0'
};

function decode(expr) {
  const result = [];
  while (expr.length > 0) {
      let str = expr.slice(0, 10);
      let letter = '';
      let sign = '';
      for (let i = 0; i < str.length; i++) {
          sign += str[i];
          if (sign === '10') {
              letter += '.'; 
              sign = '';
              continue;
          } else if (sign === '11') {
              letter += '-';
              sign = '';
              continue;
          } else if (sign === '00') {
              sign = '';
              continue;
          }
      }
      expr = expr.slice(10);
      result.push(letter);
  }

  return result.reduce((before, key) => {
      return before += key === '' ? ' ' : MORSE_TABLE[key];
  }, '')
}


module.exports = {
decode
};
