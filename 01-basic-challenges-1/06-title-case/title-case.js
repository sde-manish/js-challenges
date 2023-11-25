function titleCase(string) {
    let temp = string.toLowerCase().split(" ");
    
    for (let index = 0; index < temp.length; index++) {
        
        temp[index] = temp[index][0].toUpperCase() + temp[index].slice(1)
    }
    let finalText = temp.join(' ')

    console.log(finalText);
}

module.exports = titleCase;
