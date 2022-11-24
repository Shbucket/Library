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

  const removeDivs = document.querySelectorAll(".card");
  for (let i = 0; i < removeDivs.length; i++) {
    removeDivs[i].remove();
  }

  myLibrary.forEach((myLibrary) => {
    const card = document.createElement("div");
    card.classList.add("card");
    library[0].appendChild(card);
    for (let key in myLibrary) {
      console.log(`${key}: ${myLibrary[key]}`);
      const para = document.createElement("p");
      para.textContent = `${key}: ${myLibrary[key]}`;
      card.appendChild(para);
    }
  });
}

//create pop up form
function openForm() {
  document.getElementById("popForm").style.display = "block";
}
function closeForm() {
  document.getElementById("popForm").style.display = "none";
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
