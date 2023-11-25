function removeDuplicates(inputArr) {
    // first method(never start iteration from begining, always start from the end.)
    // for (let i = inputArr.length - 1; i >= 0; i--) {
    //     for (let j = i - 1; j >= 0; j--) {
    //         if (inputArr[i] === inputArr[j]) {
    //             inputArr.splice(i, 1);
    //             break; 
    //         }
    //     }
    // }
    // return inputArr;
    // (This solution is also not efficient.)

    // Second method(this is good.)
    // let uniqeArr = [];
    // for (let i = 0; i < inputArr.length; i++) {
    //     if (!uniqeArr.includes(inputArr[i])) {
    //         uniqeArr.push(inputArr[i])
    //     }
        
    // }
    // return uniqeArr

    // Third method, most efficient method using "Set" object which only stores distinct value.
    return Array.from(new Set(inputArr));
    
    
}


module.exports = removeDuplicates;
