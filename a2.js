/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: __Punyapa Jongrak________________ Student ID: ____113241228_______ Date: ____02 February 2023____________
*
********************************************************************************/ 



const cd = require('./modules/collegedata.js');

try {

  
    cd.initilize()
    cd.getAllStudents().then(studentData => {
        console.log("successfully retrieved "+Object.keys(studentData).length+" students");
      });
    cd.getCOurses().then(courseData => {
        console.log("successfully retrieved "+Object.keys(courseData).length+" courses");
      });

    
    cd.getAs().then(taData => {
        console.log("successfully retrieved "+Object.keys(taData).length+" TAs");
      });
} 

catch(err) {

    console.log(err+"Could not be executed");

}

