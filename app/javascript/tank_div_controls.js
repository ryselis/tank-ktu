var prevEvent;
var prevState;
var prevEventTurret;
var prevStateTurret;
function MouseTankMove(event) {
    var xOff = 10;
    var yOff = 10;
	var positionX = $('hidden_mouse_positionX').getAttribute('value');
	var positionY = $('hidden_mouse_positionY').getAttribute('value');
	if (positionY >= 0) {
		var y = event.clientY;
		if (Math.abs(positionY - y) > yOff) {
            if (y < positionY) {
                MoveTankImageUp();
                if (shiftDown) {
                    tankMove('forward_fast', true);
                } else {
                    tankMove('forward', true);
                }
            } else {
                MoveTankImageDown();
                if (shiftDown) {
                    tankMove('back_fast', true);
                } else {
                    tankMove('back', true);
                }
            }
		}
	}
    if (positionX >= 0) {
        var x = event.clientX;
        if (Math.abs(positionX - x) > xOff) {
            if (x > positionX) {
                RotateTankImageClock();
                tankMove('right', true);
            }
            else {
                RotateTankImageCountClock();
                tankMove('left', true);
            }
        }
    }
}

function MouseTurretRotate(event) {
    //cancel bubble
    if (!event) var event = window.event;
    if (event) event.cancelBubble = true;
    if (event.stopPropagation) event.stopPropagation();

    position = $('hidden_mouse_positionT').getAttribute('value');
    if (position >= 0) {
        var x = event.clientX;

        if (x > position) {
            RotateTurretImageClock();
            turretMove('right', true);
        }  else {
            RotateTurretImageCountClock();
            turretMove('left', true);
        }
    }
}
function SetInitPosition(event){
    $('hidden_mouse_positionX').setAttribute('value', event.clientX);
    $('hidden_mouse_positionY').setAttribute('value', event.clientY);
}

function SetInitPositionTurret(event) {
    $('hidden_mouse_positionT').setAttribute('value', event.clientX);
}

function RevertTank(){
    $('tank_body').setStyle({
        bottom: '50px'
    });
    $('hidden_mouse_positionX').setAttribute('value', -1);
    $('hidden_mouse_positionY').setAttribute('value', -1);
    $('turret').style.MozTransform = 'rotate(0deg)';
    $('turret').style.webkitTransform = 'rotate(360deg)';

    $('tank_body').style.MozTransform = 'rotate(0deg)';
    $('tank_body').style.webkitTransform = 'rotate(360deg)';
    RevertTankRotate();
    RevertTurret();
    RevertTankMove();
}
function RevertTurret() {
    $('hidden_mouse_positionT').setAttribute('value', -1);

    turretMove('left', false);
    turretMove('right', false);
}

function RevertTankRotate() {
    $('tank_body').style.MozTransform = 'rotate(0deg)';
    $('tank_body').style.webkitTransform = 'rotate(360deg)';
    $('hidden_mouse_positionX').setAttribute('value', -1);
    
   //tankMove('left', false);
}

function RevertTankMove(){
    $('tank_body').setStyle({
        bottom: '50px'
    });
    $('hidden_mouse_positionY').setAttribute('value', -1);
    //tankMove('forward', false);
}




function MoveTankImageUp() {
	$('tank_body').setStyle({
		bottom : '80px'
	});
}

function MoveTankImageDown() {
	$('tank_body').setStyle({
		bottom : '30px'
	});
}

function RotateTankImageClock() {
    /*    $('turret').positionedOffset($('turret'))*/
    $('tank_body').style.MozTransform = 'rotate(15deg)';
    $('tank_body').style.webkitTransform = 'rotate(15deg)';

}

function RotateTankImageCountClock() {
    $('tank_body').style.MozTransform = 'rotate(-15deg)';
    $('tank_body').style.webkitTransform = 'rotate(-15deg)';

}


function RotateTurretImageClock() {
/*    $('turret').positionedOffset($('turret'))*/
    $('turret').style.MozTransform = 'rotate(15deg)';
	$('turret').style.webkitTransform = 'rotate(15deg)';
}

function RotateTurretImageCountClock() {
	$('turret').style.MozTransform = 'rotate(-15deg)';
	$('turret').style.webkitTransform = 'rotate(-15deg)';
}


function request(req) {
    src='http://192.168.42.202/' + req;
    new Ajax.Request(src, {
        method: 'get',
        onSuccess: function(transport) {
            var response = transport.responseText || "no response text";
            //$("fotoimage").setStyle({display: 'block'});
            //$("fotoimage").setAttribute('src',src);
            hideImage.delay(5);
            savingFoto = false;
        },
        onFailure: function() { alert('Something went wrong...'); }
    });
}

function tankShoot(gun) {
    if (gun == "cannon_on") {
        request("main_gun/fire_simulate/on");
    }

}



function tankMove(move, state) {
	console.log(move, prevEvent);
	console.log(state, prevState);
	if (!(move == prevEvent && state == prevState)) {
		if (state) {
			switch(move) {
				case 'left':
					request('rotate/100');
					RotateTankImageCountClock();
					break;
				case 'right':
					request('rotate/160');
					RotateTankImageClock();
					break;
				case 'left_fast':
					request('rotate/0');
					RotateTankImageCountClock();
					break;
				case 'right_fast':
					request('rotate/255');
					RotateTankImageClock();
					break;
				case 'forward':
					request('move/94');
					MoveTankImageUp();
					break;
				case 'forward_fast':
					request('move/0');
					MoveTankImageUp();
					break;
				case 'back':
					request('move/160');
					MoveTankImageDown();
					break;
				case 'back_fast':
					request('move/255');
					MoveTankImageDown();
					break;
			}
		}
		// tank movement turn off

		else {
			console.log(move);
			switch(move) {
				case 'left':
					request('rotate/127');
					
					RevertTankRotate();
					break;
				case 'right':
					request('rotate/127');
					
					RevertTankRotate();
					break;
				case 'forward':
					request('move/127');
					
					RevertTankMove();
					break;
				case 'back':
					request('move/127');
					
					RevertTankMove();
					break;
			}
		}
		prevEvent = move;
		prevState = state;
	}
}


function turretMove(side, state){
	if (prevEventTurret != side && prevStateTurret != state) {
	    var stateT;
	    if (state) {
	        stateT = "/on";
	    }   else {
	        stateT = "/off";
	    }
		request('turret/' + side + stateT);
		if (state) {
	        switch(side){
	            case 'left':
	                RotateTurretImageCountClock();
	                break;
	            case 'right':
	                RotateTurretImageClock();
	                break;
	        }
	    } else {
	        $('turret').style.MozTransform = 'rotate(0deg)';
	        $('turret').style.webkitTransform = 'rotate(360deg)';
	    }
    prevEventTurret = side;
    prevStateTurret = state;
   }
}


