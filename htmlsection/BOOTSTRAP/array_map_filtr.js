// map()
// filter()
// reduce
// sort
// find
// some

// map
// var arr=[2,3,6,5,8,11,10]
// function square(num){
//     return num**2
// }
// var res=arr.map(square)
// console.log(res);
var arr=[2,3,6,5,8,11,10]
var res=arr.map(num=>num**2)
console.log(res);

//filter
//find even numbers from this array
var arr=[2,3,6,5,8,11,10]
var evens=arr.filter(num=>num%2==0)
console.log(evens);

// number greater than 5
var greatest=arr.filter(num=>num>5)
console.log(greatest);

//reduce
// print maximum element
var arr=[2,3,6,5,8,11,10]        //2,3  3high  ,3,6 6high,  6,5 6high
var max_element=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max_element);


// sort in ascending order
var  arr=[2,3,6,5,8,11,10] 
var srted=arr.sort((num1,num2)=>num1-num2)

//sum of array
var sum=arr.reduce((num1,num2)=>num1+num2)
console.log(sum);

//sort
var srted=arr.sort