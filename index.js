//Library array
let myLibrary = [];
let table = document.getElementById('main-table');

// constructor function for boook
function Book(title, author, pages, read, bookID){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.bookID = bookID;
}

// handle collect data from user
function addBookToLibrary(){
    let author = document.getElementById('title').value;
    let title = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let option = document.getElementById('read');
    let read = option.options[option.selectedIndex].text;
    let bookID = myLibrary.length+1;
    

    const book1 = new Book(author,title,pages,read, bookID);    
    myLibrary.push(book1);

}

// handle add to library button
function collectInfo(){
    let btn = document.getElementById('add-book');
    btn.onclick = function (){
        addBookToLibrary();
        closeModal();
        render();
        showTable();
        resetTable();
        deleteBookFromLibrary();
    }
}


// display library in the DOM
function render(){

    let tableBody2 = document.getElementsByTagName('table')[0];
    let newRow = tableBody2.insertRow(1);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);

    for(let i=0; i<myLibrary.length; i++){
        newRow.setAttribute('data-book-id',i);

        cell1.innerHTML = myLibrary[i].title;
        cell2.innerHTML = myLibrary[i].author;
        cell3.innerHTML = myLibrary[i].pages;
        cell4.innerHTML ='<button class="button is-dark is-small read-status">' + myLibrary[i].read + '</button>';   
        console.log(myLibrary[i].bookID);
        cell5.innerHTML = '<button class="button is-danger is-small remove-book"> Remove from library </button>';



    }
}

function isLibraryEmpty(){
    if (myLibrary.length == 0){
        table.classList.add('hide');
    }
}



function showTable(){
    let checkLibraryText = document.getElementsByClassName('is-library-empty');
    table.classList.remove('hide');
    if (myLibrary.length >= 1) {
        for (let i=0; i<checkLibraryText.length; i++){
            checkLibraryText[i].classList.add('hide');
        }
    }
}

function removeBook(){
    const nonDeletedBooks = myLibrary.filter(function(book){
        book.id !== bookID;
    });

}

// const deleteBtns = document.querySelector(`#remove-btn${book.id}`);
// deleteBtns.addEventListener('click', deleteBookFromLibrary(book.id));

function deleteBookFromLibrary(bookId){
    // let removeBtn = document.getElementById('remove-btn');
    // removeBtn.addEventListener('click', removeBook);    
    // const nonDeletedBooks = myLibrary.filter(function(book){
    //     book.id !== bookID;
    //     myLibrary = nonDeletedBooks;
    // }); 

    // render();
    }
    

function toggleBookStatus(){
    // let unreadBtn = document.querySelectorAll('button');
    // let unreadBtn_arr = Array.from(unreadBtn);


    // let num =  event.target.parentElement.parentElement.getAttribute('data-book-id');

    // console.log(unreadBtn_arr[num]);
        let index = event.target.parentElement.parentElement.getAttribute("data-book-id");
        if (myLibrary[index]["read"] === "Read") {
            myLibrary[index]["read"] = "Unread";
            event.target.classList.remove("is-light");
            event.target.classList.add("is-dark");
        } else {
            myLibrary[index]["read"] = "Read";
            event.target.classList.add("is-light");
            event.target.classList.remove("is-dark");
        }
    
 
}

function resetTable(){
    let fieldsToClear = document.getElementsByClassName('input');
    for(let i=0; i < fieldsToClear.length;i++ ){
        fieldsToClear[i].value ="";
    }

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
isLibraryEmpty();