function highestScoringWord(str) {


// This is wrong solution, because we need to calculate the score by adding the differenc
//  of a(96) charcode
// const strArr = str.split(" ")
// let score = "a"
// let highScorer = ""
// for (let i = 0; i < strArr.length; i++) {
//     for (let j = 0; j < strArr[i].length; j++) {
//         if (score < strArr[i][j] ) {
//             score = strArr[i][j]
//             if (highScorer === strArr[i]) {
//                 highScorer = highScorer
//             } else {
//                 highScorer = strArr[i]
//             }
            
//         }   
//     }
// }
// return highScorer


// Correct solution
// const ArrWords = str.split(" ")
// const sumedEleArr = ArrWords.map((ele)=> {
//     let sum = 0;
//     for (let i = 0; i < ele.length; i++) {
//         sum += ele.charCodeAt(i) - 96;
//     }
//     return sum
// })
// let highestScorer = 0;
// for (let i = 0; i < sumedEleArr.length; i++) {
//     if (sumedEleArr[i] > highestScorer) {
//         highestScorer = i
//     }
// }
// return ArrWords[highestScorer];


// Second solution
const wordsArr = str.split(" ")

const WordsValArr = wordsArr.map((ele)=> Array.from(ele).reduce((acc, char)=> 
acc + char.charCodeAt(0) - 96 ,0))

const highestScore = Math.max(...WordsValArr)
const highScorerIndex = WordsValArr.indexOf(highestScore)
const highestScorer = wordsArr[highScorerIndex]
return highestScorer
}

module.exports = highestScoringWord;
