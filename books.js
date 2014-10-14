/**
 * Created by asrmamrna on 23.09.2014.
 */

function booksFormatter() {
  var text = document.getElementsByClassName('books');
  var boofer = document.createElement('div');
  boofer.style.position = 'fixed';
  boofer.style.top = '60px';
  boofer.style.right = '20px';
  boofer.style.width = '80px';
  boofer.style.zIndex = 20;
  boofer.style.border = 'dashed green 2px';
  boofer.style.transition = '1s';
  document.getElementsByTagName('body')[0].appendChild(boofer);

  //do it for every book
  for (var textNumber = 0; textNumber<text.length; textNumber++){

    //get text of a book
    var bookText = text[textNumber].innerHTML;

    //set index from which start getting words
    var countFrom = 0;

    //this is a new text for a book
    var newText = '';

    //get all words before lasst ' ' in text;
    while (newText.length<bookText.lastIndexOf(' ')){

      //get untouched part of text for book
      var booferText = bookText.substr(newText.length, bookText.length - newText.length);

      //get the index of the nearest ' '
      var counter = booferText.indexOf(' ');

      //set everything before nearest ' ' and add ' ' after it.
      newText += booferText.substr(countFrom, counter) + ' ';

      //alert the result of a book word by word
//      alert(newText);
    }

    // add the last word
    boofer.innerHTML = (newText + bookText.substr(bookText.lastIndexOf(' ')+1, bookText.length-(bookText.lastIndexOf(' ')+1)));
  }
}
