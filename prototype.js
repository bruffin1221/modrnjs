var car = function(make, model, year){
    this.make = make,
    this.model = model,
    this.year = year
}

var hyndui = new car("Hyndui", "Telluride", 2021)


var objectValues = function(object){
    console.log(Object.values(object))
}
objectValues(hyndui)
var objectKeys = function(object){
    console.log(Object.keys(object))
}
objectKeys(hyndui)






// var twentyOff = {
//     item1: "Shirt and Tie",
//     item1Price: 27,
//     item2: "Dress Shoes",
//     item2Price: 32,
//     item3: "Jacket",
//     item3Price: 41,
//     item4: "Tie",
//     item4Price: 53,
//     totalCost: function(){
//         var z =this.item1Price + this.item2Price + this.item3Price + this.item4Price
//         var percentageOff = z *.20
//         var totalPrice = z - percentageOff
//         return totalPrice
//     }
// }

// var clonedObj = new Object  
// function clone(object){
//     for(var i in twentyOff){
//         clonedObj[i]=undefined
//     }
//     console.log(clonedObj)
// }

// clone(twentyOff)













// var homeInfo = function(price, address, squareFoot,  neighborhood, type){
//     this.price = price, 
//     this.address = address,
//     this.squareFoot = squareFoot
//     this.neighborhood = neighborhood,
//     this.type = type
// }

// homeInfo.prototype.year = 1990
// homeInfo.prototype.lotSize = ".5 square miles"


// var homeRooms = function(bedrooms, bathrooms){
//     this.bedrooms = bedrooms,
//     this.bathrooms = bathrooms
// }

// var thisHome = function(address, city,  neighborhood){
//     this.address = address,
//     this.city = city,
//     this.neighborhood = neighborhood
// }


// var linkedObject = new Object

// function augment (proto1, proto2){

//     for(var i in new proto2){
//         if(!(i in new proto1)){
//            linkedObject[i] = undefined
//         }
//     }
//     proto1.prototype = linkedObject
// }

// augment(thisHome, homeInfo)
// augment(thisHome, homeRooms)
// var newHome = new thisHome()
// newHome.address = "16410 SW Milan St"
// newHome.city = "Tigard"
// newHome.neighborhood = "Bull Mountain"
// newHome.bathrooms = 2
// newHome.bedrooms = 3
// newHome.lotSize = ".5 square mile"
// newHome.squareFoot = "2000 square feet"
// newHome.type = "Single Family"
// newHome.year = 2000
// console.log(newHome)

// for(var i in new homeInfo){
//     console.log(i)
// }
// console.log(homeInfo.hasOwnProperty("price"))
// console.log(homeInfo.hasOwnProperty("lotSize"))

// var aHome = new homeInfo()
// console.log(aHome.hasOwnProperty("price"))
// console.log(aHome.hasOwnProperty("lotSize")


// augment(homeInfo)

// console.log("address" in new homeRooms())
// console.log("address" in new thisHome())

// for(var i in new thisHome){
//     console.log(i)
// }



// var car = function(make, model, year, color){
//     this.make = make,
//     this.model = model,
//     this.year = year, 
//     this.color = color
// }

// var myCar = function(make, model){
//     this.make = make,
//     this.model = model 
// }
// console.log("make" in new car())
// console.log("model" in new myCar())

// for( var i in new car){
//     console.log(i)
// }




// function extend(child, parent){
//     child.prototype = new parent()
//     child.prototype.constructor = new child()
// }

// extend(myCar, car)

// var hynduiSantaFe = new myCar()
// console.log(hynduiSantaFe)
// hynduiSantaFe.make="Hundui"
// hynduiSantaFe.model ="Santa Fe"
// hynduiSantaFe.year = 2021
// hynduiSantaFe.color = "green"
// console.log(hynduiSantaFe)

// myCar.prototype.helper = car 
// var porch911 = new car()
// console.log(porch911)
// porch911.make = "Porshe"
// porch911.model = "911"
// porch911.year = 2021
// porch911.color = "red"
// console.log(porch911)



// console.log("address" in new home())
// for(var i in new thisHome()){
//     console.log(i)
// }
// home.prototype = new thisHome()
// thisHome.prototype.constructor = new home()
// var childHome = new home 
// console.log(childHome) 
// var familyHome = new home()
// console.log(familyHome)


// var familyHome = new home()
// console.log(familyHome)








// var studentInfo =  function(lastName, firstName, grade, school){
//     this.lastName = lastName, 
//     this.firstName = firstName,
//     this.grade = grade, 
//     this.school = school
// }
// // var newStudent = new studentInfo()
// // console.log("lastName" in studentInfo)
// for(var i in new studentInfo()){
//     console.log(i)
// }




// var student =function(lastName, firstName){
//     this.lastName = lastName, 
//     this.firstName = firstName
// } 
// for(var i in new student()){
//     console.log(i)
// }



// function extend(parentClass, childClass){
//     childClass.prototype = new parentClass
//     childClass.prototype.constructor = childClass
// }

// extend(studentInfo, student)
// var dwayneJohnson = new student()
// console.log(dwayneJohnson)
// dwayneJohnson.firstName = "Dwayne"
// dwayneJohnson.lastName = "Johnson"
// dwayneJohnson.grade = 5
// dwayneJohnson. school = "Lincoln Elementary School"
// console.log(dwayneJohnson)
// var nickFoley = new studentInfo()
// console.log(nickFoley)
// var dwayneJohnson = new student("Dwayne", "Johnson")
// student.prototype.constructor = new studentInfo()
// console.log(dwayneJohnson)
// dwayneJohnson.grade = 4
// dwayneJohnson.school = "Ashland High School"
// console.log(dwayneJohnson)
// student.prototype.helper = studentInfo
// dwayneJohnson.grade = 3
// dwayneJohnson.school = "Fallon Creek Elementary School"
// console.log(dwayneJohnson)


// var car = function(make, model, year, color){
//     this.make = make,
//     this.make = model,
//     this.year = year,
//     this.color = color
// }

// var myCar = function(make, model){
//     this.make = make,
//     this.model = model
// }




// var studentInfo ={
//     firstName: "John",
//     lastName: "Smith",
//     grade: 3
// }

// var alexanderSanders = Object.create(studentInfo)
// alexanderSanders.firstName = "Alexander"
// alexanderSanders.lastName = "Sanders"
// alexanderSanders.grade = 3
// console.log(alexanderSanders)


// var person = {
//     firstName: "Bruce",
//     lastName: "Ruffin",
//     fullName: function(){
//         console.log(this.firstName +" "+ this.lastName)
//     }
// }
// person.fullName()

// var person1 = Object.create(person)
// person1.firstName = "Xavien"
// person1.lastName = "Ruffin"
// person1.fullName()

// var multiplyObj = {
//     num1: 5,
//     num2: 4,
//     multiply: function(){
//         console.log(this.num1 * this.num2)
//     }
// }

// multiplyObj.multiply()

// var thirty = Object.create(multiplyObj)
// thirty.num1 = 10
// thirty.num2 = 3
// thirty.multiply()
// console.log(thirty)

// var person = {
//     firstName: "Bruce",
//     lastName: "Ruffin"
// }

// console.log(person)
// console.log(person.valueOf("firstName"))

// var hondaCrv = new Object()
// hondaCrv.make = "Honda"
// hondaCrv.model = "CRV"
// hondaCrv.year = 2021
// console.log(hondaCrv)