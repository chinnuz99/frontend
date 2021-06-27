// num=2;  3
//low=8;
//upp=25;

// 1,2,34,5,6,7,........25
//output 9,16,25   1,8
// 1**2=1    1**3=1
//2**2=4     2**3=8
//3**2=9     3**3=27
//4**2=16
//5**2=25
var  num=3, low=0, upp=30;
for(let i=1;i<=upp;i++){
    let res=i**num;
    if (res>=low & res<=upp){
        console.log(res);
    }

}
