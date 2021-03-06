const fs = require("fs");
var employeesArray = [];
var departmentsArray = [];

module.exports.initialize = function () {

    var promise = new Promise((resolve, reject) => {
       
        try {
            fs.readFile('./data/employees.json', (err, data) => {
                if (err) throw err;
                employeesArray = JSON.parse(data);
                console.log("Employees has been initialized");
            })

            fs.readFile('./data/departments.json', (err, data) => {
                if (err) throw err;
                departmentsArray = JSON.parse(data);
                console.log("Departments has been initialized");
            })

        } catch (ex) {
            console.log("Initialization failed");
            reject("Initialization failed");
        }
        console.log("Successfully initalized");
        resolve("Successfully initalized");
    })

    return promise;
};

module.exports.getAllEmployees = function () {

    var promise = new Promise((resolve, reject) => {
       if(employeesArray.length === 0) {
           var err = "function getAllEmployees() contains no data";
           reject({message: err});
       }  

    resolve (employeesArray);
    })
    return promise;
};

module.exports.getManagers = function () {

    var managersArray = [];
    var promise = new Promise((resolve, reject) => {
      
       for (var i=0; i < employeesArray.length; i++){
           if (employeesArray[i].isManager == true) {
            managersArray.push(employeesArray[i]);
           }
       }

       if(managersArray.length === 0) {
           var err = "function getManagers() contains no data";
            reject({managersArray: err});
       }  

    resolve (managersArray);
    })
    return promise;
};

module.exports.getDepartments = function () {

    var promise = new Promise((resolve, reject) => {
        if(departmentsArray.length === 0) {
            var err = "function getDepartments() contains no data";
            reject({message: err});
        }  
 
     resolve (departmentsArray);
     })
     return promise;
};