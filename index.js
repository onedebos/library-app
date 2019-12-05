let myLibrary = [];

function Book(author, title, pages,read = 0){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

Book.prototype.read = function (){
    if(this.read = 0){
        console.log("Not read");
    }else if(this.read=1){
        console.log("read");
    }
}

// book1.prototype = Object.create(Book.prototype);
const book1 = new Book("JRR TOlkien","THe hobbit",295);

console.log(book1.author, book1.title, book1.pages, book1.read);





let modalOpen = document.getElementById('show-modal');
let modalClose = document.getElementById('modal-close');
let modals = document.getElementById('modal');

modalOpen.onclick = function (){    
    modals.classList.add('is-active');
}

modalClose.onclick = function (){
    modals.classList.remove('is-active');
}


