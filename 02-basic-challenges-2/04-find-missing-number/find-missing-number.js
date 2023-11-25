function findMissingNumber(arr) {
    
    // First method
    // if (!arr) {
    //     return undefined
    // } else if (arr.length === 0) {
    //     return 1
    // } 
    // const sortedArr = arr.sort((a, b) => a - b);
    // for (let i = 0; i < sortedArr.length; i++) {
    //     if (i + 1 !== sortedArr[i]) {
    //         return i + 1;
    //     }
    // }

    // Second Method
    if (!arr) {
       return undefined
    } else if (arr.length === 0) {
        return 1
    }

   
    let trueLen = arr.length + 1;
    let trueSum = (trueLen*(trueLen + 1))/2
    let intialV = 0
    let arrSum = arr.reduce((acc, currV) => acc + currV, intialV);


    let missingNum = trueSum - arrSum;
    return missingNum
}

module.exports = findMissingNumber;
