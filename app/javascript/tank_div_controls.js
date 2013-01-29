function MoveTank(event) {
	position = $('hidden_mouse_position').getAttribute('value');
	if (position >= 0) {
		var y = event.clientY;
		if (y < position) {
			MoveTankImageUp();
		} else {
			MoveTankImageDown();
			MoveTankImageRot();
		}
	}
}


function RevertTank(){
    $('tank_body').setStyle({
        bottom: '50px'
    });
    $('hidden_mouse_position').setAttribute('value', -1);
    $('turret').style.MozTransform = 'rotate(0deg)';
    $('turret').style.webkitTransform = 'rotate(360deg)';
}

function SetInitPosition(event){
    $('hidden_mouse_position').setAttribute('value', event.clientY);
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

function RotateTurretImageClock() {
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
            $("fotoimage").setStyle({display: 'block'});
            $("fotoimage").setAttribute('src',src);
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

function tankMove(move){
    switch(move){
        case 'left':
            request('rotate/100');
            RotateTurretImageCountClock();
            break;
        case 'right':
            request('rotate/160');
            RotateTurretImageClock();
            break;
        case 'left_fast':
            request('rotate/0');
            RotateTurretImageCountClock();
            break;
        case 'right_fast':
            request('rotate/255');
            RotateTurretImageClock();
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

function turretMove(side){
	request('turret/' + side + '/on');	
}


