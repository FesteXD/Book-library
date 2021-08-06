const booksGrid = document.getElementById("books-grid");
const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");
const pagesInput = document.getElementById("pages-input");
const statusInput = document.getElementById("status-input");
const addButton = document.getElementById("add-button")


let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}


function addBookToLibrary() {
    if (titleInput.value != "" && authorInput.value != "" && pagesInput.value) {
        const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, statusInput.value)
        myLibrary.push(newBook);
        displayBook()
    }
    else alert("Please type title, author, number of pages and status of your book")
    
}
const removeBook = (index) => {
    myLibrary.splice(index, 1);
    displayBook();
}

function displayBook() {
    while (booksGrid.firstChild) {
        booksGrid.firstChild.remove();
    }
    
    
    
    
    for (i = 0; i < myLibrary.length; i++) {
        
        let bookDiv = document.createElement('div');
        bookDiv.className = 'book-card';
        bookDiv.setAttribute("data-index", i)
        booksGrid.appendChild(bookDiv); 
        
        const titleH2 = document.createElement('h2');
        const authorH2 = document.createElement('h2');
        const pagesH2 = document.createElement('h2');
        const statusButton = document.createElement('button')
        const removeButton = document.createElement('button')
        
        statusButton.setAttribute("class", "status-button")
        removeButton.setAttribute("id", "remove-button")
        
        
        titleH2.textContent = myLibrary[i].title
        authorH2.textContent = myLibrary[i].author
        pagesH2.textContent = myLibrary[i].pages + " pages"
        removeButton.textContent = "Remove"
        
        
        bookDiv.appendChild(titleH2)
        bookDiv.appendChild(authorH2)
        bookDiv.appendChild(pagesH2)
        bookDiv.appendChild(statusButton)
        bookDiv.appendChild(removeButton)
        
        const currentIndex = Number(removeButton.parentNode.getAttribute("data-index"))
        
        removeButton.addEventListener('click', () => {
            console.log(currentIndex)
            removeButton.parentNode.remove();
            removeBook(currentIndex)
            
        }
        )
        const status = () => {
            if (myLibrary[i].status == "Yes") { 
                statusButton.textContent = "Read"
                statusButton.style.backgroundColor = "#72ff72";
            }
            else  { 
                statusButton.textContent = "Not read"
                statusButton.style.backgroundColor = "#f3f97b";
            }
        }
        
        status()
        
        statusButton.addEventListener('click', () => {
            if (statusButton.textContent == "Read") {
                statusButton.textContent = "Not read"
                statusButton.style.backgroundColor = "#f3f97b";
                myLibrary[currentIndex].status = "No"
            }
            else {
                statusButton.textContent = "Read"
                statusButton.style.backgroundColor = "#72ff72";
                myLibrary[currentIndex].status = "Yes"
            }
        })
    }
       
}

addButton.addEventListener('click', addBookToLibrary)

