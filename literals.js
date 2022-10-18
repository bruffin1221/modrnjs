

// let family={
//     father: "Bruce Ruffin",
//     mother: "Karla Ruffin",
//     son: "Xavien Ruffin",
//     greeting(){
//         console.log(`My son's name is ${this.son}`)
//     }
// } 
// Object.assign(family, {daughter: "Bella Ruffin"})
// family.greeting()

// let add ={



// let students = ["John Master", "Suan Brinkster", "Ellen Wade", "Darla Spring"]
// let studit = students.entries()
// console.log(studit)
// console.log(studit.next())
// console.log(JSON.stringify(studit.next()))
// console.log(JSON.stringify(studit.next()))
// for(let student of students){
//
//     console.log(student)
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(let number of numbers){
//     if(number< 5){
//         console.log(number)
//     }
// }

// for(let num of numbers){
//     if(num===5){
//         console.log(num)
//     }
// }

//     num1: 3,
//     num2: 4,
//     sum(x=1){
//        console.log(x+ this.num1 + this.num2)
//     }
// }

// add.sum()
// add.sum(5)

// let x = "owner"
// let car ={
//     make: "Explorer",
//     model:"Ford",
//     year: 2022,
//     [x]: "Bruce Ruffin"
// }
// console.log(car)

// let y = "year"
// let tablet={
//     make: "Apple",
//     model: "Air 5",
//     [y]: 2022
// }
// Object.assign(table, {warranty: 6})
// console.log(tablet)

// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let y = [...x, 11, 12, 13, 14]
// console.log(y[0])

// let dettFamily = ["William Dettwyler", "Mary Dettwyler", "Karla Ruffin"]
// let ruffFamily= ["Bruce Ruffin", "Gladys Ruffin", "Micheal Ruffin", ...dettFamily] 
// console.log(ruffFamily)
// function scores(...y){ 
//     y.map(function(e){
//         console.log(e*2)  
//     })   
// }

// scores(2, 3, 4, 5, 6, 7)

// function numbers(...y){
//     console.log(y)
// }

// numbers(3, 4, 5)
// let number = [...x]
// console.log(number[1, 2, 3, 4, 5])


// let familyName = ([firstName, lastName = "Ruffin"]) =>{
//     console.log(`${firstName} ${lastName}`)
// }
// familyName(["Bruce"])
// familyName(["Jack", "Vogel"])
// familyName(["Leah", "Baird"])


// function studentName({name: name, grade: grade, school: school="Fowler Middle School"}){
//     console.log(`${name}, ${grade}, ${school}`)
// }
// studentName({name: "Maya Vogel", grade: 9, school:"Tigard High School"}) 
// studentName({name: "Xavien Ruffin", grade: 6})

// function add({num1: num1, num2: num2=2}){
//     console.log(num1 + num2)
// }
// add({num1: 3})
// add({num1: 3, num2: 3})


// let person = {name: "John", age: 23}
// let {name: n, age: a} =  person 
// console.log(n, a)

// let scores = { 
//     unit1AAss: 10,
//     popQuiz: 15,
//     groupPro: 20,
//     unitTest: 55,
//     paperTerm: 95
// }
// let {unit1AAss: u, popQuiz: p, groupPro: g, unitTest: t, paperTerm: pt} = scores 
// console.log((u + p + g + t + pt)/5)

// let family={
//     father: "Bruce",
//     mother: "Gladys",
//     son1: "Bruce",    
//     son1Family:{
//         wife: "Karla",
//         son: "Xavien"
//     }
// }
// let {father: b, mother: m, son1: bj, son1Family:{wife: k, son: x}}= family

// console.log(`I love ${k} and ${x}`)

// let nbaTeams = {
//     denverNuggets: "Denver Nuggets",
//     denverPlayers: {
//         pointGuard: "Jamall Murray",
//         shootingGuard: "Kentavious Caldwell Pope",
//         powerForward: "Aaaron Gordon",
//         center:"Nickolai Jokic",
//         smallForward:"Michael Porter, Jr."
//     },
//     phoenixSuns: "Phoenix Suns",
//     phoenixPlayers: {
//         pointGuard: "Chris Paul",
//         shootingGuard: "Cory Booker",
//         smallForward: "Myles Bridges",
//         center:"Deandra Ayton",
//         smallForward: "Cameron Johnson"
//     }
    
// }
// let {denverNuggets: dn,
//        denverPlayers: {
//          pointGuard: jm,
//          shootingGuard: kcp,
//          powerForward: ag,
//          center: nj,
//          smallForward: mpj
//     },
//      phoenixSuns: ps,
//        phoenixPlayers: {
//          pointGuard: cp,
//          shootingGuard: cb,
//          smallForward: mb,
//          center: da,
//          smallForward: cj
//     }
// } = nbaTeams

// console.log(`Tonight, we have the ${dn} and ${ps}`)
// console.log(`It features two of the NBA's elite players, ${cp} and ${nj}`)

// let student = (name, grade, school)=>{
//     let studenObj = {
//         name: name,
//         grade: grade, 
//         school: school
//     }
//     let {
//         name: n,
//         grade: g, 
//         school: s = "Fowler Middle School" 
//     } = studenObj

//     console.log(n, g, s)
// }

// student("Xavien Ruffin", 8)
// student("Jack Vogel", 6)
// student("Miles Austin", 5, "Mary Woodward ELementary")

// function name([firstName, lastName]){
//     console.log(firstName, lastName)
// }

// name(["Bruce", "Ruffin"])

// function nameObj({firstName, lastName}){
//     console.log(firstName, lastName)
// }
// nameObj({firstName: "Xavien", lastName: "Ruffin"})


// let [a, b] = [2, 3]
// console.log(a)
// console.log(b)

// let [c, d, e] = [2, 3, 4]
// console.log(a + b + c)


// function processString(x){
//     return [x, x.length]
// }
// console.log(processString("hello"))

// let [firstName, lastName="Ruffin"] = ["Brandon"]
// console.log(firstName)
// console.log(lastName)

// let ruffin = (firstName, lastName) =>{
//     return [firstName, lastName ="Ruffin"]
// }

// console.log(ruffin("Bruce"))
// console.log(ruffin("Karla"))

// let grade=(name, score)=>{
//     if(score>90){
//         console.log(`${name} has an A`)
//     }else if(score>80){
//         console.log(`${name} has a B`)
//     }else if(score>70){
//         console.log(`${name} has a C`)
//     }else if(score>60){
//         console.log(`${name} has a D`)
//     }else{
//         console.log(`${name} has an F`)
//     }
// }

// grade("Nick", 55)


// let divide = (x, y)=> console.log(x/y)
// divide(20,4)
// divide(25, 5)

// let multiply = (x, y)=>console.log(x * y)
// multiply(3, 3)




// let litbtn = document.getElementById("literal")
// litbtn.addEventListener("click", ()=>{
//     let litDiv = document.getElementById("lit-div")
//     litDiv.innerHTML= add(5, 4)

// })

// let add = (a, b)=> a + b
// let subtract = (a,b)=> a-b
// console.log(subtract(20, 10))

// let family = ["Bruce Ruffin", "Michael Ruffin", "Brandon Ruffin", "Gladys Ruffin"]
// family.forEach(e=> console.log(e))

// let number = [1, 2, 3, 4, 5, 6, 7]
// let times3 = number.map(e=> e*3)
// console.log(times3)


// let pass = (name, score)=>{
//     if(score>50){
//         console.log(`${name} passed the class`)}else{
//             console.log(`${name} failed the class`)
//         }
// } 
// pass("Emily", 44)


// let pass = 



// let litbtn = document.getElementById("literal")
// litbtn.addEventListener("click", ()=>{
//     console.log("Hello World")

// })


// let array = [1, 2, 3]

// let array2 = array.map(x => x * 3)
// console.log(array2)

// array.forEach(e  => console.log(e))


// let name = {
//     firstName: "Bruce",
//     lastName: "Ruffin"
// }

// console.log(`I am ${name.firstName} ${name.lastName}.`)

// let string = `I am 
// Prince`

// console.log(string)

