// find gcd(14 and 63 divided by highest integer 7) of(14,63)
//(7*2=14  7*9=63) 

var num1=14, num2=63;
for(let i=2;i<=num1;i++){   //i=1
    if(num1%i==0 & num2%i==0){  //14%2==0, 63%2==0, 14%3==0(false)
         console.log("factor"+i); 
        }    
    
}

// or
// var num1=63,num2=14;
// var low=0;
//  if(num1<num2){
//      low=num1;
//     }
// else{
//      low=num2;
//     }
// var factor=0;
// for(let i=2;i<=low;i++){
//     if(num1%i==0 & num2%i==0){
//         factor=i;
//     }
// }
// console.log(factor);










