// var studentInfo = function(name, school, grade){
//     var name, school, grade

//     function validEntry(password){
//         return password == "school123"
//     }

//     this.setName = function(x, password){
//         if(validEntry(password)){
//             return this.name = x
//         }else{
//             return "No access"
//         }
//     }

//     this.setSchool = function(x, password){
//         if(validEntry(password)){
//             return this.school = x
//         }else{
//             return "No access"
//         }
//     }

//     this.setGrade = function(x, password){
//         if(validEntry(password)){
//             return this.grade = x
//         }else{
//             return "No access"
//         }
//     }

//     this.getName = function(password){
//         if(validEntry(password)){
//             return this.name
//         }else{
//             return "No access"
//         }
//     }

//     this.getSchool = function(password){
//         if(validEntry(password)){
//             return this.school
//         }else{
//             return "No access"
//         }
//     }

//     this.getGrade = function(password){
//         if(validEntry(password)){
//             return this.grade
//         }else{
//             return "No access"
//         }
//     }

//     this.setName(name, "school123")
//     this.setSchool(school, "school123")
//     this.setGrade(grade, "school123")
// }

// var sophieAnderson = new studentInfo("Sophie Anderson", 3, "Grove Elementary School")
// sophieAnderson.school = "Fallon Elementary School"
// console.log(sophieAnderson)

// var studentInfo = function(name, grade, school){
//     this.setName(name),
//     this.setGrade(grade),
//     this.setSchool(school)
// }

// studentInfo.prototype ={ 
//     setName: function(name){
//         return this.name = name 
//     },
//     setGrade: function(grade){
//         return this.grade = grade 
//     },
//     setSchool: function(school){
//         return this.school = school 
//     },
//     getName: function(){
//         return this.name 
//     },
//     getGrade: function(){
//         return this.grade
//     },
//     getSchool: function(){
//         return this.school
//     }


// }

// var sophieAnderson = new studentInfo("Sophie Anderson", 3, "Darden Elementary")
// sophieAnderson.name = "Bryan Turner"
// console.log(sophieAnderson)
// sophieAnderson.setGrade(4)
// console.log(sophieAnderson.getGrade())
// console.log(sophieAnderson)

// var car = function(make, model, year){
//     this.setMake(make),
//     this.setModel(model),
//     this.setYear(year)
// }

// car.prototype = {
//     setMake: function(make){
//         return this.make = make
//     }, 
//     setModel: function(model){
//         return this.model = model
//     }, 
//     setYear: function(year){
//         return this.year = year
//     },
//     getMake: function(){
//         return this.make
//     }, 
//     getModel: function(){
//         return this.model
//     }, 
//     getYear: function(){
//         return this.year
//     }
// }

// var hondaCrv = new car("Honda", "CRV", 2017)
// console.log(hondaCrv)
// hondaCrv.setMake("Toyota")
// hondaCrv.setModel("Rav4")
// console.log(hondaCrv.getMake())
// console.log(hondaCrv.getModel())
// console.log(hondaCrv)
// var studentInfo =function(name, grade){
//     this.name=name, 
//     this.grade = grade

// }

// studentInfo.prototype ={
//     setName: function(name){
//         this.name = name
//     }, 
//     setGrade: function(grade){
//         this.grade = grade
//     }, 
//     getName: function(){
//         return this.name
//     },
//     getGrade: function(){
//         return this.grade
//     }
// }

// var johnSmith = new studentInfo("John Smith", 3)
// console.log(johnSmith)
// johnSmith.setGrade(4)
// console.log(johnSmith)
// johnSmith.setfirstName("Billy")
// console.log(johnSmith)
// var car = function(model, make, year, warranty){
//     this.model = model, 
//     this.make = make,
//     this.year = year, 
//     this.warranty = warranty || "3 years or 36,000 miles"
// }

// var santaFe = new car("Santa Fe", "Hundui",  2021)


// car.prototype.owner = "Bruce Ruffin"
// console.log(santaFe.owner)

// car.prototype.info= function(){
//     console.log(this.owner + " owns  a" + this.model + ".")
// }

// console.log(santaFe.info())