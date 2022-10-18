// var p1 = document.getElementById("p1")

// p1.innerHTML = "Learning Modern JS"
// p1.style.background = "blue"
// p1.style.color = "white"
// p1.style.transform = "rotate(20deg)"

// var p2= document.getElementById("p2")
// p2.style.background = "green"
// p2.style.color = "white"
// p2.style.transform = "rotate(-20deg)"

// var dom = document.querySelector("div#dom")
// var para1 = dom.querySelector("p:first-child")


// var green = document.getElementsByClassName("green")



// // var p = document.createElement("p")
// // var domText = document.createTextNode("Paragraph 4")
// // p.appendChild(domText)
// // dom.appendChild(p)

// var firstP = dom.firstElementChild
// var secondP = firstP.nextElementSibling


// var ul = dom.querySelector("ul")

// var li3 = ul.firstElementChild.nextSibling.nextSibling

// var lilili = ul.children[4]


// var ulChildren = Array.from(ul.children)
// // console.log(ulChildren)
// ulChildren[0].innerHTML= "Traveling and Making Money"
// ulChildren[1].innerHTML ="Becoming a Software Engineer"
// ulChildren[2].innerHTML = "Owning a fitness platform"
// ulChildren[3].innerHTML = "Building multiple streams of income"
// ulChildren[4].innerHTML = "Having investment strategies"


// ulChildren[0].setAttribute("id", "blue")
// ulChildren[1].setAttribute("id", "fushia")
// ulChildren[2].setAttribute("id", "black")
// ulChildren[3].setAttribute("id", "orange")
// ulChildren[4].setAttribute("id", "teal")

// var ul = document.querySelector("ul")
// li=document.createElement("li")
// li.setAttribute("id", "violet")
// li.style.transform = "scaleY(1.5) "
// var liText = document.createTextNode("Leave fucking Oregon")
// li.appendChild(liText)
// ul.appendChild(li)


// var ul = document.querySelector("ul")


// ulChildren.forEach(function(li){
//     ul+="<li>Make a million dollar</li>"
//     // li.innerHTML += "<li>Make a million dollar</p>"
// })

// ul[0].innerHTML = "Travel amd Make Money"
// ul[1].innerHTML ="Becoming a Software Engineer"
// ul[2].innerHTML = "Owming a fitness platforn"
// ul[3].innerHTML = "Havimg multiple streams of income"

// var button1 = document.getElementById("turn-orange")
// // console.log(button1)
// button1.addEventListener("click", function(){
//   if( p1.style.background === "blue"){
//     p1.style.background = "orange"
//   }else{
//     p1.style.background = "blue"
//   }

//   if(p2.style.background === "green"){
//     p2.style.background = "orange"
//   }else{
//     p2.style.background = "green"
//   }
  

// //   p2.style.background = "yellow"
//  })

// var title = document.querySelector("h1")

// title.addEventListener("click", function(){
// var moveLeft = [
//   {transform: "translate(200px, 200px)"}

// ]
// var duration ={
//   duration: 3000,
//   iterations: 5
// }
 
// title.animate(moveLeft, duration)
// })

//  document.addEventListener("keydown", function(e){
//   console.log(e)
//   console.log(e.keyCode)
//   console.log(e.key)
//   console.log(String.fromCharCode(e.keyCode))
//   p3.style.background = "pink"
//  })

//  document.addEventListener("keyup", function(){
//   p3.style.background="teal"
//  })

// var mouse = document.getElementById("mouse")
// // console.log(mouse)
// document.addEventListener("mousemove", function(e){
//   mouse.style.left = e.pageX + "px"
//   mouse.style.top = e.pageY + "px"
// })

// document.addEventListener("scroll", function(){
//   var height = document.body.scrollHeight
//   // console.log(innerHeight)
//   var scrollUPAndDOwn = scrollY

//   var scrollPer =  scrollUPAndDOwn/height
//   console.log(scrollPer)

// })

// var focusEvent = document.querySelector("input#focus-event")
// focusEvent.addEventListener("focus", function(e){
//   console.log(e.target.value)
// })
// var timeOut
// document.addEventListener("mousemove", function(e){
//   clearTimeout(timeOut)
//   var timeOut = setTimeout(function(){
//     console.log("Hello World")
//     console.log(e.pageY)
//     console.log(e.pageX)
//   }, 500)
// })


var divMouse = document.querySelector("div#mouse")
var p = divMouse.querySelector("p")
var span = p.querySelector("span")

divMouse.addEventListener("click", function(){
    console.log("Div!")
}, true)

p.addEventListener("click", function(){
    console.log("Paragraph!")
}, true)

span.addEventListener("click", function(){
    console.log("Span!")
})

var ul = document.querySelector("ul")

ul.addEventListener("click", function(e){
    if(e.target && e.target.nodeName==="LI"){
        console.log("Hello WOrld")
    }
})

var li = document.createElement("li")
var liText = document.createTextNode("Leaving Fuckin Oregon")
li.appendChild(liText)
ul.appendChild(li)
// var lis= Array.from(ul.children)
// console.log(lis)
// lis.forEach(function(li){
//     li.addEventListener("click", function(){
//         li.style.background = "green"
//     })
// })
 


