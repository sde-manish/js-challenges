function validateEmail(emailStr) {


    const emailPattern = /^[a-zA-Z0-9._-%+]+@[a-zA-Z0-9.-]+\.[a-zAZ]{2,4}$/
    return emailPattern.test(emailStr)

/*    emailStrArr = emailStr.split("")
    if (emailStrArr.includes("@") && emailStrArr.includes(".")) {
        return true
    }

    return false

The above solutiom i s not correct. */



// Second correct solution
// if (emailStr.indexOf('@') === -1 || emailStr.indexOf('.') === -1) {
//     return false;
//   }
  
// const inputStrArr = emailStr.split("@");
// const firstPart = inputStrArr[0]
// const secondPart = inputStrArr[1]


// if (firstPart.length < 2 || secondPart.length < 3 ) {
//     return false;
// }

// const domainExtensionArr = secondPart.split(".")


// const domain  = domainExtensionArr[0]
// const extension = domainExtensionArr[1]
// if (domain.length < 2 || extension.length < 3) {
//     return false
// }

// return true



//  Another way to write this solution
// function validateEmail(email) {
//     if (email.indexOf('@') === -1) {
//       return false;
//     }
  
//     const [localPart, domain] = email.split('@');
  
//     if (localPart.length === 0 || domain.length < 3) {
//       return false;
//     }
  
//     const domainExtension = domain.split('.');
//     if (
//       domainExtension.length < 2 ||
//       domainExtension[domainExtension.length - 1].length < 2
//     ) {
//       return false;
//     }
  
//     return true;

}

module.exports = validateEmail;
