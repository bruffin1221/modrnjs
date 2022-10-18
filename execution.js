// var h1 = document.getElementById("h1")

// var blurBtn = document.addEventListener("click", function(){
//     // h1.classList.add("blur")

//     if(h1.classList.contains("blur")){
//         h1.classList.remove("blur")
//     }else{
//         h1.classList.add("blur")
//     }
// })

// console.log(window)
// console.log(screen)

// var onAndOff = [
//     {transform: "translateX(0)"},
//     {opacity: "1.0"},
//     {opacity: "0.5"},
//     {opacity: "0"},
//     {transform: "translateX(1000px)"},
//     {opacity: "0"},
//     {opacity: "0.5"},
//     {opacity: "1.0"},
//     {transform: "translateX(0px)"}
// ]


// var duration = {
//     duration: 20000,
//     iteration: Infinity
// }



// var transform = document.getElementById("transform")
// var fading = document.getElementById("fading")

// transform.addEventListener("click", function(){
    
//     fading.animate(onAndOff, duration) 
//     // fading.animate(offAndOn, duration1)
// })

// hello()
// // hi()

// function hello(){
//     console.log("Hello World!")
//     hi()
// }

// function hi(){
//     console.log("Hi World!")
// }
// bye("John")()
// even(4)()
// function bye(a){

//     function name(){
//         console.log("Bye " + a + "!")
//     }
//     return name
// }


// function even(x){
//     function checkIfEven(){
//         if(x % 2===0){
//             console.log("The number is even")
//         }else{
//             console.log("It is odd")
//         }
//     }
//     return checkIfEven
// }

// var nameF ={
//     firstName: "Jane",
//     lastName: "Doe",
//     fullName: function(){
//        return "Hello "+ this.firstName+" "+ this.lastName + "!"
//     }

// }

// console.log(nameF.fullName())

colorRed = (function(){
  var red = [
    {background: "burlywood"},
    {background: "red"},
    {background: "burlywood"}
  ]
  return red
})();

var duration = (function(){
    var dur = {
        duration: 5000,
        iteration: 2

    }
    return dur
})();

 var pageElements = (function(){
    var elementArray = {
        divPrint: document.getElementById("print-name"),
        printBtn: document.getElementById("print")
    }
    return elementArray
})();



(function(red, timing, elements){
    
    elements.printBtn.addEventListener("mouseover", function(){
        elements.divPrint.animate(red, timing)
    })

    elements.printBtn.addEventListener("click", function(){

        var p = document.createElement("p")
        var hiJohn = document.createTextNode("Hi John!")
        p.appendChild(hiJohn)
        elements.divPrint.appendChild(p)
       
    })


})(colorRed, duration, pageElements)

console.log(this)

function scope(){
    console.log(this)
}