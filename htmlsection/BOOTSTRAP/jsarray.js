//list=[], we can store both same and different types of objects, updation possible, order preserved,

// 
 
var expenses=[10000,15000,20000,"25000",35000,40000]
//expenses in march
console.log(expenses[2]);

expenses[1]=20000;
// console.log(expenses)

//iterate
for (let i=0;i<expenses.length;i++){
    console.log(expenses[i]);
}
//or 
//  for(let expen of expenses){
//      console.log(expen);
//  }

// add elements(elements added in last)
 expenses.push(35000)
 //remove elements(last element removed)
 expenses.pop()