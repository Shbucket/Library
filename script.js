//
let myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function addBookToLibrary(title, author, pages, read) {
  let book1 = new book(title, author, pages, read);
  myLibrary.push(book1);
}

//Display books on page
function displayBooks() {
  const library = document.getElementsByClassName("library");

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

function openForm(){
  document.getElementById('popForm').style.display = 'block';
}
function closeForm(){
  document.getElementById('popForm').style.display = 'none';
}

const btn = document.querySelector('button');
btn.addEventListener("click", openForm())






addBookToLibrary('naruto','goat','345','read');

console.log(myLibrary);
displayBooks();
