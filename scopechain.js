// function yourName(){
//     var myName
//     return{
//         setName: function(name){myName = name},
//         getName: function(){return myName}
//     }
  
   
// }

//  var johnSmith = yourName()
//  johnSmith.setName("John Smith")
//  console.log(johnSmith.getName())
 
// function add(){
//     var x
//     var y
//     return{
//         setNumbers: function(n, num){x = n
//             y = num 
//         },
//         getNumbers: function(){return x + y }
//     }    
// }

// var  equal9 = add()
// console.log(equal9)
// equal9.setNumbers(4, 5)
// console.log(equal9.getNumbers())

var n 

function f(x, y){
   
    n = function(){
        return x + y
    }
   
}
f(3, 4)
console.log(n())
 
var num

function ifEven(x){

    num = function(){
        if(x % 2===0){
            return x + " is even!"
        }else{
            return x + " is odd"
        }
    }

}

ifEven(4)
console.log(num())

ifEven(7)
console.log(num())

// function isItEven(n){
//     function check(){
//          if(n % 2===0){
//             console.log("Number is Even")
//         }else{
//             console.log("Number is odd")
//         }
//     }
//     return check
// }

// var twentyFive = isItEven()
// console.log(twentyFive(25))



// function a(){
//     console.log("Hello")
//     b()
// }
// function b(){
//     console.log("Hi!")
// }

// function c(){
//     console.log("Bye!")
// }
// a()
// c()



// var add = function(){
//     x=1
//     function add1(y){
//         return x+y
//     }
//     return add1
// }

// var g =  add()
// console.log(g(3))


//  function add1(){
//     var add = function(y){
//        return  y+1    
//     }
//     console.log(add(4))
// }

// add1()

// function add(x){
//     function number(y){
//         return x + y 
//     }
//     console.log(number(3))
// }

// add(5)


// var cubed = function(x){
//     function x3(){
//       return  x**3
//     }
//     console.log(x3())

// }

// cubed(3)
// cubed(2)
// document.addEventListener("keyup", function(e){
//     console.log(e)

// })
// console.log("Hello WOrld")


// function number(n){
//     var add1= function (){
//       return n + 1
//     }
//     console.log(add1())
// }
// number(4)
// number(4)

var grades = (function(name, yourPoints, totalPoints){
    

    function Assignment(){
    this.name = name,
    this.yourPoints = yourPoints,
    this.totalPoints = totalPoints
    
}

    var assignObj = new Assignment(name, yourPoints, totalPoints)
   
    var obj = {
        assignName: assignObj.name,
        pointsEarned: assignObj.yourPoints,
        pointsTotal: assignObj.totalPoints,
        percent:  function(){
            var calculate = this.pointsEarned/this.pointsTotal
            var getPercent = calculate.toFixed(2)
            var score = getPercent * 100
            return score+"%"
       }
    }

    return obj
    
    })();



var gradeElements =(function(){
    var elements ={
        inputName: document.querySelector("input#name"),
        inputYours: document.querySelector("input#your-points"),
        inputTotal: document.querySelector("input#points"),
        gradeBtn: document.getElementById("number-grade"), 
        divGrades: document.querySelector("div#grades"),
        ulList: document.querySelector("ul#list"),
        totalBtn: document.getElementById("total-grade"),
        pYourGrade: document.querySelector("p#your-grade")
    }
    return elements
   
})();

(function(myGrade, page){
    var scoresArray = []
   
    page.gradeBtn.addEventListener("click", function(){
        
        myGrade.assignName = gradeElements.inputName.value
        myGrade.pointsEarned = parseInt(gradeElements.inputYours.value)
        myGrade.pointsTotal = parseInt(gradeElements.inputTotal.value)
       

        var gradeObj= {
            name:  myGrade.assignName,
            studentPoints: myGrade.pointsEarned,
            totalPoints: myGrade.pointsTotal,
            percent:  myGrade.percent()
        }

        scoresArray.push(gradeObj)
        window.localStorage.setItem('user', JSON.stringify(scoresArray))
        
        var ourScores =  JSON.parse(window.localStorage.getItem('user'))
        var lastScore = ourScores[ourScores.length-1]
        var li =document.createElement("li")
        page.ulList.appendChild(li)
           li.innerHTML +=`
             ${lastScore.name}
             <br>
             ${lastScore.studentPoints}
             <br>
             ${lastScore.totalPoints}
             <br>
             ${lastScore.percent} 
             <br>
             <br>   
             `  
        
    })
    page.totalBtn.addEventListener("click", function(){
        var ourScores =  JSON.parse(window.localStorage.getItem('user'))
        var yourScores= ourScores.map(function(score){
            return score.studentPoints        
        })
       
       
        var theTotal = ourScores.map(function(score){
            return score.totalPoints        
        })

        var stuTotal = yourScores.reduce(function(previous, current){
            return previous + current
        })

        var toTotal = theTotal.reduce(function(previous, current){
            return previous + current
        })

        var totalDecimal = stuTotal/toTotal
        var myToGrade= totalDecimal.toFixed(2) * 100

        page.pYourGrade.innerHTML = `<h4>Your grade is ${myToGrade}%</h4>` 

       
    })
       
       
})(grades, gradeElements);

