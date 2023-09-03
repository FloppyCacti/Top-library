const myLibrary = ['one' , 'two', 'three'];

function Book() {
  // the constructor...
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

addBook.addEventListener('click', () => {

})

addBookToLibrary();