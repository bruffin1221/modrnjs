// var price = 100
// var amountPaid = 400

// if(price>amountPaid){
//     var amountDue = price - amountPaid
//     console.log("You still owe $" +amountDue+".")     
// }else{
//     var change = amountPaid - price 
//     console.log("We owe you $"+ change)
// }

// var age = 19
// if(age > 18 && age < 20){
//     console.log("You may enter the club, but cannot drink.")
// }else if(age>21){
//     console.log("You may enter the club and drink")
// }else{
//     console.log("Cannot enter the club.")
// }

// var exerciseInput = prompt("Pleae input body part")
// console.log(exerciseInput)

// switch(exerciseInput){
//     case "legs":
//         console.log("Squat and Deadlift")
//         break;
//     case "back":
//         console.log("Row or Pullup")
//         break;
//     case "chest":
//         console.log("pushup or chest press")
//         break;
//     case "arms":
//         console.log("curl or overhead extensions ")

// }

//for loop 

// for(var i = 0; i< 50; i+=2){
//     console.log(i)
// }

// var schoolShopping=["pencils", "notebook", "pens", "binder"]

// function schoolChecker(a){
//     for(var i = 0; i<schoolShopping.length; i++){
//         if(schoolShopping[i]===a){
//             console.log(a)
//         }
//     }
// }

// schoolChecker("pens")


// var x = 0 
// while(x < 5){
//     console.log(x)
//     x++
// }

// var balance = 1000
// var price = 100
// while(balance > 0){

//     if(balance>price){
//         console.log(balance-price)
//     }else{
//         console.log("not enough funds")
//     }
//     balance -= price
// }

// var total = 98.25
// var payment = 100
// var amount = payment-total
// var change =  amount.toFixed(2)
// console.log(change)
// var $100 = 100.00
// var $50 = 50.00
// var $20 = 20.0
// var $10 = 10.00
// var $5 = 5.00
// var $1 = 1.00
// var quarter = .25
// var dime = .10
// var penny = .01

// var moneyList =[$100, $50, $20, $10, $5, $1, quarter, dime, penny]
// console.log(moneyList)

// for(var money = 0; money < moneyList.length; money++){
//     if(change> 100){
//         var bill100 = change/moneyList[0]
//         numberOf100Bills = parseInt(bill100)
//          console.log( numberOf100Bills + " $100 bill(s)")           
//    }
//    var stillRemaining = change % moneyList[0]
//    if(stillRemaining > $50){
//     var bill50 = stillRemaining/moneyList[1]
//     var numberOf50s = parseInt(bill50)
//     console.log(numberOf50s + " $50 bill(s)")
//    } 
//    var stillRemaining2= stillRemaining % $50
//    if(stillRemaining2>$20){
//     var bill20 = stillRemaining2/$20
//     var numberOf20s = parseInt(bill20)
//     console.log(numberOf20s + " $20 bill(s)")
//    }
//    var stillRemaining3 = stillRemaining2 % $20
//    if(stillRemaining3>$10){
//     var bill10 = stillRemaining3/$10
//     var numberof10s = parseInt(bill20)
//     console.log(numberof10s + " $10 bill(s)")
//    }
//    var stillRemaining4= stillRemaining3 % $10
//    if(stillRemaining4>$5){
//     bill5 = stillRemaining4/$5
//     var numberof5s = parseInt(bill5)
//     console.log(numberof5s + " $5 bill(s)")
//    }
//    var stillRemaining5  = stillRemaining4 % $5
//    if(stillRemaining5 > $1){
//      var bill1 = stillRemaining5/$1
//      var numberOf1s = parseInt(bill1)
//      console.log(numberOf1s + " $1 bill(s)") 
//    }
//    var stillRemaining6 = stillRemaining5 % $1
//    if(stillRemaining6> quarter){
//      var returnQ = stillRemaining6/quarter
//      numberOfQuarters = parseInt(returnQ)
//      console.log(numberOfQuarters + " quarter(s)")
//    }
//    var stillRemaining7 = stillRemaining6 % quarter
//    if(stillRemaining7 > dime){
//     var billDime = stillRemaining7/dime
//     var numberOfDimnes = parseInt(billDime)
//     console.log(numberOfDimnes + " dime(s)" )
//    }
//    var stillRemaining8 = stillRemaining7 % dime
//    if(stillRemaining8>penny){
//     var billP =  stillRemaining8/penny
//     var numberOfPennies= parseInt(billP)
//     console.log(numberOfPennies + " penny(ies)")
//    }
//    break
//     }

var total = 1200.36
var payment = 1201.00


var $100 = 100.00
var $50 = 50.00
var $20 = 20.0
var $10 = 10.00
var $5 = 5.00
var $1 = 1.00
var quarter = .25
var dime = .10
var nickel = .05
var penny = .01

var amountDue = payment-total
let change = amountDue.toFixed(2)
console.log(change)
var bills100 = parseInt(change/$100)


stillRemaining = change % $100
var bills50 = parseInt(stillRemaining/$50)

stillRemaining2 = stillRemaining % $50
var bills20 = parseInt(stillRemaining2/$20)

var stillRemaining3 = stillRemaining2 % $20
var bills10 = parseInt(stillRemaining3/$10)

var stillRemaining4 = stillRemaining3 % $10
var bills5 = parseInt(stillRemaining4/$5)

var stillRemaining5 = stillRemaining4 % $5
var bills1 = parseInt(stillRemaining5/$1)

var stillRemaining6 = stillRemaining5 % $1
var quarters = parseInt(stillRemaining6/quarter)

var stillRemaining7 = stillRemaining6 % quarter
var dimes = parseInt(stillRemaining7/dime)

var stillRemaining8 = stillRemaining7 % dime
var nickels = parseInt(stillRemaining8/nickel)

var stillRemaining9 = stillRemaining8 % nickel
var pennies = parseInt(stillRemaining9/penny)

var makeChange=[
    {
       needed100: bills100,
       phrase100: bills100 + " $100 bill(s)"

    },
    {
       remainingChange: stillRemaining,
       needed: bills50,
       phrase: bills50 + " $50 bill(s)"

    },
    {
        remainingChange: stillRemaining2, 
        needed: bills20,
        phrase: bills20 + " $20 bill(s)"
    }, 
    {
        remainingChange: stillRemaining3, 
        needed: bills10,
        phrase: bills10 + " $10 bill(s)"
    },
    {
        remainingChange: stillRemaining4, 
        needed: bills5,
        phrase: bills5 + " $5 bill(s)"
    },
    {
        remainingChange: stillRemaining5, 
        needed: bills1,
        phrase: bills1 + " $ 1 bill(s)"
    },
    {
        remainingChange: stillRemaining6, 
        needed: quarters,
        phrase: quarters + "  quarter(s)"
    },
    {
        remainingChange: stillRemaining7, 
        needed: dimes,
        phrase: dimes + "  dime(s)"
    },
    {
        remainingChange: stillRemaining8, 
        needed: nickels,
        phrase: nickels + "  nickel(s)"
    },
    {
        remainingChange: stillRemaining9, 
        needed: pennies,
        phrase: pennies + "  pennies(s)"
    }

]



i = 0 

while(i<makeChange.length){
    
    i++
    var index = i-1
    if(makeChange[index].needed>0){
        console.log(makeChange[index].phrase)
    }
}




