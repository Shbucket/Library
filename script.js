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
  const removeBookButton = document.createElement('button');
  removeBookButton.classList.add('remove-book-button');
  removeBookButton.textContent = 'Remove From Library'
  console.log('show me the current array:', myLibrary);




  myLibrary.forEach((myLibrarys) => {
    
    const card = document.createElement("div");
    card.classList.add("card");
    library[0].appendChild(card);

    //Create Remove book Button 
    const removeBookButton = document.createElement("button");
    removeBookButton.classList.add("remove-book-button");
    removeBookButton.textContent = "Remove From Library";
    console.log("show me the current array:", myLibrary);





    index++;
    const num = document.createElement("h1");
    num.textContent = index;
    card.appendChild(num);
    card.appendChild(removeBookButton)

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
