var car ={
    model: "Santa Fe",
    make: "Hyndui",
    year: 2021,
    owner: function(first, last){
        console.log(first + " " + last)

    }
}

// console.log(car)
// console.log(car.make)
// console.log(car.owner("Bruce", "Ruffin"))

// console.log(car["model"])
// console.log(car["make"])

// var family = new Object()
// family.father = "Bruce Ruffin"
// family.mother = "Gladys Ruffin"
// family.son1 = "DeWayne Ruffin"
// family.son2 = "Michael Ruffin"
// family.son3 = "Brandon Ruffin"
// family.son4 = "Joshua Ruffin"

// function Family(father, mother, kids=[]){
//     this.father = father,
//     this.mother = mother,
//     this.kids = kids
// }

// var ruffin = new Family("John", "Ann", ["Marsha", "Manuel"])
// console.log(ruffin)




// function Car(make, model, color, year){
//     this.make = make,
//     this.model = model,
//     this.color = color,
//     this.year = year
// }

// var crv = new Car("CRV", "Honda", "Gun Metal Black", "2017")
// Car.prototype.condition = "new"
// crv.condition
// console.log(crv)

// var santafe = new Car("Santa Fe", "Hyndui", "Silver", 2021)
// // santafe.condition = "good"
// // console.log(santafe)
// var sonName = new String("Xavien")
// var nameOfSon = sonName.toString()
// console.log(nameOfSon.charAt(1))
// console.log(nameOfSon.toLowerCase())


// var toy = new String("Hot Wheels Car")
// console.log(toy.toString())
// console.log(toy.indexOf("t"))

// var x = new Date()
// console.log(x)

// var birthday= new Date(1975, 11, 21)
// console.log(birthday)

var sonsBirthday = new Date(2010, 11, 15)
console.log(sonsBirthday.getDay())


// var milliseconds = new Date(245127823187)
// console.log(milliseconds)
// console.log(milliseconds.getTime())

// var z = new Date()
// console.log(z)
// console.log(z.getDay())

var day = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// console.log(day[birthday.getDay()])
var sonsDay = (day[sonsBirthday.getDay()])

// var birthMonth = birthday.getMonth()

var month = ["January", "February","March","April","May","June","July","August","September","October","November","December"]

var sonsMonth = month[sonsBirthday.getMonth()]


// var birthDate = birthMonth + "/" + birthday.getDate()+"/" + birthday.getYear() 
// console.log(birthDate)

// console.log("My sons's birthday is on "+ sonsMonth + " 11th.") 

var time = new Date()
console.log(time)

var hour = time.getHours()
var minute = time.getMinutes()
console.log(hour+":"+ minute)
var year = time.getFullYear()

console.log("My son was born on " + sonsDay + ", " + sonsMonth + " 11th, " + sonsBirthday.getFullYear()+".")


var dayOfMonth= new Date(0, -1, 11, 0, 0, 0, 0, 0)
console.log(dayOfMonth[2])


var pi = Math.PI
console.log(pi)

var random = Math.random()
console.log(random)

var round = Math.round(4.96)
console.log(round)

var floor= Math.floor(4.23)
console.log(floor)

var personJSON = {
    "name": "Bruce Ruffin",
    "state": "Oregon",
    "job": "Loser"
}
console.log(personJSON)
var personString = JSON.stringify(personJSON)
console.log(personString)
console.log(typeof personString)

var returnPersonJSON = JSON.parse(personString)
console.log(returnPersonJSON)

var toDoList = ["wash dishes", "take-out trash", "clean bathroom", "wash clothes"]
console.log(toDoList)
toDoList.push("vacuum the floors")
console.log(toDoList)

toDoList.push("wipe counters")
console.log(toDoList)

toDoList.pop()
console.log(toDoList)

toDoList.shift()
console.log(toDoList)

toDoList.unshift("feed the dog", "wash the floor")
console.log(toDoList)

toDoList.splice(4, 5, "make your bed", "finish homework")
console.log(toDoList)

toDoList.splice(0, 3)
console.log(toDoList)

toDoList.push("wash dished", "clean bathroom")
console.log(toDoList)
console.log(toDoList.reverse())

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var y = numbers.filter(function(n){
    return n % 2 === 0
})
console.log(y)

var textFunction = function(x){
    return x % 2 === 0
}
console.log(y.every(textFunction))

numbers.forEach(function(e){
    console.log(e)
})

toDoList.forEach(function(e){
    console.log(e)
})


