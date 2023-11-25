function countOccurrences(string, charCheck) {
    let count = 0;
    for(let i = 0; i <= string.length; i++){
        if (charCheck === string[i]) {
            count++;
        }
    }
    return count
}

module.exports = countOccurrences;
