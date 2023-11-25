function isPalindrome(inputStr) {
    let revStr =  inputStr.split("").reverse().join("");
    if (inputStr === revStr) {
         return true
    } else {
     return false
    }
     
 }
 
 module.exports = isPalindrome;
 