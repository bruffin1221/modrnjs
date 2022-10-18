// function hello(){
//     console.log("Hello World")
// }

// hello()

// function greeting(name){
//     console.log("Hello " + name + "!")
// }

// greeting("John")

// function add(number){
//     return function(n){
//         console.log(number + n)
//     }
// }

// add(1)(2)

// function changeDue(total){
//     return function(payment){
//         var change = payment-total
//         console.log(change.toFixed(2))
//     }
// }

// changeDue(15.82)(16.00)
// changeDue(23.60)(30.00)

// var house1 = {
//     type: "single family",
//     community: "suburban"
// }
// var house2 = house1
// console.log(house1)
// console.log(house2)

// house1.community = "urban"
// console.log(house1)
// console.log(house2)

// c = 1
// function addOne1(){
//    c++
//    console.log(c)
// }
// addOne1()
// console.log(c)

// var sumFunction = function(a, b){
//    console.log(a+b)
// }
// sumFunction(1, 9)

// var canDrink= function(age){
//     if(age>21){
//       console.log("Can Drink Alcohol")
//     }else{
//       console.log("Cannot Drink Alcohol")
//     }
// }

// canDrink(20)
// canDrink(45)

// var nameInfo = {
//     firstN: "John",
//     lastN: "Smith", 
//     age: 35, 
//     job: "clerk",
//     info: function(){
//         return this.firstN + " "+ this.lastN + " is a "+ this.job
//     }
// }
// // console.log(nameInfo.firstN)
// console.log(nameInfo.info())

// function sum(x){
//     return function(a){
//         return a+x 
//     }
// }

// addOne = sum(1)
// console.log(addOne(3))

// function power(a){
//     return function(b){
//         return b**a
//     }
// }

// var squared = power(2)
// console.log(squared(3))
// console.log(squared(4))
// var cubed = power(3)
// console.log(cubed(3))


// var  numbers = [1, 2, 3, 4]
// var numbers2=[10, 20, 20, 50]
// // var addnumbers = numbers[0]+numbers[1]+numbers[2]+numbers[3]
// // console.log(addnumbers)

// var addNumbers = function(array){

//    var total = 0

//     for(var i = 0; i<array.length; i++ ){
        
//         total += array[i]
       
//     }
//     console.log(total)
// }

// addNumbers(numbers2)

// var add = function(a,b){
//     return a+b
// }(3, 5);

// console.log(add)

// (function(a, b){
//     console.log(a+b)
// })(3, 5);

// function primeNumber(a){
//     for(var i = 2; i<a; i++){
    
//         var newNumber = a % i
//         if(newNumber===0){
//             console.log(i + " is the lowest number!")
//             break
//         }else{
//             console.log(a + " is a prime number. " )
//             break
//         }
//     }
// }
// primeNumber(10)
// var arr = [1, 1, 1, 1 ,1, 1, 1, 1, 1, 2]
// console.log(arr.length)
//  var numberof1 = []
//  for(var i = 0; i<arr.length; i++){
//   if(arr[i]===1){
//     numberof1.push(arr[1])

//   }
 
//  }
 
//  console.log(numberof1.length<5)

a= 5
var squared= Math.sqrt(a)
var square = parseInt(squared)
var primeArray = []

for(var i = 2; i<a; i++){   
   primeArray.push(i)
    }
  
   for(var n=0; n<primeArray.length; n++){ 
    primeNumber(n)   
   }

   function primeNumber(n){
    var num =primeArray[n]
    var trueObject={}
    trueObject.remainder = []
    var truthArray =  trueObject.remainder
    var numberOf0 = []
    for(var i = 2; i<=square; i++){
      trueObject.number = num
      truthArray.push(num % i)  
    }
    if(trueObject.number<=square){
      for(var i = 0; i<truthArray.length; i++){
        if(truthArray[i]===0){
          numberOf0.push(truthArray[i])
         
        }
      }
      if(numberOf0.length<=1){
        console.log(trueObject.number)
      }
    }
    
    if(truthArray.includes(0)===false){
      console.log(trueObject.number)
      
    }
   
   }


   


   // for(var i = 1; i<square; i++){
   //  console.log(i)}



//    console.log(n)
//    for(var i = 2; i<square; i++){
       
//        console.log(i)

// for(var i=2; i<square; i++){
// console.log(primeArray[50])
//     var newNumber = primeArray[] % i
//     console.log(newNumber)
//     // if(newNumber ===0){
//     //     console.log("")
       
//     // }else{ 
//     //     console.log(i)
       
//     // }
// }

 



 
//  if(Number.isInteger(square)){
//     console.log(square)
//  }
 