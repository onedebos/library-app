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
        closeModal();
        render();
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


        cell1.innerHTML = myLibrary[i].title;
        cell2.innerHTML = myLibrary[i].author;
        cell3.innerHTML = myLibrary[i].pages;
        cell4.innerHTML = myLibrary[i].read;
        cell5.innerHTML = '<button class="button is-light"> Delete </button>';   


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
