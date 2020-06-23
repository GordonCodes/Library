let myLibrary = []
const newBookBtn = document.querySelector("#newBookBtn");
const cardHolder = document.querySelector('#cardHolder');
const cards = document.querySelectorAll('.card');
const body = document.querySelector('body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('#submitBtn');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const pagesInput = document.getElementById('pagesInput')
const readInput = document.getElementById('readInput')

function book (title, author, pages, read) { //constructor function
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};




function render(){ //displays book info of all cards in the array
    for(i=0; i<myLibrary.length; i++){
        
        const titleToDisplay = document.createTextNode("TITLE: "+ myLibrary[i].title);
        const authorToDisplay = document.createTextNode("AUTHOR: "+ myLibrary[i].author);
        const pagesToDisplay = document.createTextNode("PAGES: "+ myLibrary[i].pages);
        const readToDisplay = document.createTextNode("PAGES READ: "+ myLibrary[i].read);

        

        const newDiv = document.createElement("div");
        const removeBtn = document.createElement('button')
        const updateBtn = document.createElement('button')
        removeBtn.textContent = "Remove";
        updateBtn.textContent = 'Update Pages';
        
        const cardId = 'card'+ i;

        updateBtn.addEventListener('click', ()=>{
            myLibrary[cardId.slice(-1)].read = prompt('How many pages have you read?');
            cardHolder.innerHTML = "" //clearing cardHolder followed by render resets the page
            render()
        })
       
        removeBtn.addEventListener("click",()=> {
            
            console.log(cardId.slice(-1));
            myLibrary.splice(cardId.slice(-1),1);
            document.querySelector('#' + cardId).remove();
            cardHolder.innerHTML = "" 
            render();
        })



        var br1 = document.createElement('br');
        var br2 = document.createElement('br');
        var br3 = document.createElement('br');
        var br4 = document.createElement('br');

       newDiv.classList.add('card');
       newDiv.id = cardId;

       newDiv.append(titleToDisplay);
       newDiv.append(br1);
       newDiv.append(authorToDisplay);
       newDiv.append(br2);
       newDiv.append(pagesToDisplay);
       newDiv.append(br3);
       newDiv.append(readToDisplay);
       newDiv.append(br4)
       newDiv.append(removeBtn);
       newDiv.append(updateBtn);

       cardHolder.append(newDiv)
    }
};

function addBookToLibrary(){ //displays form
    
    cardHolder.innerHTML = ""
    
    form.classList.remove('hide');
    form.classList.add('show');
    titleInput.value = '';
    authorInput.value ='';
    pagesInput.value ='';
    readInput.value ='';
   
};

newBookBtn.addEventListener("click", addBookToLibrary);

submitBtn.addEventListener("click", ()=>{ //takes info from form and puts them in a card
    
    let newTitle = titleInput.value;
    let newAuthor = authorInput.value;
    let newPages = pagesInput.value;
    let newRead = readInput.value;
    
    let BookToAdd = new book(newTitle, newAuthor, newPages, newRead);
    
    myLibrary.push(BookToAdd);
    
    render() //something is deleting the cards after the render
    
    form.classList.remove('show');
    form.classList.add('hide'); 
    
});


