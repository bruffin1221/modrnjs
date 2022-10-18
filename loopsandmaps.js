let cars = ["Honda CRV", "Hyndui Santa Fe", "Mercedes Benz", "Toyota Rav4"]

cars.fill("Suburu Forrestor", 0, 5)
console.log(cars)
// console.log(cars.find(value=> value)==="Toyota Carolla" )
// cars.find(value=>{
//     if(value==="Honda CRV"){
//         console.log("Honda CRV")
//     }
// })
// console.log(cars.indexOf("Honda CRV"))
// console.log(cars.indexOf("Toyota Rav4"))
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
numbers.fill(-1, 5)
console.log(numbers)
// numbers.copyWithin(4, 10)
// // numbers.copyWithin(1, 0, 1)
// console.log(numbers)
// console.log(numbers.indexOf(3))
// console.log(numbers.includes(4))
// console.log(numbers.findIndex(value=> value<10))
// console.log(numbers.find(value => value > 6))



// let karlaFam = Array.of("Karla Dettwyler", "Mark Dettwyler", "Arden Dettwyler")
// console.log(karlaFam)

// let broncoFootball = Array.of("Russell Wilson", "Dalton Risner", "Nick Chubb", "Courtland Sutton")
// console.log(broncoFootball)

// let randonShit = new Set()
// randonShit.add("Bruce Ruffin")
// randonShit.add(1)
// randonShit.add("Joshua Ruffin")
// randonShit.add("Digital Nomad")
// console.log(randonShit)
// let random = Array.from(randonShit)
// console.log(random)
// random.forEach(random => console.log(random))

// for(let x of random){
//     console.log(x)
// }

// let randomShit2 = new Map()
// randomShit2.set("father", "Bruce Ruffin, Sr.")
// randomShit2.set("mother", "Gladys Ruffin")
// randomShit2.set("son", "Bruce Ruffin")
// randomShit2.set("son2", "Joshiua Ruffin")
// console.log(randomShit2)
// let random2 = Array.from(randomShit2)
// console.log(random2)


// let hello = Array.from("hello")
// console.log(hello)
// console.log(Array.from(hello, x=> x + " "))

// let by2 = Array.from([1,2, 3], x=> x * 2)
// console.log(by2)

// power2 =Array.from([2, 3, 4], x=> x**2)
// console.log(power2)



// let object = {length: 4}
// console.log(Array.from(object))
// console.log(Array.from(object, value=> 3))
// console.log(Array.from(object, (value, index) => index * 3))
// function map(a, b){
//     console.log(Array.from(arguments))
// }
// map(3,4)


// let fruit =["apple", "orange", "grapes", "banana"]
// let fruitIt = fruit[Symbol.iterator]()
// console.log(fruitIt.next())
// console.log(fruitIt.next())
// console.log(fruitIt.next())
// console.log(fruitIt.next())
// console.log(fruitIt.next())

// let family=["Gladys Ruffin", "Bruce Ruffin", "DeWayne Ruffin", "Michael Ruffin", "Joshua Ruffin"]
// let famIt = family[Symbol.iterator]()
// console.log(famIt.next())
// console.log(famIt.next())
// console.log(famIt.next())
// console.log(famIt.next())
// console.log(famIt.next())
// console.log(famIt.next())
//  let son1 = Symbol("son")
// let son2 = Symbol("son")
// let son3 = Symbol("son")
// let son4 = Symbol("son")

// let family={
//     mother: "Gladys Ruffin",
//     father: "Bruce Ruffin",
//     [son1]: "DeWayne Ruffin",
//     [son2]: "Michael Ruffin",
//     [son3]: "Brandon Ruffin",
//     [son4]: "Joshua Ruffin"
// }




// console.log(family)
// console.log(Object.keys(family))
// console.log("-----------")
// console.log(Object.values(family))
// console.log("-----------")
// console.log(Object.getOwnPropertySymbols(family))
// const feature1 =Symbol("feature")
// const feature2 =Symbol("feature")

// let car ={
//     make: "Hyndui",
//     model: "Santa Fe",
//     year: 2021,
//     [feature1]: "air conditioning",
//     [feature2]: "automatic start"
// }

// console.log(car)



// let id = Symbol()
// console.log(id)

// let set = new Set()
// set.add(1)
// set.add("green")
// set.add(["soulful house", "deep house"])
// set.delete("green")
// console.log(set)
// console.log(set[1])

// for(const values of set.values()){
//    console.log(`${values}`)
// }

// for(const keys of set.keys()){
//     console.log(`${keys}`)
//  }

//  set.forEach(values=>console.log(values))

// let set1 = new Set(["geen", 1, 3, [1, 2, 3]])
// console.log(set1)
// console.log(set1.has("green"))

// let brothers = ["DeWayne", "Brandon", "Michaeal", "Joshua"]
// let children = ["Deonte", "Milaya", "Noriah", "Lilaka", "Nova", "Xavien", "Bella"]
// let [d, b, m, j]= brothers
// let [de, mi, no, l, na, x, be] = children

// let families = new Map()

// families.set(d,[x,be])
// families.set(b, [l, na])
// families.set(m,[de, mi, no])

// console.log(families.get(d))
// console.log(families.has(d[x]))
// // console.log(families)

// let michaelFamily={
//     father: "Michael Ruffin",
//     mother: "Misty",
//     children:["Deonte, Milaya, Javon, Noriah, Javon"]
// }


// let brandonFamily = {
//     father: "Brandon Ruffin",
//     mother: "Laura Ruffin",
//     children: ["Lilika", "Nova"]
// }

// let bruceFamily ={
//     father: "Bruce",
//     mother: "Karla",
//     children: ["Xavien", "Bella"]
// }
// let family = new Map()
// family.set("couple1", `${michaelFamily.father} and ${michaelFamily.mother}`)
// family.set("couple2", `${brandonFamily.father} and ${brandonFamily.mother}`)
// family.set("couple3", `${bruceFamily.father} and ${bruceFamily.mother}`)
// console.log(family)

// for(const [key, value] of family){
//     console.log(`${value}`)
// }
// console.log(family.keys)

// if(family.has("couple3")){
//     console.log(family.get("couple3"))
// }

// let family = new Map([["father", "Bruce Ruffin, Sr."], ["mother", "Gladys Ruffin"], ["son1", "DeWayne Ruffin"]])
// console.log(family)
// family.delete("father")
// console.log(family)
// family.clear()
// console.log(family)
// let colors = ["yellow", "green", "blue", "black", "brown"]

// for(const x of colors){
//     console.log(x)
// }
// console.log("--------------")

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(const x of numbers){
//     if(x< 5){
//         console.log(x)
//     }

// }

