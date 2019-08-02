const decipherThis = (cipher) =>{
//     // SECOND AND LAST LETTERS ARE SWITCHED
//     // THE FIRST LETTER IS REPLACED WITH ITS CHARACTER CODE
    const words = cipher.split(' ');
    
    const char_codesA = {"65": "A",    
                        "66": "B",     "67": "C",     "68": "D",     "69": "E",     "70": "F",    
                        "71": "G",     "72": "H",     "73": "I",     "74": "J",     "75": "K",    
                        "76": "L",     "77": "M",     "78": "N",     "79": "O",     "80": "P",    
                        "81": "Q",     "82": "R",     "83": "S",     "84": "T",     "85": "U",    
                        "86": "V",     "87": "W",     "88": "X",     "89": "Y",     "90": "Z",
                        "97": "a",     "98": "b",     "99": "c",     "100": "d",    "101": "e",
                        "102": "f",    "103": "g",    "104": "h",    "105": "i",    "106": "j",
                        "107": "k",    "108": "l",    "109": "m",    "110": "n",    "111": "o",
                        "112": "p",    "113": "q",    "114": "r",    "115": "s",    "116": "t",
                        "117": "u",    "118": "v",    "119": "w",    "120": "x",    "121": "y",
                        "122": "z"};
    const swapChar = (cipher) =>{
        const text = cipher.split('');
        [text[1] , text[cipher.length - 1]] = [text[text.length - 1],text[1]]
        return text.join('');
        };

    const newCipher = words.map(word =>{
        let charCode = String(word.match(/\d+/g).map(Number));
        return word.replace(charCode,char_codesA[charCode])});
    
    const result = newCipher.map(str =>{
        return swapChar(str)});
    return result.join(' ');
    };

    // console.log(decipherThis(text));

// =============================================================================
// Code from mikecode 
    // function decipherThis(str) {
    //     return str.split(' ').map(i => {
    //       const newStr = i.replace(/\d+/, i => String.fromCharCode(i));
    //       return newStr.length > 1 ? newStr.split('').map((item, index) => {
    //         if (index === 1) return newStr[newStr.length - 1];
    //          else if (index === newStr.length - 1) return newStr[1];
    //          else return item;
    //     }).join('') : newStr;
    //    }).join(' ');
    //   }

// =============================================================================

const cipher = '82yade 115te 103o'
const text = "My name is drae. I was born on October 14 1988. I'm in love with Caroline Nyadani Mckinney";

const cipherThis = (string) =>{
    return string.split(' ').map( i=>{
        const newStr = i.replace(i[0], i.charCodeAt(0));
        return newStr.length > 1 ? newStr.split('').map((item, index) =>{
            if (index === 1 ) return newStr[newStr.length - 1];
            else if (index === newStr.length - 1) return newStr[1];
            else return item;
        }).join('') : newStr;
    }).join(' ');
};

//===================================================================================


var num = [25,35,26,20,25,65]
var newNum = num.map(element =>{
    return `There are ${element / 5} fish in the sea`;
});
// console.log(newNum);

// console.log(decipherThis(cipher));
c
