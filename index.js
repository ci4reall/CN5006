console.log("Hello World"); 

function EmployeeInfo(name, Salary)
{
    console.log("Welcome " + name+ "Your monthly Salary is "+ Salary)
}

console.log ("This is my first program")

var EmpName="John"
var EmpSalary= 50000

EmployeeInfo(EmpName,EmpSalary)

function EmployeeInfo(name,Salary)
{
    console.log("Wellcome " + name+ " Your monthly Salary is "+Salary)
}
console.log ("This is my first programe")
var EmpName="John"
var EmpSalary= 50000

EmployeeInfo(EmpName,EmpSalary)

const EmpSkills=  (skills)=> {
    console.log("Expert in "+ skills)
}
EmpSkills("java")

const student= require('./StudentInfo')
const person = require('./Person')
console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)
console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55) )
person1= new person("Jim","USA","myemail@gmail.com")
console.log("using Person Module", person1.getPersonInfo())
console.log("Programe ended")



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './SimpleCalculator'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator /> {/* Render the Calculator component */}
  </React.StrictMode>
);





