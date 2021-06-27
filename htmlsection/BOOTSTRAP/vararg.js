function add(...args){
    console.log(args);
    //args-[10,20,30,40]
    let sum=args.reduce((num1,num2)=>num1+num2)
    return sum
}
console.log(add(10,20,30,40))

//find maximum number
function findMax(...args){
    console.log(args);
    return args.reduce((num1,num2)=>num1>num2?num1:num2)
}
console.log(findMax(10,20,11,45,12));

//objects, arrays, arraymethod
// document object model