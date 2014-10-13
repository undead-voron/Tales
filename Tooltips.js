/**
 * Created by asrmamrna on 01.09.2014.
 */

/////////////////////////
//
// Create tooltips
//
//////////////////////////
function createTooltip(text) {
  var tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.style.position = 'absolute';
  tooltip.style.display = 'none';
  tooltip.style.top = '100%';
  tooltip.style.backgroundColor = 'black';
  tooltip.style.color = 'white';
  tooltip.style.fontSize = '14px';
  tooltip.style.borderRadius = '7px';
  tooltip.style.border = 'solid red 1px';
  tooltip.style.zIndex = '15';
  tooltip.innerHTML = text;

  return {
    tooltip: tooltip
  }
}