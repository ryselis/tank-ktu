$(document).observe('keydown', function (e) {
	//if (!accelerometer_on){
        	var shiftDown = false; 
			
			switch (e.keyCode) {
				case 16:	// Shift
					shiftDown = true;
					break;
			}
			
    		switch (e.keyCode) {
        		case Event.KEY_LEFT:
					if (shiftDown) 
					tankMove('left_fast', true)
						else
						tankMove('left', true);
            		break;
        		case Event.KEY_RIGHT:
        			if (shiftDown) 
					tankMove('right_fast', true)
						else
						tankMove('right', true);
            		break;
            	case Event.KEY_DOWN:
            		if (shiftDown) 
					tankMove('back_fast', true)
						else
						tankMove('back', true);
            		break;
            	case Event.KEY_UP:
            		if (shiftDown) 
					tankMove('forward_fast', true)
						else
						tankMove('forward', true);
            		break;
            	case 65:	//A
        			if (shiftDown) 
					tankMove('left_fast', true)
						else
						tankMove('left', true);
            		break;
        		case 68:	//D
        			if (shiftDown) 
					tankMove('right_fast', true)
						else
						tankMove('right', true);
            		break;
            	case 83:	//S
            		if (shiftDown) 
					tankMove('back_fast', true)
						else
						tankMove('back', true);
            		break;
            	case 87:	//W
            		if (shiftDown) 
					tankMove('forward_fast', true)
						else
						tankMove('forward', true);
            		break;
            	case 188:	// ,
            		turretMove('left');
            		break;
            	case 190:	// .
            		turretMove('right');
            		break;	
            	case 81:	//Q
            		turretMove('left');
            		break;
            	case 69:	//E
            		turretMove('right');
            		break;
            	case 17:  	//Ctrl
            		tankShoot('cannon_on');
            	}

     });
     
$(document).observe('keyup', function(e){

    switch (e.keyCode) {
        case Event.KEY_LEFT:
            tankMove('left', false);
            break;
        case Event.KEY_RIGHT:
            tankMove('right', false);
            break;
        case Event.KEY_DOWN:
            tankMove('back', false);
            break;
        case Event.KEY_UP:
            tankMove('forward', false);
            break;
        case 65:	//A
            tankMove('left', false);
            break;
        case 68:	//D
            tankMove('right', false);
            break;
        case 83:	//S
            tankMove('back', false);
            break;
        case 87:	//W
            tankMove('forward', false);
            break;
        case 81:	//Q
            RevertTurret();
            break;
        case 69:	//E
            RevertTurret();
            break;
    }
});
