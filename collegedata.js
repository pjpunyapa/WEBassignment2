const { resolve } = import('path');

//to create class with 2 parameter: students and courses
 class Data{
    constructor(students,courses){
        this.students=students;
        this.courses=courses;
    }
}

// declare data collection as a placeholder and put it as null for this stage 
var dataCollection=null;


//to get data from json files which are students.json and courses.json

 exports.initilize= function (){
    return new Promise((resolve, reject) => {
    const fs=require('fs')
   
//reading student and course file
    var student = () => JSON.parse(fs.readFileSync("Data\\students.json", "UTF8"));
    var Course = () => JSON.parse(fs.readFileSync("Data\\courses.json", "UTF8"));
    dataCollection=new Data(student(),Course())
    resolve
    reject("unable to read student.json");
})
    
}

//full array of students 

 exports.getAllStudents = function(){
    return new Promise((resolve, reject) => {
    if (dataCollection.length !== 0) {
        resolve(dataCollection.students);
    }else{
        reject("no results returned")
    }
})
}
//array of students where TA is True
 exports.getAs = function(){
    return new Promise((resolve, reject) => {
        
        if (dataCollection.length != 0) {
            var TAobj=[];
            for (let i = 0; i < dataCollection.students.length; i++) {
                if(dataCollection.students[i]["TA"]===true){
                    TAobj.push(dataCollection.students[i])
                }
              }
              resolve(TAobj)

        } else {
        reject(new Error("Failed to fetch data"));
        }
})
}
// full array of courses
 exports.getCOurses = function (){
    return new Promise((resolve, reject) => {
    if (dataCollection.length !== 0) {
        resolve(dataCollection.courses);
    }else{
        reject("no results returned")
    }
})
}