function findMaxNumber(array) {
    let max = array[0];
    for (let index = 0; index < array.length; index++) {
        if (array[index] > max) {
            max = array[index]
        }
        
    }
    return max
}

module.exports = findMaxNumber;
