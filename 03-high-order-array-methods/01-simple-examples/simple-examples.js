const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const newNumbers = numbers.map((ele) => ele*4)
console.log(newNumbers);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const filteredELe = numbers.filter((ele) => ele > 2)
console.log(filteredELe);


/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
const sumOfArrEle = numbers.reduce((acc, currVal)=> acc + currVal,  0)
console.log(sumOfArrEle);



/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
numbers.forEach((num)=> console.log(num * 2))


 /**
 * find: Returns the first array element that satisfies a specified condition.
 */
const findEle =  numbers.find((num)=> num%3===0)
console.log(findEle);

/**
 * some: Checks if at least one array element satisfies a condition.
 */
const someEle =  numbers.some((num)=> num%5===0)
console.log(someEle);

 

/**
 * every: Checks if all array elements satisfy a condition.
 */
const everyEle = numbers.every((num)=> num%2===0)
console.log(everyEle);
