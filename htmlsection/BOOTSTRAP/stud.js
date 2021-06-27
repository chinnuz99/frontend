// var marks=[10,20,30,40]
//50
// marks.push(50);
// marks.pop()



 var arr1=[10,20,30,40];
 var arr2=[20,21,22,30];
// write a program to find common elements
for(let num1 of arr1){
    for (let num2 of arr2){
         if(num1==num2){
            console.log(num1);

        }
     }
}