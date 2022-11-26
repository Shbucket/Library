//
let myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function addBookToLibrary(title, author, pages, read) {
  event.preventDefault();
  let book1 = new book(title, author, pages, read);
  myLibrary.push(book1);
  displayBooks();
}

//Display books on page
function displayBooks() {
  const library = document.getElementsByClassName("library");
  let index = 0;
  const removeDivs = document.querySelectorAll(".card");
  for (let i = 0; i < removeDivs.length; i++) {
    removeDivs[i].remove();
  }

  //Create Book Element
  myLibrary.forEach((myLibrarys) => {
    const card = document.createElement("div");
    card.classList.add("card");
    library[0].appendChild(card);

    //Create Remove book Button
    const removeBookButton = document.createElement("button");
    removeBookButton.classList.add("remove-book-button");
    removeBookButton.textContent = "Remove From Library";
    //Link the data attribute of the remove button to the array and card
    removeBookButton.dataset.linkedArray = index;
    index++;
    console.log("show me the current array:", myLibrary);
    card.appendChild(removeBookButton);

    //Remove Book Function
    removeBookButton.addEventListener("click", removeBook);

    function removeBook() {
      let retrieveBook = removeBookButton.dataset.linkedArray;

      console.log("attempting to remove", parseInt(retrieveBook));
      myLibrary.splice(parseInt(retrieveBook), 1);
      card.remove();
      displayBooks();
    }

    //Checks if book was read or not
    const readStatusButton = document.createElement("button");
    readStatusButton.classList.add("read-status-button");
    readStatusButton.textContent = "Toggle Read Status";

    readStatusButton.dataset.linkedArray = index;
    card.appendChild(readStatusButton);

    readStatusButton.addEventListener("click", toggleReadStatus);

    function toggleReadStatus() {
      let bookToggle = readStatusButton.dataset.linkedArray;
      book.prototype = object.create(book.prototype);
      const toggleBook = new book();
      if (myLibrary[parseInt(retrieveBook)].read == "Yes") {
        toggleBook.read = "No";
        myLibrary[parseInt(retrieveBook)].read == toggleBook.read;
      } else if (myLibrary[parseInt(retrieveBook)].read == "Yes") {
         toggleBook.read = "Yes";
         myLibrary[parseInt(retrieveBook)].read == toggleBook.read;
      }
      displayBooks()
    }
    //Grabs the info that needs to be displayed
    for (let key in myLibrarys) {
      console.log(`${key}: ${myLibrarys[key]}`);
      const para = document.createElement("p");
      para.textContent = `${key}: ${myLibrarys[key]}`;
      card.appendChild(para);
    }
  });
}

//create pop up form
function openForm() {
  document.getElementById("popForm").style.display = "block";
  document.getElementById("add").style.display = "none";
}
function closeForm() {
  document.getElementById("popForm").style.display = "none";
  document.getElementById("add").style.display = "block";
}

//take in user submitted data

function intakeForm() {
  let Title = document.getElementById("title").value;
  let Author = document.getElementById("author").value;
  let Pages = document.getElementById("pages").value;
  let Read = document.getElementById("read").value;
  addBookToLibrary(Title, Author, Pages, Read);
}

const btn = document.querySelector("button");
btn.addEventListener("click", openForm());

const submit = document.getElementById("submit");
submit.addEventListener("click", intakeForm());
