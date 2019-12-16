//Library array
const myLibrary = [];
const table = document.getElementById("main-table");

// constructor function for boook
function Book(title, author, pages, read, bookID) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.bookID = bookID;
}

// handle collect data from user
function addBookToLibrary() {
  const author = document.getElementById("title").value;
  const title = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const option = document.getElementById("read");
  const read = option.options[option.selectedIndex].text;
  const bookID = myLibrary.length;

  if (author == "" || title == "" || pages == "") {
    showAlert("Please fill all fields", "danger");
  } else {
    // showAlert("You have added a new book to your library ", "success");
    const book1 = new Book(author, title, pages, read, bookID);
    myLibrary.push(book1);
    return true;
  }
}

//validation
function showAlert(message, className) {
  const div = document.createElement("div");

  if(className == 'danger'){
    div.className = `notification is-${className} error`;
    div.appendChild(document.createTextNode(message));    
    const container = document.querySelector(".box");
    const formHeading = document.querySelector(".form-header");
    container.insertBefore(div, formHeading);
  
  }else{
    const container = document.querySelector(".messages");
    container.appendChild(div);
    // container.insertBefore(div, formHeading);
  }
 
  //dissapear after 2s
  setTimeout(() => document.querySelector('.notifcation').remove(), 2000);
}

// handle add to library button
function collectInfo() {
  const btn = document.getElementById("add-book");
  btn.onclick = function() {
    if (addBookToLibrary()) {
      closeModal();
      render();
      showTable();
      resetTable();
    }
  };
}

// display library in the DOM
function render() {
  const list = document.querySelector("#table");
  const row = document.createElement("tr");

  for (let i = 0; i < myLibrary.length; i++) {
    row.setAttribute("data-book-id", i);
    row.innerHTML = `<td>${myLibrary[i].title}</td>
            <td>${myLibrary[i].author}</td>
            <td>${myLibrary[i].pages}</td>
            <td><button class="button is-dark is-small read-status">
            ${myLibrary[i].read}
            </button></td>
            <td><button class="button is-danger is-small remove-book" id="remove-btn-${myLibrary[i].bookID}"> 
            Remove from Library
            </button></td>
            `;
  }

  list.appendChild(row);
}

function isLibraryEmpty() {
  if (myLibrary.length == 0) {
    table.classList.add("hide");
  }
}

function showTable() {
  let checkLibraryText = document.getElementsByClassName("is-library-empty");
  table.classList.remove("hide");
  if (myLibrary.length >= 1) {
    for (let i = 0; i < checkLibraryText.length; i++) {
      checkLibraryText[i].classList.add("hide");
    }
  }
}

function removeBk() {
  document.querySelector("#table").addEventListener("click", e => {
    deleteBookFromLibrary(e.target);
  });
}

function deleteBookFromLibrary(el) {
  if (el.classList.contains("remove-book")) {
    const index = el.parentElement.parentElement.getAttribute("data-book-id");
    myLibrary.splice(myLibrary.indexOf[index], 1);
    el.parentElement.parentElement.remove();
  }

  showAlert('Book removed from library', 'warning');
}

function toggleBookStatus() {
  let index = event.target.parentElement.parentElement.getAttribute(
    "data-book-id"
  );
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

function resetTable() {
  let fieldsToClear = document.getElementsByClassName("input");
  for (let i = 0; i < fieldsToClear.length; i++) {
    fieldsToClear[i].value = "";
  }

  document.querySelector(".error").style.display = "none";
  
}

// handle form data collection
let modalOpen = document.getElementById("show-modal");
let modalClose = document.getElementById("modal-close");
let modals = document.getElementById("modal");
let cancelBtn = document.getElementById("cancel");
function closeModal() {
  modals.classList.remove("is-active");
}

modalOpen.onclick = function() {
  modals.classList.add("is-active");
};

modalClose.onclick = function() {
  closeModal();
};
cancelBtn.onclick = function() {
  closeModal();
};

// call functions
collectInfo();
isLibraryEmpty();
removeBk();
