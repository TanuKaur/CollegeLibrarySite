
burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
search = document.querySelector(".search");
second_child = document.querySelector(".second-item");
burger.addEventListener("click", function () {
    navbar.classList.toggle("h-nav");
    search.classList.toggle("v-class");
    second_child.classList.toggle("v-class");
})
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}
function Display() {

}
Display.prototype.add = function () {
    console.log("Adding in UI");
    let bookinfo =localStorage.getItem("BooksInfo");
    let bookObj;
    if(bookinfo==null){
        bookObj=[];
    }
    else{
        bookObj=JSON.parse(bookinfo);
    }
    let tablebody=document.getElementById("tableBody");
    let uiString="";
 
    bookObj.forEach(function(element,index){
         uiString += `<tr>
                             <td>${element.name}</td>
                              <td>${element.author}</td>
                              <td>${element.type}</td>
                      </tr>`;
                  
    })
     
    tablebody.innerHTML=uiString         
}
Display.prototype.clear = function () {
    let libraryform = document.getElementById("libraryform");
    libraryform.reset();
}
Display.prototype.validate = function (book){
    if(book.name.length<3 || book.author.length<3){
        alert("You cannot add this book")
        return false;
    }
    else{ 
        return true;
    }
}
let libraryform = document.getElementById("libraryform");
libraryform.addEventListener("submit", formSubmit);
function formSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
    let name = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let fiction = document.getElementById("fiction");
    let cs = document.getElementById("cs");
    let cooking = document.getElementById("cooking");
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (cs.checked) {
        type = cs.value;
    }
    else  {
        type = cooking.value;
    }
    
    let book = new Book(name, author, type);
    console.log(book);
    let bookinfo =localStorage.getItem("BooksInfo");
    let bookObj;
    if(bookinfo==null){
        bookObj=[];
    }
    else{
        bookObj=JSON.parse(bookinfo);
    }
    bookObj.push(book);
    localStorage.setItem("BooksInfo", JSON.stringify(bookObj));
    let display = new Display();
    if (display.validate(book)){
    display.add();
    display.clear();
    alert("Your Book has been successfully added")
    }
}