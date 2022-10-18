class car{
    constructor(make, model, year){
        this.make = make
        this.model = model 
        this.year - year
    }
}

class owner extends car{
    constructor(owner, make, model, year){
        super(make, model, year)
        this.owner = owner
    }
}

let bruceRuffin = new owner("Bruce Ruffin", "Hynduu", "Santa Fe", 2021)
console.log(bruceRuffin)

class job{
    constructor(position, salary, company){
        this.position = position
        this.salary = salary
        this.company = company
    }
}

class name extends job{
    constructor(firstName, lastName, position, salary, company){
        super(position, salary, company)
        this.firstName = firstName
        this.lastName = lastName
         
    }
}


let bruceR = new name("Bruce", "Ruffin", "loser", "shit", "scrubville")
console.log(bruceR)



// class student{
//     constructor(firstName, lastName, grade, school, _gpa){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.grade = grade
//         this.school = school
//         this._gpa = _gpa 
//     }
//     set gpa(grades){
//         console.log("Setter was called")
//         this._gpa = grades
//     }

//     get gpa(){
//        return this._gpa
//     }
// }
// let violaBailey = new student("Viola", "Bailey", 11, "Marshall High School")
// violaBailey.gpa = 3.0
// console.log(violaBailey.gpa)


// class show{
//     constructor(name, dayOfWeek, _time){
//         this.name = name
//         this.dayOfWeek = dayOfWeek
//         this._time = _time
//     }
//     set time(slot){
//         this._time = slot
//     }

//     get time(){
//         return this._time
//     }
// }

// let strangerThings = new show("Stranger Things", "Thursday")

// strangerThings.time = "3:00"
// console.log(strangerThings.time)
// let sherryWilson = new  studentName("Sherry", "Wilson", 12, "Cleveland High School")
// sherryWilson.gpa = 3.3
// console.log(sherryWilson)


// class car{
//     constructor(make, model, year)
//     {
//         this.make = make
//         this.model = model
//         this.year = year
//     }
//     static default(){
//         return new car("Toyota", "Camry", 2011)
//     }
// }

// let myHyndui = new car("Santa Fe", "Hyndui", 2021)
// console.log(myHyndui)
// console.log(car.default())

// class name{
//     constructor(firstName, lastName){
//         this.firstName = firstName
//         this.lastName = lastName 
//     }
//      myNameIs(){
//         return `My name is ${this.firstName} ${this.lastName}`
//     }
// }
// let myName = new name("Bruce", "Ruffin")
// console.log(myName.myNameIs())




// function car(make, model, year){
//     this.make = make,
//     this.model = model, 
//     this.year = year
// }

// function carOwner(owner){
//     this.owner = owner
    
// }

// carOwner.prototype = new car()
// var bruceRuffin = new carOwner()
// console.log(bruceRuffin)