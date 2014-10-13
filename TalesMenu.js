//////////////////////////////////
//
//Settings for Menu with Tales
//
/////////////////////////////////
function bottomMenu(){

  //getter for Tales menu
  var bottomMenu = document.getElementsByClassName('bottomMenu');

  //for every Tales menu
  for (var imgCounter = 0;imgCounter<bottomMenu.length;imgCounter++){

    //get parent
    var imgParent = bottomMenu[imgCounter].parentNode;

    //makes parent to show elements beyond it's borders
    imgParent.style.overflowX = 'show';

    //set background of a tales menu
    var talesBackGround = document.createElement('div');

    //background settings
    talesBackGround.style.height = window.innerHeight + 'px';
    talesBackGround.style.width = window.innerWidth + 'px';
    talesBackGround.style.position = 'absolute';
    talesBackGround.className = 'talesMenuBackground';
    talesBackGround.style.left = ((window.innerWidth - imgParent.offsetWidth)/2) * (-1) + 'px';
    talesBackGround.style.top = 0;

    //append background
    imgParent.appendChild(talesBackGround);

    //text getter
    var picTextA = bottomMenu[imgCounter].getElementsByTagName('a');

    //settings for text container
    var picText = document.createElement('div');
    picText.className = 'picText';

    //text setter
    for(var textCounter = 0; textCounter<picTextA.length;){
      picText.appendChild(picTextA[0]);
    }

    //pictures getter
    var bottomIMG = bottomMenu[imgCounter].getElementsByTagName('img');

    //settings for text container
    var picFrame = document.createElement('div');
    picFrame.className = 'picFrame';
    picFrame.appendChild(picText);
    picFrame.style.height = (bottomIMG[0].offsetHeight * 2 + 50) + 'px';
    picFrame.style.width = window.innerWidth * 0.9 + 'px';

    for (var imageCounter=0;imageCounter<bottomIMG.length;){
      picFrame.appendChild(bottomIMG[0]);
    }

    var mainPicFrame = document.createElement('div');
    mainPicFrame.className = 'mainPicFrame';
    mainPicFrame.style.width = window.innerWidth * 0.9 + 'px';
    mainPicFrame.style.left = ((window.innerWidth - imgParent.offsetWidth)/2) * (-1) +( window.innerWidth * 0.05 )+ 'px';

    mainPicFrame.appendChild(picFrame);

    imgParent.appendChild(mainPicFrame);
  }
}

///////////////////////////////
//
// Set book links on click
//
//////////////////////////////

function booksSetter(){

  //pics getter
  var books = document.getElementsByClassName('pic');

  for (
    var booksCounter = 0;
    booksCounter < books.length;
    booksCounter++)
  {
    //function on click on a book
    books[booksCounter].onclick = function () {
//      setBackground();//set background
      setLinks(
        this.getAttribute('fullBook'),
        this.getAttribute('abridgedBook')
      );//set links

//      alert(this.indexGetter);
    }
  }
}

/////////////////////////////////////
//background settings
////////////////////////////////////
function setBackground() {

  //create background
  var background = document.createElement('div');

  //background settings
  background.style.background = 'none repeat scroll 0 0 rgba(0, 0, 0, 0.6)';
  background.style.top = 0;
  background.style.left = 0;
  background.style.height = '100%';
  background.style.width = '100%';
  background.style.position = 'fixed';
  background.style.zIndex = 18;

  //if click on a background
  background.onclick = function () {
    //remove background
    document.getElementsByTagName('body')[0].removeChild(background);
    var linkContainer = document.getElementsByClassName('linkContainer');

    //remove all link containers
    for (var containersCounter = 0; linkContainer.length>containersCounter; containersCounter++){
      document.getElementsByTagName('body')[0].removeChild(linkContainer[containersCounter]);
    }
  };

  //append background
  document.getElementsByTagName('body')[0].appendChild(background);
}

////////////////////////////////
// Links settings
///////////////////////////////
function setLinks (fullBook, abridgedBook) {

  //create element
  var linkContainer = document.createElement('div');

  // settings to lnk container
  linkContainer.style.position = 'fixed';
  linkContainer.className = 'linkContainer';
  linkContainer.style.zIndex = 19;
  linkContainer.style.fontSize = '26px';
  linkContainer.style.fontWeight = 900;
  linkContainer.style.color = 'white';

  //create div for abriged version
  function abridgedVerion(){
    var element = document.createElement('div');
    element.className = 'abridged';
    return element;
  }
  linkContainer.appendChild(abridgedVerion());
  //linkContainer.innerHTML =
  //  '<a href="' +
  //  abridgedBook +
  //  '" target="_blank" style="color: white; text-decoration: none; text-align: center;">Сокращенная Книга</a>' +
  //  ' <br/>' +
  //  ' <a href="' +
  //  fullBook +
  //  '" target="_blank" style="color: white; text-decoration: none; text-align: center;">Целая книга</a>';
  setBackground();
  document.getElementsByTagName('body')[0].appendChild(linkContainer);
  linkContainer.style.width = 'auto';
  linkContainer.style.height = 'auto';
  linkContainer.style.padding = '30px';
  linkContainer.style.borderRadius = '7px';
  linkContainer.style.border = '1px solid black';
  linkContainer.style.textAlign = 'center';
  linkContainer.style.top = ((window.innerHeight / 2) - (linkContainer.offsetHeight / 2)) + 'px';
  linkContainer.style.backgroundColor = '#333333';
  linkContainer.style.left = ((window.innerWidth/2) - (linkContainer.offsetWidth / 2) ) + 'px';
  //linkContainer.onclick = function(){alert('lol')};
}