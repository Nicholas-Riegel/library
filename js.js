// array: library

let myLibrary = [];

// permanent members of the library

const b1 = new Book('The Hobbit', 'J.R.R. Tolkien', '1937');
myLibrary.push(b1);

const b2 = new Book('Moby Dick', 'Herman Melville', '1851');
myLibrary.push(b2);

const b3 = new Book('War and Peace', 'Leo Tolstoy', '1869');
myLibrary.push(b3);

// constructor: for books

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = false;
    this.info = function(){
        return this.title + ", "+this.author+", "+this.year+".";
    }
}

// function: prints books in myLibrary to page

function printBooksToPage(){
    for (let i=0; i<myLibrary.length; i++){
        
        let div = document.createElement('div');
        div.setAttribute('id', i)
        
        let p = document.createElement('p');
        p.textContent = myLibrary[i].info();

        let chkbox = document.createElement('input');
        chkbox.setAttribute('type', 'checkbox');
        chkbox.setAttribute('name', 'checkbox');
        chkbox.addEventListener('change', read)

        let label = document.createElement('label');
        label.setAttribute('for', 'checkbox');
        label.textContent = 'Read';

        if (myLibrary[i].read === true){
            chkbox.checked = true;
        }

        let btn = document.createElement('button');
        btn.textContent = 'Delete';
        btn.addEventListener('click', delBook)
        
        div.appendChild(p)
        div.appendChild(chkbox)
        div.appendChild(label)
        div.appendChild(btn)
        document.getElementById('library').appendChild(div);
    }
}
printBooksToPage();

// function to mark as 'read'

function read(x){
    if (x.currentTarget.checked === true){
        myLibrary[x.currentTarget.parentNode.id].read = true;
    }
    else {
        myLibrary[x.currentTarget.parentNode.id].read = false;
    }
}
// function delete book

function delBook(x){
    myLibrary.splice(x.currentTarget.parentNode.id, 1)
    let arr1 = document.getElementById('library').childNodes;
    while (arr1[0]){
        document.getElementById('library').removeChild(arr1[0])
    }
    printBooksToPage();
}

// event listener to make form

document.getElementById('setForm').addEventListener('click', createForm);

// variable to prevent multiple clicks of 'add new book'

let x = 0;

// function create form

function createForm(){
    if (x===1){
        return ;
    }
    else {
        let div1 = document.createElement('div');
        div1.setAttribute('id', 'div1')
        document.getElementById('form').appendChild(div1)
        
        let label1 = document.createElement('label');
        label1.textContent = 'Title:';
        document.getElementById('div1').appendChild(label1);

        let input1 = document.createElement('input');
        input1.setAttribute('id', 'title');
        input1.setAttribute('type', 'text');
        document.getElementById('div1').appendChild(input1);

        let div2 = document.createElement('div');
        div2.setAttribute('id', 'div2')
        document.getElementById('form').appendChild(div2)

        let label2 = document.createElement('label');
        label2.textContent = 'Author:';
        document.getElementById('div2').appendChild(label2);

        let input2 = document.createElement('input');
        input2.setAttribute('name', 'author');
        input2.setAttribute('id', 'author');
        document.getElementById('div2').appendChild(input2);

        let div3 = document.createElement('div');
        div3.setAttribute('id', 'div3')
        document.getElementById('form').appendChild(div3)
        
        let label3 = document.createElement('label');
        label3.textContent = 'Year:';
        document.getElementById('div3').appendChild(label3);

        let input3 = document.createElement('input');
        input3.setAttribute('name', 'year');
        input3.setAttribute('id', 'year');
        document.getElementById('div3').appendChild(input3);

        let submitBtn = document.createElement('button');
        submitBtn.setAttribute('id', 'submit');
        submitBtn.textContent = 'Submit';
        submitBtn.addEventListener('click', submit);
        document.getElementById('form').appendChild(submitBtn);

        x=1;
    }
}

//function submit

function submit(){
    let book = new Book();
    book.title = document.getElementById('title').value;
    book.author = document.getElementById('author').value;
    book.year = document.getElementById('year').value;
    myLibrary.push(book);

    let arr1 = document.getElementById('library').childNodes;
    while (arr1[0]){
        document.getElementById('library').removeChild(arr1[0])
    }
    printBooksToPage()
    x=0;
    let arr2 = document.getElementById('form').childNodes;
    while (arr2[0]){
        document.getElementById('form').removeChild(arr2[0])
    }
}

