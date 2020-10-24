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
    let strExpr = expr;
    let answerDecode = [];

    for(i = (expr.length / 10); i > 0; i--) {
        let letterDecodeTen = strExpr.substr(0, 10);
        let letterDecode = [];

        strExpr = strExpr.substr(10, strExpr.length);

        for(ii = 5; ii > 0; ii--) {
            if(letterDecodeTen === '**********') {
                letterDecode.push(' ');
            } else if (letterDecodeTen.slice(0, 2) === '11') {
                letterDecode.push('-');
            } else if (letterDecodeTen.slice(0, 2) === '10') {
                letterDecode.push('.');
            }
            letterDecodeTen = letterDecodeTen.slice(2, letterDecodeTen.length);
        }; 
        if (letterDecode[0] === ' ') {
            answerDecode.push(' ');
        } else {
            answerDecode.push(MORSE_TABLE[letterDecode.join('')]);
        }
    }
    return answerDecode.join('');
}

module.exports = {
    decode
}
