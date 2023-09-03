const myLibrary = [[
  author = "J.K. Rollings",
  haveRead = false,
  pages = "123",
  title = "Harry Potter"
]];

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
const cancelValue = document.querySelector('#cancelBtn');

addBook.addEventListener('click', () => {
  bookForm.showModal();
})

bookForm.addEventListener('submit',(event) => {
  event.preventDefault();

  const title = titleValue.value;
  const author = authorValue.value;
  const page = pageValue.value;
  const haveRead = haveReadValue.checked; 

  if(title && author){
    const newBook = new Book(title, author, page);
    newBook.haveRead = haveRead;
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

  titleValue.value = '';
  authorValue = '';
  pageValue = '';
  haveReadValue.checked = false;

  bookForm.close();
})


function displayLibrary() {
  booksContainer.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const bookDivContainer = document.createElement('div');
    bookDivContainer.style.display = 'flex';

    const bookDiv = document.createElement('div');
    bookDiv.setAttribute('data',index);
    bookDiv.textContent = `Book ${index + 1}: ${book.title} by ${book.author}, ${book.pages} pages.`;

    const bookDel = document.createElement('button');
    bookDel.style.width = '100px';
    bookDel.style.height = '25px';
    bookDel.textContent = 'Delete';
    bookDel.style.marginLeft = 'auto';

    if (book.haveRead) {
        bookDiv.textContent += ' (Read)';
    } else {
        bookDiv.textContent += ' (Not Read)';
    }

    bookDel.addEventListener('click',createDeleteHandler())

    booksContainer.appendChild(bookDivContainer);
    bookDivContainer.appendChild(bookDiv);
    bookDivContainer.appendChild(bookDel);
  });
}

function createDeleteHandler(index) {
  return (event) => {
    event.preventDefault();
    myLibrary.splice(index, 1);
    displayLibrary();
  };
}

displayLibrary()