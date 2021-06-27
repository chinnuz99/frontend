function createtodo(){
    let user_name=uname.value;
    let task_name=tname.value;
    let status_completed=completed.value;
    let todo={
        user_name,task_name,status_completed
    }
localStorage.setItem(user_name,JSON.stringify(todo))
alert("created")
}
function display_details(todo){
    let htmldata=`<div class="card" style="width: 18rem;">
    <div class="card-header">
      ${todo.user_name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${todo.task_name}</li>
      <li class="list-group-item">${todo.status_completed}</li>
     </ul>
  </div>`
  display.innerHTML=htmldata

}
function find_details(){
    let search_details=search.value;
    console.log(search_details);
    let todo=JSON.parse(localStorage.getItem((search_details)))
    if(todo){
       display_details(todo)
    }
    else{
        console.log("not found");
    }

}

function all_details(){
    alert("todo")
    let todos=[];
    for(i=0;i<localStorage.length;i++){
        todos.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
    console.log(todos);
    let htmldata=""
    for(let todo of todos){
        htmldata+=`<div class="card" style="width: 18rem;">
        <div class="card-header">
          ${todo.user_name}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${todo.task_name}</li>
          <li class="list-group-item">${todo.status_completed}</li>
         </ul>
      </div>`
    }
    display.innerHTML=htmldata
}
