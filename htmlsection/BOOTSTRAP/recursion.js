//ABABC first recursive character


  
  //ABBAC
  //ABAC

  var pattern="ABAC";
  var dict={};
  for(let char of pattern){
      //A
      if(char in dict){   //A B A
        console.log("first recursive character is"+char);  //A   
      }
      else{
          dict[char]=1;    //dict={A:1, B:1}
      }
  }

  //lst[],mutable
//   lst=[10,11,12,13]
//   lst=[10,11,20,21]
//   st1=set(lst)
//   st2=set(lst1)
//   op=st1.intersection(st2)

// linkedlist
//binary search tree   [10,11,12,13]  [10,13] [10]->[11]->[12]->[13]
// stack
// queue

 //angular
 
 
 



















 // function recur(fstchar){
//     if(!(fstchar)){
//         return fstchar;
//     }
//     else{
//         return recur(fstchar);
//     }
// }
// console.log(recur(fstchar));


// def recur_fibo(n):
//     if n<=1:
//         return n
//     else:
//         return recur_fibo(n-1)+recur_fibo(n-2)
// nterms=10                                      #nterms=int(input("enter number))
// if nterms<=0:
//     print("please enter a positive integer")
// else:
//     print("fibonacci sequence:")
//     for i in range(nterms):
//         print(recur_fibo(i))
