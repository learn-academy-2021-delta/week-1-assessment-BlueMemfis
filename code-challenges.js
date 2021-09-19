// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp = 35
// var temp = 350
// var temp = 212



if(temp === 212) {
  console.log(`${temp} is at boiling point`)
} else if(temp < 212) {
  console.log(`${temp} is below boiling point`)
} else {
  console.log(`${temp} is above boiling point`)
}

// var temp = 35
var temp = 350
// var temp = 212



if(temp === 212) {
  console.log(`${temp} is at boiling point`)
} else if(temp < 212) {
  console.log(`${temp} is below boiling point`)
} else {
  console.log(`${temp} is above boiling point`)
}
//   var temp = 35
// var temp = 350
var temp = 212



if(temp === 212) {
  console.log(`${temp} is at boiling point`)
} else if(temp < 212) {
  console.log(`${temp} is below boiling point`)
} else {
  console.log(`${temp} is above boiling point`)}// if(temp > 212){
// console.log(`${temp} is above boiling point`)
// } else(temp < 212);{
//    console.log(`${temp} is below boiling point`)
// } (temp === 212);{
//    console.log("212 is at boiling point") 
// }
// //}
// console.log(`${temp1} is below boiling point`) 
// console.log(`${temp2} is above boiling point`) 
// console.log(`${temp1} is at boiling point`) 
// // }
    //only run else if nothing else is true, I think I am doing too much. I am lost. I am getting too many outputs for 212...




// --------------------2) Create the code that will combine two arrays and return the length using the variables provided below. Expected output: 10

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

console.log(myNumbers1.concat(myNumbers2).length)

// --------------------3) Create the code that will reverse the letters of a string using the test variables provided below. Expected output: "eilrahc", "atled"

var myString1 = "charlie"
var myString2 = "delta"

// console.log(myString1,",",myString2);

var splitCohort1 = myString1.split('')
var splitCohort2 = myString2.split('')

// console.log(splitCohort1,",",splitCohort2);
//var splitCohort1 = ['c', 'h', 'a','r', 'l', 'i','e']
//var splitCohort2 = [ 'd', 'e', 'l', 't', 'a']

var reverseCohort1 = splitCohort1.reverse()
var reverseCohort2 = splitCohort2.reverse()
console.log(reverseCohort1.join(''),",",reverseCohort2.join(''));

//var reverseCohort2 = splitCohort2.reverse()

//console.log(reverseCohort1,",",reverseCohort2)

// //var myString1 = 'c', 'h', 'a',
//   'r', 'l', 'i',
//   'e'

//console.log(learnCohort.reverse())



//I FIGURED IT OUT!!! basic but a win for today


// --------------------4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12

//var number1 = 12
//var number2 = 27

//console.log(number1 +" is more than " + number2)

// var number1 = 7
// var number2 = 19

// console.log(number2-number1)

// // --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable is not a number using the two sets of test variables provided below. Expected output: "Your input is not a number", 3

// var numberRefactor1 = 42
// var numberRefactor2 = "hello"

// // var numberRefactor1 = 27
// // var numberRefactor2 = 24

