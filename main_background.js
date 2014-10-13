/**
 * Created by voron on 27.09.14.
 */

/////////////////////////////////
//
// Background for the whole page
//
/////////////////////////////////

function main_background(){
    var body = document.getElementsByTagName('body')[0];
    var backgroundIMG = document.createElement('div');
    backgroundIMG.id = 'backgroundIMG';
    body.appendChild(backgroundIMG);
}