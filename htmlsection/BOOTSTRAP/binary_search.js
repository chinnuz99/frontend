// binary search(sorted array.search,low,upp,mid)
//low=0,upp=arr.length-1,mid=Math.floor((low+upp)/2)


var arr=[7,8,9,10,12,14,15]
arr.sort((i,j)=>i-j)        //arr.sort((7,8)=>7-8)
var low=0,upp=arr.length-1,flag=0;
var element=18;
while(low<=upp){
    let mid=Math.floor((low+upp)/2)
    if(element>arr[mid])
    {
        low=mid+1;
    }
    else if(element<arr[mid])
    {
        upp=mid-1;
    }
    else if(element==arr[mid])
    {
        flag++;
        break;
    }
}    
if(flag==0)
{
    console.log("element not found");
}
else
{
    console.log("element found");
}





        
           
        
