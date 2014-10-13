/////////////////////////////////////////////////////////////////
// Adjusts top menu size
//
/////////////////////////////////////////////////////////////////
function menuresizer() {
  var windowwidth = window.innerWidth +2;
  var topwidth = document.getElementById("topwidth");
  var topbutton = document.getElementById('buttons-top');
  var topcontener = document.getElementById('menucontener');
  topwidth.style.whiteSpace = 'nowrap';
  topbutton.style.whiteSpace = 'nowrap';
  ///////////////////////////////////////////////////////////////////////
  // Checking window width and all buttons width
  //////////////////////////////////////////////////////////////////////
  /*if window width less, then all buttons in one line.*/
  if (topwidth.offsetWidth > windowwidth ) {
    topbutton.style.top = '-' + topbutton.offsetHeight + 'px';
    topcontener.innerHTML = 'Навигация';
    topcontener.style.background = ' none repeat scroll 0 0 rgba(0, 0, 0, 0.8)';
    topcontener.style.height = 'auto';
    topbutton. style.paddingBottom = 0;
    topcontener.style.marginTop = 0;
    topcontener.style.top = 0;
    topcontener.onmouseover = topmouseover;
    topcontener.onmouseout = topmouseout;
    topcontener.onclick = topdisplayer;
  }
  else {
    topcontener.innerHTML = '';
    topbutton.style.top = 0;
    topwidth.style.whiteSpace = 'nowrap';
    topbutton.style.whiteSpace = 'nowrap';
  }

  /*
   Function to show buttons, if hidden
   */
  function topdisplayer () {
    topbutton.style.whiteSpace = 'normal';
    topwidth.style.whiteSpace = 'normal';
    topbutton.style.top = 0;
    topcontener.style.marginTop = 0;
    topcontener.style.top = 'auto';
    topbutton.style.background = 'none repeat scroll 0 0 rgba(0, 0, 0, 0.8)';
    topcontener.onclick = extraclick;
    topcontener.onmouseover = clickedmouseover;
    topcontener.onmouseout = clickedmouseout;
  }

  /*
   Style changer for top panel hider. Trigger -> mouse is over
   Works only when bar is visible
   */
  function clickedmouseover() {
    topcontener.style.background =  'none repeat scroll 0 0 rgba(213, 9, 9, 0.8)';
    topcontener.innerHTML = 'Скрыть навигацию';
    topcontener.style.marginTop = 0;
    topcontener.onmouseout = clickedmouseout;
  }

  /*
   Style restorer for top panel hider. Trigger -> mouse out
   Works only when bar is visible
   */
  function clickedmouseout() {
    topcontener.style.background =  'none repeat scroll 0 0 rgba(0, 0, 0, 1)';
    topcontener.innerHTML = "Скрыть навигацию";
    topcontener.style.marginTop = 0;
  }

  /*
   Adjusts top panel hider, when mouse is over
   */
  function topmouseover() {
    topbutton.style.background = 'none repeat scroll 0 0 #FF6C29';
    topcontener.innerHTML = 'Нажми для навигации по сайту';
    topcontener.style.marginTop = 0;
    topcontener.style.top = 0;
  }

  /*
   Restores top panel hider, when mouse is out
   */
  function topmouseout() {
    topbutton.style.background = ' none repeat scroll 0 0 rgba(0, 0, 0, 0.8)';
    topcontener.innerHTML = 'Навигация';
    topcontener.style.marginTop = 0;
    topcontener.style.top = 0;
  }
  /*
   Hides top panel after second click and restores all event triggers.
   */
  function extraclick() {
    topwidth.style.whiteSpace = 'nowrap';
    topbutton.style.whiteSpace = 'nowrap';
    if (topwidth.offsetWidth > windowwidth ) {
      topbutton.style.top = '-' + topbutton.offsetHeight + 'px';
      topcontener.innerHTML = 'Навигация';
      topcontener.style.background = ' none repeat scroll 0 0 rgba(0, 0, 0, 0.8)';
      topcontener.style.height = 'auto';
      topbutton. style.paddingBottom = 0;
      topcontener.style.marginTop = 0;
      topcontener.onmouseover = topmouseover;
      topcontener.onmouseout = topmouseout;
      topcontener.onclick = topdisplayer;
    }
    else {
      topcontener.innerHTML = '';
      topbutton.style.top = 0;
      topwidth.style.whiteSpace = 'nowrap';
      topbutton.style.whiteSpace = 'nowrap';
    }
  }
  topWidthCounter();
}