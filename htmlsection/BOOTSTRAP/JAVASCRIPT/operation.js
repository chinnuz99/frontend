// A.o(+,-,*,/,%,**)
//r.o(<,>,<=,>=,==,!=)
//logic.o(&,,^)
// ++,--

var i=0, j=0;
 for(let i=0;i<arr1.length;){
    for(let j=0;j<arr2.length;){
        if(arr1[i]==arr2[j]){
            console.log(arr1[i]);
        
        }
        else if(arr1[i]<arr2[j]){
            i++
            
            
        }
        else if(arr1[i]>arr2[j]){
            j++
            
        }

    }

 }

