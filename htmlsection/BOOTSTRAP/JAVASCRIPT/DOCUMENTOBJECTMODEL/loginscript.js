// var user={username:"luminar",password:"abc123"}
// localStorage.setItem(user.username,JSON.stringify(user))



function login(){
    let u_name=uname.value;
    let pwd=pswd.value;
    let user=JSON.parse(localStorage.getItem(u_name))
    if(user==null){
        alert("invalid username")
    }
    if(user.username==u_name & user.password==pwd){
        alert("login success")
    }
    else{
        alert("invalid password")
    }
}

