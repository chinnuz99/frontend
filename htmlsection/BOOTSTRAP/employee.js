// create employee object with eid:1000,ename:ram,desig:"developer",salary:30000
var employee={
    eid:1000,ename:"ram",designation:"developer",salary:30000
}
//print employee name
console.log(employee.ename);

//print employee   designation
console.log(employee.designation);

//update salary as 40000
employee["salary"]+=5000;

//chk for gender key is present if not add gender as male
console.log(employee.salary);

// word count prblm?
//ABABC first recursive character