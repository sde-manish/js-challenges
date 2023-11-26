function findFirstNonRepeatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        const matched = [];
        for (let j = 0; j < str.length; j++) {
            if ( i!== j && str[i] === str[j] ) {
             matched.push(str[j])
            }
        }
        if (matched.length === 0) {
            let firstUnique = str[i]
            return firstUnique
        }
    }
    return null
}

module.exports = findFirstNonRepeatingCharacter;
