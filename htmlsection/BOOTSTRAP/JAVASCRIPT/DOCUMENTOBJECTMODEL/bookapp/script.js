function createbook(){
    let book_name=b_name.value;
    let author=b_author.value;
    let page=pages.value;
    let amount=price.value;
    let book={
        book_name,author,page,amount
     }
    //  console.log(book);
localStorage.setItem(book_name,JSON.stringify(book))
alert("book created")
}
function displaybook(book){
    let htmldata=`<div class="card" style="width: 18rem;">
    <div class="card-header">
      ${book.book_name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${book.author}</li>
      <li class="list-group-item">${book.page}</li>
      <li class="list-group-item">${book.amount}</li>
    </ul>
  </div>`
  result.innerHTML=htmldata

}


function findbook(){
 let search_book=search.value;
 console.log(search_book);
 let book=JSON.parse(localStorage.getItem((search_book)))
 if(book){
   displaybook(book)
 }
 else{
    console.log("not found");
 }

}
function allbooks(){
    alert("book")
    let books=[];
    for(let i=0;i<localStorage.length;i++){
        books.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
    console.log(books);
    let htmldata=""
    for(let book of books){
        htmldata+=`<div class="card" style="width: 18rem;">
        <div class="card-header">
          ${book.book_name}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${book.author}</li>
          <li class="list-group-item">${book.page}</li>
          <li class="list-group-item">${book.amount}</li>
        </ul>
      </div>`
    } 
    result.innerHTML=htmldata
 }  

//  to do,user name ,task name,completed status-true or false,create and list all button





