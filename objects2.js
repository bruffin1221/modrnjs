 function car(make, model, color, year){
    this.make = make,
    this.model = model, 
    this.color = color,
    this.year = year 

 }

 function myCar(owner, years){
    this.owner = owner
    this.years = years
 }

 var hyndui = new myCar("Bruce Ruffin", 3)
car.call(hyndui, hyndui.years)
console.log(hyndui)


 var theCar = new myCar()
 car.apply(theCar, [hyndui.years] )
 console.log(theCar)
 
 
 
 // console.log(Function.prototype.call)
// var equal9 = {
//     num1: 5,
//     num2: 4,
//     add: function(){
//         return this.num1 + this.num2
//     } 
// }

// console.log(equal9.add())

// var equal12 ={
//     num1: 6,
//     num2: 6,  
// }
// console.log(equal9.add.call(equal12))

// var multiply = function(){
//     this.num1 + this.num2

// }
// console.log(multiply.call(equal12))

// var add = function(x, y, z){
//     console.log(arguments)
//     console.log(arguments.length)
//     console.log(arguments[0])
//     // for(var i = 0; i< arguments.length; i++){
//     //     console.log(i)
//     // }
//     x = x || 0
//     y = y || 0
//     z = z || 0

//     console.log(x + y + z)
    
// }
// add(3, 9, 2)



// var greet = function(){
//     console.log("Hello")
// }

// console.log(typeof greet)
// console.log(greet instanceof Function)
// var add = new Function("x", "y", "return x + y")
// console.log(add(10, 3))

// var multiply = new Function("a", "b", "return a * b")
// console.log(multiply(10, 2))