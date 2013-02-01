/**
 * @author petku_000
 */

/*$(document).observe('keydown', function (e) {
 switch (e.keyCode){
 case 16:        //Shift
 sprint = 1;
 break;
 }
 });

 $(document).observe('keyup', function (e) {
 switch (e.keyCode){
 case 16:        //Shift
 sprint = 0;
 break;
 }
 });*/

var shiftDown = false;
function setPedalPosition (pos) {
    if (pos == 1) {
        $('pedal').setStyle({background: 'url(PNGs/pedal.png) 0 94px'});
        shiftDown = true;
    }   else {
        $('pedal').setStyle({background: 'url(PNGs/pedal.png) 0 0'});
        shiftDown = false;
    }
}
