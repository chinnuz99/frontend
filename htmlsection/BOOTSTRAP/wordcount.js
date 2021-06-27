//wordcount

var text="hai hello how hai hello";
var words=text.split(" ")
var dict={}
for(let word of words){1
    if(!(word in dict)){
        dict[word]=1
    }
    else{
        dict[word+=1]
    }
}
console.log(dict);

//or
// text.split(" ").map(word=>word in dict?dict[word]+=1:dict[word]=1)
// console.log(dict);


// es5 es6
//ECMA5 
// arrow function-array methods,map,filter,reduce,sort,find,some
