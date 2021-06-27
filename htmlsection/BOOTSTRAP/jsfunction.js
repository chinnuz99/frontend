// function in javascript

// def function_name(param1,param2,,,);
//definition

function add(num1,num2){
    return num1+num2;
}
console.log(add(10,20));


//factorial of a number
function factorial(num){
    let fact=1;
    for(let i=1;i<=num;i++){
        fact*=i;
    }
    return fact
}
console.log(factorial(6));

//or
// var res=factorial(6)
//console.log(res);