function calculator(num1, num2, oparator) {
    let result;
    switch(oparator){
        case '+': {
            result = num1 + num2;
            break; 
        }
        case '-': {
            result = num1 - num2;
            break; 
        }
        case '*': {
            result = num1 * num2;
            break;
        }
        case '/': {
            result = num1 / num2;
            break; 
        }
        default: {
            console.log("Invalid operator");
        }
    }
    return result
}

module.exports = calculator;
