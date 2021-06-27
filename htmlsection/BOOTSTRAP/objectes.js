var person={
    id:100,
    age:28,
    name:"ram",
    bloodgroup:"ab+ve"
}
// name
console.log(person["name"]);
console.log(person.bloodgroup);
//update age as 30
person["age"]=30;
console.log(person);
// checking for gender key
if(!("gender" in person)){ //{gender not in person}
     person["gender"]="male"

}
console.log(person);



