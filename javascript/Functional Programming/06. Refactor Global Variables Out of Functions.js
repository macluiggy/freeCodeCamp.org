// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "PhilosophiĆ¦ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookListParameter, bookName) {

  return [...bookListParameter, bookName];
  
  // Change code above this line
}

// Change code below this line
function remove (bookListParameter, bookName) {
  var book_index = bookListParameter.indexOf(bookName);
  if (book_index >= 0) {

    //bookList.splice(book_index, 1);
    return bookListParameter.slice(0, book_index)
            .concat(bookListParameter.slice(book_index + 1));

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(newestBookList);