// var lives = 10 
// console.log(lives)
// lives = 9 
// console.log(lives)
// lives = 8
// console.log(8)

// var nine = 5+4
// console.log(nine)
// var tenpt3 = 33/10
// console.log(tenpt3)

// b= 0 
// b+=2
// console.log(b)
// b++
// console.log(b)
// b-=2
// console.log(b)
// console.log("----------")

// var p = 5*5 + 5
// console.log(p)
// console.log("---------")
// var p = 5*(5+5)
// console.log(p)

// //remainder operator
// var  c = 17 % 2
// console.log(c)

// function evenOdd(a){
//     n = a % 2

//     if(n===0){
//         console.log("Even")
//     }else{
//         console.log("odd")
//     }
// }
// evenOdd(10)
// //exponent operator
// function squared(a){
//     num = a ** 2 
//     console.log(num)
// }
// squared(4)
// squared(10)

// //infinity

// var h = Infinity
// console.log(h)

// //power 
// var n = Math.pow(4, 2)
// console.log(n)
// var p = Math.pow(3, 3)
// console.log(p)

// //strings

// var nameF = "John Smith"
// var sister = "My sister's name is Reagan."
// console.log(nameF)
// console.log(sister)

// //new line 

// var xRuffin = "Xavien \n Ruffin"
// console.log(xRuffin)
// var kRuffin = "Karla \n Ruffin"
// console.log(kRuffin)

// //tab 
// var xRuffin = "Xavien \t Ruffin"
// console.log(xRuffin)
// var kRuffin = "Karla \t Ruffin"
// console.log(kRuffin)

// //Concat
// function greeting(name){
//     console.log("Hello "+ name)
// }

// greeting("Sasha")
// greeting("Carol")

// //methods
// var fruit = "orange"
// console.log(fruit.length)
// console.log(fruit.charAt(3))
// console.log(fruit.indexOf("e"))
// console.log(fruit[2])

// //boolean
// x= 12 
// y = 15
// console.log(12<15)

// //logical operator(&& is satifies all condition
// // || at least one condition, ! is false)

// function canDrink(name, hasId, age){
//     if(hasId==="yes" && age>20){
//         console.log(name + " can purchase alcohol")}else{
//             console.log("Cannot purchase alcohol")}
//         }
    
// canDrink("John", "no", 30)
// canDrink("Shelly", "yes", 33)

// function bOnTest(student, score, extraCredit){

//     if(score<90 && score>80 || extraCredit==="yes"){
//         console.log(student + " passed the test!")
//     }else{
//         console.log("Check your score")
//     }
// }

// bOnTest("John", 75, "no")
// bOnTest("John",85, "no")
// bOnTest("John",65, "yes")

// //ternary operator
// function passTest(x){
//     z = x > 50 ? "Pass":"Fail"
//     console.log(z)
// }
// passTest(48)
// passTest(100)

// function canDrink(age){
//     buyAlcohol = age> 21 ? "Approved": "Not Approved"
//     console.log(buyAlcohol)
// }
// canDrink(15)
// canDrink(34)

// //objects 

// var car={
//     model: "Santa Fe",
//     make: "Hyndui",
//     year: "2021"
// }

// console.log(car.model)
// console.log("My car is a "+ car.make + " "+ car.model + "!")

//change challenge

var amountDue = 40.32
var amountPaid= 90.00

 var changeDue = amountPaid-amountDue
 var change = changeDue.toFixed(2) 
  console.log(change)
 $100 = 100.00
 $50 = 50.00
 $10 = 10.00
 $5 = 5.00
$1 = 1.00
dime = .10
penny = .01

var return$10 = parseInt(change/$10) 
var return$1 = parseInt(change % $10)/$1

var smallChangeFloat =change - parseInt(change)
var dimeFloat = parseFloat(smallChangeFloat.toFixed(2)/dime)
var returnDime = parseInt(dimeFloat)

pennyReturn = smallChangeFloat - parseInt(dimeFloat)* .10
returnPennies = pennyReturn.toFixed(2)/penny
// console.log(return$10, return$1)

console.log(return$10 + ": $10 bills")
console.log(return$1 + ": $1 bills")
console.log(returnDime + ": dimes")
console.log(returnPennies + " : pennies")

