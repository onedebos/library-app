//Library array
let myLibrary = [];

// constructor function for boook
function Book(title, author, pages,read = 'No'){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}
// handle collect data from user
function addBookToLibrary(){
    let author = document.getElementById('title').value;
    let title = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let option = document.getElementById('read');
    let read = option.options[option.selectedIndex].text;
    
    const book1 = new Book(author,title,pages,read);    
    myLibrary.push(book1);

}

// handle add to library button
function collectInfo(){
    let btn = document.getElementById('add-book');
    btn.onclick = function (){
        addBookToLibrary();
        render();
    }
}


// display library in the DOM
function render(){
    let tableBody = document.getElementById('table');
    let html = '';

    for(let i=0; i<myLibrary.length; i++){
    
        html += '<tr>'
        html += '<td>' + myLibrary[i].title  + '</td>'
        html += '<td>' + myLibrary[i].author  + '</td>'
        html += '<td>' + myLibrary[i].pages  + '</td>'
        html += '<td>' + myLibrary[i].read  + '</td>'
        html += '</tr>'

}

tableBody.innerHTML = html;

}


// handle form data collection
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



// call functions
collectInfo();
