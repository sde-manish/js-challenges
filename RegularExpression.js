/*
 Regular Expression:
 =>     */
const str = "India is a great country"    //string example
const pattern =  new RegExp("great")    //pattern to be found


console.log(pattern.test(str))      //returns true or false
console.log(pattern.exec(str))      // returns array, conatining the pattern and starting index

console.log(str.match(pattern))