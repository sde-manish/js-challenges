function reverseString(str) {
     
     // first solution
     // let revStr = "";
     // for (let i = str.length -1; i >= 0; i--) {
     //      revStr += str[i]
     // }
     // return revStr

     return str.split("").reverse().join("")

   }
   
   module.exports = reverseString;