function formatPhoneNumber(arr) {
    let formattedNum= "(";

    for (let i = 0; i < arr.length; i++) {
        if (i === 3) {
            formattedNum += ") "
        } else if (i === 6) {
            formattedNum += "-"
        }

        formattedNum += arr[i]
    }
    return formattedNum
}

// Other solutions
// function formatPhoneNumber(numbers) {
//     // Get the first 3 numbers and join them together
//     const areaCode = numbers.slice(0, 3).join('');
//     // Get the next 3 numbers and join them together
//     const prefix = numbers.slice(3, 6).join('');
//     // Get the last 4 numbers and join them together
//     const lineNumber = numbers.slice(6).join('');
  
//     // Return the formatted phone number
//     return `(${areaCode}) ${prefix}-${lineNumber}`;
//   }
  
//   // Solution 2
//   function formatPhoneNumber(numbers) {
//     // Join all the numbers together
//     const formatted = numbers.join('');
//     // Return the formatted phone number
//     return `(${formatted.substring(0, 3)}) ${formatted.substring(
//       3,
//       6
//     )}-${formatted.substring(6)}`;
//   }
  
//   // Solution 3
//   // Arrow function with implicit return
//   const formatPhoneNumber = (numbers) =>
//     `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers
//       .slice(6)
//       .join('')}`;


module.exports = formatPhoneNumber;
