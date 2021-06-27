// key, value 
//username:luminar
// localStorage.setItem("username","luminar")
// console.log(localStorage.key(0));
// var uname=localStorage.getItem("username")
// console.log(uname);

// var pwd=localStorage.getItem("password")
// console.log(pwd);
// localStorage.removeItem("username")
// localStorage.removeItem("password")
// localStorage.clear()  // clear local storage


// localStorage.setItem("book_name", "alchemist")

// localStorage.key(0)
// "book_name"
// localStorage.setItem("book_price", "150")
// localStorage.key(1)
// "book_price"
// localStorage.key(0)
// "book_name"


// var book={
//     book_name:"randamoozham",
//     author:"mt vasudevan",
//     price:300,
//     pages:250
// }
// // localStorage.setItem(book.book_name,JSON.stringify(book))   

// // print the price of book alchemist
// var data=JSON.parse(localStorage.getItem("the alchemist"))
// console.log(data.price);




// var user={
//       username:"luminar",
//        email:"luminar@gmail.com",
//        password:"abc123",
//     }

// var user1={
//      username:"technolab",
//      email:"technolab@gmail.com",
//      password:"test123",
//     }

// localStorage.setItem(user.username,JSON.stringify(user))
// localStorage.setItem(user1.username,JSON.stringify(user1))


var uname="luminar";
var pwd="abc123";

var user=JSON.parse(localStorage.getItem("luminar"))
if(user.username==uname & user.password==pwd){
    console.log("login success");
}
else{
    console.log("login failed");
}