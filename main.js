const myLibrary = ['one' , 'two', 'three'];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const books = document.querySelector('.book-container');

function addBookToLibrary() {
  for(let i = 0; i < myLibrary.length; i++){
    const book = document.createElement('div');
    book.textContent = myLibrary[i];
    books.appendChild(book);
  }
}

const addBook = document.querySelector('.add-book');
const bookForm = document.querySelector('#bookForm');

addBook.addEventListener('click', () => {
  bookForm.showModal();
})

addBookToLibrary();