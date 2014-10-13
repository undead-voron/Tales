/**
 * Created by asrmamrna on 01.10.2014.
 */

function windowResizer() {

  //////////////////////////////////
  //
  // Set main blocks height
  //
  /////////////////////////////////

  //get main blocks
  var blocks = document.getElementsByClassName('viewpoint');

  //set height for all main blocks
  for (var blocksLength = 0; blocksLength < blocks.length; blocksLength++) {
    blocks[blocksLength].style.height = window.innerHeight + 'px';
  }

  //////////////////////////////////
  //image block background resizer
  //////////////////////////////////
  var talesBackGround = document.getElementsByClassName('talesMenuBackground');

  for (var backgroundCount = 0; talesBackGround.length > backgroundCount; backgroundCount++){
    var imgParent = talesBackGround[backgroundCount].parentNode;
    talesBackGround[backgroundCount].style.height = window.innerHeight + 'px';
    talesBackGround[backgroundCount].style.width = window.innerWidth + 'px';
    talesBackGround[backgroundCount].style.left = ((window.innerWidth - imgParent.offsetWidth)/2) * (-1) + 'px';
  }

  //////////////////////////
  //resize img container
  /////////////////////////

  //all backgrounds getter
  var picFrames = document.getElementsByClassName('picFrame');

  //for all backgrounds
  for (var picBsckgroundsCounter = 0; picBsckgroundsCounter<picFrames.length; picBsckgroundsCounter++){
    picFrames[picBsckgroundsCounter].style.width = window.innerWidth * 0.9 + 'px';
  }

  /////////////////////////////////
  // set links container
  ////////////////////////////////

  var linkContainer = document.getElementsByClassName('linkContainer');
  for (var containerCounter = 0; containerCounter<linkContainer.length; containerCounter++){
    linkContainer[containerCounter].style.top = ((window.innerHeight / 2) - (linkContainer[containerCounter].offsetHeight / 2)) + 'px';
    linkContainer[containerCounter].style.left = ((window.innerWidth / 2) - (linkContainer[containerCounter].offsetWidth / 2) ) + 'px';
  }

}
