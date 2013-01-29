/**
 * @author petku_000
 */

$(document).observe('keydown', function (e) {
	switch (e.keyCode){
		case 16:	//Shift
    		sprint = 1;
        	break;
       }
});

$(document).observe('keyup', function (e) {
	switch (e.keyCode){
		case 16:	//Shift
    		sprint = 0;
        	break;
       }
});

function setPedalPosition (pos) {
	sprint = pos;
	alert(pos);
	console.log(pos);
}