// var buttons = document.getElementsByTagName("button")
// buttonArray = Array.from(buttons)

// // for(var i = 0; i< buttonArray.length; i++){
// //     buttonArray[i].addEventListener("click", function(e){
// //        console.log(e.target.textContent)
// //     })
// // }

// buttonArray.forEach(function(button){
//     button.addEventListener("click", function(e){
//         console.log(e.target.textContent)
//     })
// })

// cars= []

// function addNewCar(x){
//     cars.push(x)
//     // for(var i = 0; i<cars.length; i++){
//     //     console.log(i)
//     // }
//     console.log(cars[cars.length-1])
// }

// addNewCar()
// addNewCar("Toyota Camry")
// addNewCar("Kia Sorrento")
// addNewCar("Ford Explorer")
// addNewCar("Chevy Malibu")
// addNewCar("Honda Crv")
// addNewCar("Mercedes Benz")

var array = ["a", "b", "c", "d", "e"]

var car = ["Hyndui Santa Fe", "Toyota Camry", "Kia Sorrento","Honda Crv" ]
function findIndex(x, num){
    
    for(var i=0; i < x.length; i++){
        if(i===num){
            console.log(x[i-1])
        }
    }
}

findIndex(car, 1)

function indexOf(x, theIndex){

    for(var i = 0; i<x.length; i++){
        if(x[i]===theIndex){
            console.log(i + 1)
        }
    }
}

indexOf(car, "Toyota Camry")