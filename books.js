/**
 * Created by asrmamrna on 23.09.2014.
 */

function booksFormatter() {
  var body = document.getElementsByTagName('body')[0];
  var text = document.getElementsByClassName('books');

  //do it for every book
  for (var textNumber = 0; textNumber<text.length; textNumber++){

    body.appendChild(book());

    var currentBook = body.lastChild;


    //get text of a book
    var bookText = text[textNumber].innerHTML;

    //set index from which start getting words
    var countFrom = 0;

    //this is a new text for a book
    var newText = '';

    //create element for managing page content
    var phantomPage = document.createElement('div');
    phantomPage.className = 'page';
    phantomPage.innerHTML = 'lololol';

    boofer.appendChild(phantomPage);

    //create first page in book
    var firstPage  = document.createElement('div');
    firstPage.className = 'page';
    boofer.appendChild(firstPage);

    //get all words before lasst ' ' in text;
    while (newText.length<bookText.lastIndexOf(' ')){

      //get untouched part of text for book
      var booferText = bookText.substr(newText.length, bookText.length - newText.length);

      //get the index of the nearest ' '
      var counter = booferText.indexOf(' ');

      var newWord = booferText.substr(countFrom, counter);

      //set everything before nearest ' ' and add ' ' after it.
      newText += newWord + ' ';

      textSetter(newWord);
      //alert the result of a book word by word
//      alert(newText);
    }

    function textSetter (word) {
      var lastPage = boofer.lastChild;

      phantomPage.innerHTML = lastPage.innerHTML + word + ' ';
      if (phantomPage.offsetHeight > 700){
        lastPage.innerHTML+= word + ' ';
      }
      else{
        var newPage = document.createElement('div');
        boofer.appendChild(newPage);
      }
      alert('lol');
    }

    // add the last word
    boofer.innerHTML = (newText + bookText.substr(bookText.lastIndexOf(' ')+1, bookText.length-(bookText.lastIndexOf(' ')+1)));
  }

}


//////////////////////////////////////////
//
//  New Book
//
//////////////////////////////////////////
function book(){
  var newBook = document.createElement('div');
  newBook.style.position = 'fixed';
  newBook.style.top = '60px';
  newBook.style.right = '20px';
  newBook.style.width = '80px';
  newBook.style.zIndex = 20;
  newBook.style.border = 'dashed green 2px';
  newBook.style.transition = '1s';
  newBook.innerHTML = 'fuck off';
  return newBook;
}

////////////////////////////////////////////
//
//  New Page
//
////////////////////////////////////////////
function page() {
  var newPage = document.createElement('div');
  newPage.className = 'page';
  return newPage
}