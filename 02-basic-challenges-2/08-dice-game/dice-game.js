function diceGameSimulation(num) {
    const resultArr = []

    for (let i = 0; i < num; i++) {
        const dice1 = Math.floor(Math.random()*6 + 1)
        const dice2 = Math.floor(Math.random()*6 + 1)

        let sum = dice1 + dice2;
        let result = ""

        if (sum === 7 || sum === 11) {
            result = "win"
        } else if (sum === 2 || sum === 3 || sum === 12) {
            result = "lose"
        } else {
            result = "roll again"
        }

        resultArr.push({dice1, dice2, sum, result})
        
    }
    return resultArr
}

module.exports = diceGameSimulation;
