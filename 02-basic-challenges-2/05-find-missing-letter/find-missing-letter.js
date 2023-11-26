function findMissingLetter(arr) {
    if (arr.length === 0) {
        let str = "";
        return str;
    }  else {
        let expectedCharcode = arr[0].charCodeAt(0);
        for (let i = 0; i <  arr.length; i++) {
            if (arr[i].charCodeAt(0) !== expectedCharcode) {
                var missingLetter = String.fromCharCode(expectedCharcode);
                return missingLetter;
                break
            }
            expectedCharcode++;
        }
    }
}


// Another solution 

// function findMissingLetter(arr) {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const startIndex = alphabet.indexOf(arr[0]);
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] !== alphabet[startIndex + i]) {
//         return alphabet[startIndex + i];
//       }
//     }
  
//     return '';
//   }

module.exports = findMissingLetter;
