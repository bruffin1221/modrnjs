var formReturn =(function(firstName, lastName, saying, position, age){
    
    var formObj = function(){
        this.firstName = firstName, 
        this.lastName = lastName, 
        this.sayging = saying, 
        this.position = position, 
        this.age = age
    }

    var user = new formObj()

    return{
        fName: user.firstName,
        lName: user.lastName,
        age: user.age, 
        saying: user.saying,
        position: user.position,
        greeting: function(){
            return "Hello " + this.fName + "!"
        }
    }

})();

var htmlItems = (function(){

    var htmlObject = {
        firstName: document.getElementById("first-name"),
        lastName: document.getElementById("last-name"),
        age: document.getElementById("age"),
        saying: document.getElementById("saying"),
        position: document.getElementById("position"),
        infoBtn: document.getElementById("info-sub"),
        userProfile: document.getElementById("userProfile")
    }

    return htmlObject

})();

(function(userP, page){
//    console.log(userP)
//    console.log(page)

page.infoBtn.addEventListener("click", function(){
    // console.log(page.firstName.value)
    // console.log(page.lastName.value)
    // console.log(page.age.value)
    // console.log(page.saying.value)
    //  console.log(user.greeting())
    
    userP.fName = page.firstName.value
    userP.lName = page.lastName.value
    userP.age = page.age.value
    userP.position = page.position.value
    userP.saying = page.saying.value
    
        userProfile.innerHTML = `
        <p>Hello ${userP.greeting()}</p>
        <h2>${userP.fName} ${userP.lName}</h2>
        <h4>${userP.saying}</h4>
        <p>${userP.age}</p>
        <p>${userP.position}</p>`
    })

})(formReturn, htmlItems)



// var pastClsas={
//     score1: 40,
//     score2: 60,
//     score3: 45,
//     score4: 55,
//     averageScore: function(){
//        var totalScore = this.score1 + this.score2 + this.score3 + this.score4
//        theAverageScore = totalScore/4
//        if(theAverageScore>60){
//         console.log("You passed the class")
//        }else{
//         console.log("You failed the class.")
//        }
//     }

// }

// pastClsas.averageScore()




// var nameSpace ={
//     name: function(){
//         console.log("Hello Xavien Ruffin!")
//     }
// }
// nameSpace.name()

// var nameSpace1 ={
//     name: "Have a Great Day, Xavien Ruffin!"
// }

// console.log(nameSpace1.name)


