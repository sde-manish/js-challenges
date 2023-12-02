function validAnagrams(str1, str2) {
    const str1SortedStr = str1.split("").sort().join("")
    const str2SortedStr = str2.split("").sort().join("")
    console.log(str1SortedStr, str2SortedStr);

    if (str1SortedStr === str2SortedStr) {
        return true
    }

    return false
    
}

module.exports = validAnagrams;
