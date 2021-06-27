var arr=[1,2,3,4];
//       0,1,2,3
//6(2,4)
//7(3,4)

var element=6;
var low=0, upp=arr.length-1;
while(low<=upp){
    let res=arr[low]+arr[upp];
    if(element==res){
        console.log(arr[low],arr[upp]);
        break;
    }
    else if(element>res){
        low++
    }
    else if(element<res){
        upp--

    }
}

//common elements
//binary search
// find gcd(14 and 63 divided by highest integer 7) of(14,63)
//(7*2=14  7*9=63)
// dictionary programs.
