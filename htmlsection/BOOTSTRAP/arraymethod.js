//create a js function for find cube of a number
// function cube(num){
//     return num**3;
// }
// function add(num1,num2){
//     return num1+num2
// }

 var cube=(num)=>num**3   //(cube lambda function)

 var add=(num1,num2)=>num1+num2
 var sq=num=>num**2

 console.log(cube(3));
 console.log(add(10,20))
 console.log(sq(3));

 //create a function that will return largets of two number

 function largestAmongTwo(num1,num2){
     if(num1>num2){
         return num1
     }
     else{
         return num2
     }
 }
 var largest=(num1,num2)=>num1>num2?num1:num2      //(? for(if)  and : for(else))
 console.log(largest(40,50));

 // return odd or even?
 var numchk=num=>num%2==0?"even":"odd"
 console.log(numchk(15));

//map, filter
 //map,filter,reduce ,some find

 // angular,react frontend(javascript)
 //node, express.js(javascript)