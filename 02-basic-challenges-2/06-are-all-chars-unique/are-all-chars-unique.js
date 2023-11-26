function areAllCharactersUnique(str) {
    const uniqueCharacters = new Set(str.split(""));

    if (str.length !== uniqueCharacters.size) {
        return false
    }
     return true


//  Another solution
//      const charSet = new Set();

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (charSet.has(char)) {
//       return false;
//     }
//     charSet.add(char);
//   }

//   return true;
}

module.exports = areAllCharactersUnique;