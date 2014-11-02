/**
 * Created by asrmamrna on 23.09.2014.
 */

function booksFormatter() {
  var body = document.getElementsByTagName('body')[0];
  var text = document.getElementsByClassName('books');

  //do it for every book
  for (var textNumber = 0; textNumber<text.length; textNumber++){

    body.appendChild(book());

    // get the book to fill with text
    var currentBook = body.lastChild;

    //get text of a book
    var bookText = text[textNumber].innerHTML;

    //set index from which start getting words
    var countFrom = 0;

    //this is a new text for a book
    var newText = '';

    //set the first page for the book. This page is temporal.
    currentBook.appendChild(page());

    var phantomPage = currentBook.getElementsByClassName('page')[0];

    //create first page in book. This page is permanent.
    currentBook.appendChild(page());

    //get all words before last ' ' in text;
    while (newText.length<bookText.lastIndexOf(' ')){

      // get div of current page
      var currentPage = currentBook.lastChild;

      //get untouched part of text for book
      var booferText = bookText.substr(newText.length, bookText.length - newText.length);

      //get the index of the nearest ' '
      var counter = booferText.indexOf(' ');

      var newWord = booferText.substr(countFrom, counter);

      //set everything before nearest ' ' and add ' ' after it.
      newText += newWord + ' ';

      textSetter(newWord, currentPage, phantomPage, currentBook);
      //alert the result of a book word by word
//      alert(newText);
    }

    pagePosition(currentBook);
    currentBook.removeChild(phantomPage);

   // add the last word
   //
   //
   //
   //
   // currentBook.innerHTML = (newText + bookText.substr(bookText.lastIndexOf(' ')+1, bookText.length-(bookText.lastIndexOf(' ')+1)));
  }

}


////////////////////////////////////////////
//
//  New Book
//
////////////////////////////////////////////
function book(){
  var newBook = document.createElement('div');
  newBook.style.position = 'fixed';
  newBook.style.top = '60px';
  newBook.style.left = '20px';
  newBook.style.width = '800px';
  newBook.style.height = '300px';
  newBook.style.zIndex = 20;
  newBook.style.border = 'dashed green 2px';
  newBook.style.transition = '1s';
  newBook.className = 'newBook';
  return newBook;
}

/////////////////////////////
//
//  New Page
//
/////////////////////////////
function page() {
  var newPage = document.createElement('div');
  newPage.className = 'page';
  return newPage
}


/////////////////////////////////
//
// Set new word into book's page
//
/////////////////////////////////

function textSetter (word, currentPage, phantomPage, currentBook) {

  phantomPage.innerHTML = currentPage.innerHTML + word + ' ';
  if (phantomPage.offsetHeight < 298){
    currentPage.innerHTML+= word + ' ';
  }
  else{
    currentBook.appendChild(page());
    var newPage = currentBook.lastChild;

    newPage.innerHTML = word + ' ';
    phantomPage.innerHTML = word + ' ';
  }
}

//////////////////////////////////////
//
// Set position for pages in book
//
//////////////////////////////////////

function pagePosition(book) {

  //get current book
  var children = book.childNodes;

  var positioner = 1;

  for (var pages = 0; pages<children.length; pages++){
    if (positioner>1)
      positioner = 0;
    children[pages].style.left = (positioner * children[pages].offsetWidth)  + 'px';
    positioner++;
  }
}