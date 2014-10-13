/**
 * Created by asrmamrna on 31.08.2014.
 */

function buttons() {
  //////////////////////////////
  //
  // Create buttons container
  //
  //////////////////////////////

  var buttonsContainer = document.createElement('div');
  //set id
  buttonsContainer.id = 'buttonsContainer';

  //set style
  buttonsContainer.style.position = 'fixed';
  buttonsContainer.style.top = 0;
  buttonsContainer.style.marginLeft = 'auto';
  buttonsContainer.style.marginRight = 'auto';
  buttonsContainer.style.left = 0;
  buttonsContainer.style.right = 0;
  buttonsContainer.style.width = '80%';
  buttonsContainer.style.textAlign = 'center';
  buttonsContainer.style.textTransform = 'uppercase';
  buttonsContainer.style.textDecoration = 'none';
  buttonsContainer.style.fontFamily = '\'Lato\',Calibri,Arial,sans-serif';
  buttonsContainer.style.fontSize = '18px';
  buttonsContainer.style.letterSpacing = '0.7px';
  buttonsContainer.style.fontWeight = 900;
  buttonsContainer.style.color = '#ffffff';
  buttonsContainer.style.background = 'none repeat scroll 0 0 rgba(0, 0, 0, 0.8)';
  buttonsContainer.style.zIndex = 14;

  //add buttons container into body
  document.getElementsByTagName('body')[0].appendChild(buttonsContainer);

  ///////////////////////
  //
  // Create top buttons
  //
  ///////////////////////

  //as far, as buttons text in a block, find all blocks and get buttons names.

  //blocks getter
  var blocks = document.getElementsByClassName('viewpoint');

  for (var blocksLength = 0; blocks.length>blocksLength; blocksLength++){

    //get buttons name from each block
    var buttonText = blocks[blocksLength].getElementsByClassName('buttonsName')[0].innerHTML;

    //create button
    var newTopButton = document.createElement('div');

    //set style
    newTopButton.className = 'topButtons';
    newTopButton.style.position = 'relative';
    newTopButton.style.display = 'inline-block';
    newTopButton.style.margin = '5px';

    //set text
    newTopButton.innerHTML = buttonText;

    //current button index setter
    newTopButton.thisIndex = blocksLength;

    ///////////////////////////////////
    // On click
    //////////////////////////////////
    newTopButton.onclick = function() {

      //get all blocks (all elements with "viewpoint" class)
      for (allBlocks = 0; allBlocks<blocks.length; allBlocks++){

        //move all elements proportionally to the index of clicked button
        blocks[allBlocks].style.top = ((window.innerHeight * allBlocks) - (window.innerHeight * this.thisIndex)) + 'px';
      }
      //hide tooltip. Vital for mobile devices
      this.getElementsByClassName('tooltip')[0].style.display = 'none';
    };

    /////////////////////////////
    // Tooltips create trigger
    /////////////////////////////
    if (blocks[blocksLength].getElementsByClassName('buttonsTooltip').length === 1) {
      var text = blocks[blocksLength].getElementsByClassName('buttonsTooltip')[0].innerHTML;
      newTopButton.appendChild(createTooltip(text).tooltip);
    }

    ///////////////////////////
    // On mouse over
    ///////////////////////////
    newTopButton.onmouseover = function(){

      //show tooltip
      this.getElementsByClassName('tooltip')[0].style.display = 'block';

      //set width of a tooltip
      this.getElementsByClassName('tooltip')[0].style.width = ( 5 * ( Math.sqrt(( this.getElementsByClassName('tooltip')[0].offsetHeight * this.getElementsByClassName('tooltip')[0].offsetWidth ) / 4 ) ) ) + 'px';

      //set position of a tooltip
      this.getElementsByClassName('tooltip')[0].style.left = (((this.getElementsByClassName('tooltip')[0].offsetWidth / 2) - (this.offsetWidth / 2)) * (-1)) + 'px';
      this.getElementsByClassName('tooltip')[0].style.top = (this.offsetHeight + 7) + 'px';
    };

    ///////////////////////////
    // On mouse out
    ///////////////////////////
    newTopButton.onmouseout = function () {
      this.getElementsByClassName('tooltip')[0].style.display = 'none';
    };

    // set button
    buttonsContainer.appendChild(newTopButton);
  }
}
