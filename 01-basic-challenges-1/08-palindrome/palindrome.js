function isPalindrome(inputStr) {
//     let revStr =  inputStr.split("").reverse().join("");
//     if (inputStr === revStr) {
//          return true
//     } else {
//      return false
//     }
//     This solution fails when string contains alter-case or special character


// Second solution
const formatedStr = inputStr.toLowerCase().replace(/[^a-z0-9]/g, "");
const revStr = formatedStr.split("").reverse().join("");

return formatedStr === revStr
     
 }
 
 module.exports = isPalindrome;
 