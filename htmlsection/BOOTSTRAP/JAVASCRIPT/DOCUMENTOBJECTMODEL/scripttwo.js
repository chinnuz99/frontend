function display_value(num){
    let inputbox=document.getElementById("reslt");
    inputbox.value+=num
   }
   
   function evaluateExpression(){
       let cur_value=reslt.value;
       let res=eval(cur_value)
       reslt.value=res;
   }
   
   function clearbox(){
       reslt.value="";
   }
    function removeElement(){
        reslt.value=reslt.value.slice(0,-1)
    }
       
    