function sumOfEvenSquares(arr) {
    return arr.filter((ele)=> ele%2===0).map((ele)=> ele*ele).reduce((acc,currVal)=>
    acc+currVal, 0)
}

module.exports = sumOfEvenSquares;
