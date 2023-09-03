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
const titleValue = document.querySelector('#bookTitle');
const authorValue = document.querySelector('#bookAuthor');
const pageValue = document.querySelector('#bookPages');
const haveReadValue = document.querySelector('#haveRead');
const cancelValue = document.querySelector('#cancelBtn')

addBook.addEventListener('click', () => {
  bookForm.showModal();
})

bookForm.addEventListener('submit',(event) => {
  event.preventDefault();

  const title = titleValue.value;
  const author = authorValue.value;
  const page = pageValue.value;

  if(title && author){
    const newBook = new Book(title, author, page)
    addBookToLibrary();

    titleValue.value = '';
    authorValue = '';
    pageValue = '';

  }
  bookForm.close();
})

cancelValue.addEventListener('click', (event) =>{
  event.preventDefault();

  bookForm.close();
})

addBookToLibrary();