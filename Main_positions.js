/**
 * Created by asrmamrna on 21.09.2014.
 */

//////////////////////////////////////////
//
// Set positions for some element
//
//////////////////////////////////////////

function mainBlocks() {
  // main blacks getter
  var blocks = document.getElementsByClassName('viewpoint');

  // set all blocks to be 100% page height and set oder
  for (var blocksLength = 0; blocksLength < blocks.length; blocksLength++) {
    blocks[blocksLength].style.height = window.innerHeight + 'px';
    blocks[blocksLength].style.top = (window.innerHeight * blocksLength) + 'px';
  }
}
function contentSetting(){
  // main blacks getter
  var blocks = document.getElementsByClassName('viewpoint');
  var body = document.getElementsByTagName('body')[0];
  var content = document.createElement('div');
  content.id = 'content';
  body.appendChild(content);
  for(var bodyChild = 0; bodyChild<blocks.length;bodyChild++){
    content.appendChild(blocks[0]);
  }

  //start function of blocks positioning
  mainBlocks();
}