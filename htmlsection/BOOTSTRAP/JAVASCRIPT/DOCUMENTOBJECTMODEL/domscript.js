// var current_url=document.URL;
// alert(current_url)


// var htwos=document.getElementsByTagName("h2");

// for(let tag of htwos){
//     tag.style.color="green";
// }

// var h_one=document.getElementById("one");
// h_one.style.color="red";


// var items=document.getElementsByTagName("li");
// for(let tag of items){
//     tag.style.color="blue"
// }


// var elements=document.getElementsByClassName("second");
// for(let tag of elements){
//     tag.style.color="cyan"
// }

var litems=document.querySelectorAll("li")
for(let tag of litems){
    tag.style.color="blue"
}

var htwo=document.querySelector("#one")
htwo.style.color="green"


var query=document.querySelectorAll(".third")
for(let tag of query){
    tag.style.color="red";
}

var meth=document.querySelector("#method")
meth.textContent="Document Object Model Methods"
meth.style.color="orange";
meth.innerHTML="<em>Document Object Model Methods</em>"
// text mode italics




