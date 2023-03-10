//Extracts the first four characters
let myStr = "beautiful"
console.log(myStr.slice(0,4))

//Inserting a string "eat" at the 10th position
const food = "I did not have appetite today"
const newStr = "eat"
// console.log(food[9])
const result = `I did not${newStr}have appetite today`
console.log(result)


//The number of times "the" and "s" appears in the string
const story = "She sells sea shells at the sea shore"
console.log({the:story.match(/the/g).length})
console.log({s: story.match(/s/g).length})

//Converting to specified format
//UpperCase
const strConfidant = "CONfidant"
console.log(strConfidant.toUpperCase())

//LowerCsse
const lowerStr1 = "amizing"
const lowerStr2 = "beautiFUL"
console.log(lowerStr1.toLowerCase(), lowerStr2.toLowerCase())
//Tittle case

const str = "A busy office"
const titleCase = str.toLocaleLowerCase().split(' ').map(word => word.charAt(0).toUpperCase()+ word.slice(1)).join(' ')
console.log(titleCase)

//Finding word from a string
//market
const string1 = "The lady went to the market with her sister";
if(string1.includes("market")){
    console.log("market")
}
const string2 = "My favourite season is spring"
if(string2.includes("season")){
    console.log("season")
}





