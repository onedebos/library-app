let myLibrary = [];

function Book(title, author, pages,read = 'No'){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    let author = document.getElementById('author').value;
    let title = document.getElementById('title').value;
    let pages = document.getElementById('pages').value;
    let option = document.getElementById('read');
    let read = option.options[option.selectedIndex].text;
    
    const book1 = new Book(author,title,pages,read);    
    myLibrary.push(book1);

}

function collectInfo(){
    let btn = document.getElementById('add-book');
    btn.onclick = function (){
        addBookToLibrary();
        console.log(myLibrary);
    }
}






let modalOpen = document.getElementById('show-modal');
let modalClose = document.getElementById('modal-close');
let modals = document.getElementById('modal');
let cancelBtn  = document.getElementById('cancel');
function closeModal (){
    modals.classList.remove('is-active');
}

modalOpen.onclick = function (){    
    modals.classList.add('is-active');
}

modalClose.onclick = function (){closeModal()};
cancelBtn.onclick = function () {closeModal()};




collectInfo();