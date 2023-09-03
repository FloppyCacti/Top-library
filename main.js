const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = false;
}

const booksContainer = document.querySelector('.book-container');
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
    const newBook = new Book(title, author, page);
    myLibrary.push(newBook);

    titleValue.value = '';
    authorValue.value = '';
    pageValue.value = '';
    haveReadValue.checked = false;

    displayLibrary();
  }
  bookForm.close();
})

cancelValue.addEventListener('click', (event) =>{
  event.preventDefault();

  titleValue.value = '';
  authorValue = '';
  pageValue = '';
  haveReadValue.checked = false;

  bookForm.close();
})


function displayLibrary() {
  booksContainer.innerHTML = '';

  myLibrary.forEach((book, index) => {
      const bookDiv = document.createElement('div');
      bookDiv.textContent = `Book ${index + 1}: ${book.title} by ${book.author}, ${book.pages} pages.`;

      if (book.haveRead) {
          bookDiv.textContent += ' (Read)';
      } else {
          bookDiv.textContent += ' (Not Read)';
      }

      booksContainer.appendChild(bookDiv);
  });
}

addBookToLibrary();