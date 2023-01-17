const MORSE_TABLE = { 
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let oneLetterStr = '';
  let oneSymbolMorse = '';
  let indexMorse = '';
  let result = '';

  for (let i = 0; i < expr.length; i = i + 10) {
    oneLetterStr = expr.slice(i, i + 10);

    if (oneLetterStr === '**********') {
      result += ' ';
      continue;
    }

    for (let n = 0; n < oneLetterStr.length; n = n + 2) {
      oneSymbolMorse = oneLetterStr.slice(n, n + 2);

      if (oneSymbolMorse === '00') {
        continue;
      } 
      if (oneSymbolMorse === '10') {
        indexMorse += '.';
      }   
      if (oneSymbolMorse === '11') {
        indexMorse += '-';
      }      
    }

    result += MORSE_TABLE[indexMorse];
    indexMorse = '';    
  }

  return result;
}

module.exports = {
    decode
}