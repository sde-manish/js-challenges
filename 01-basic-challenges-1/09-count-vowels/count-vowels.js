function countVowels(inputStr) {
    // let vowelArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    
    let vw = /[aeiou]/i;
    let count = 0;
    for (let i = 0; i < inputStr.length; i++) {
        if (vw.test(inputStr[i]) ) {
            count++;
        }
        
    }
    return count
}

module.exports = countVowels;
