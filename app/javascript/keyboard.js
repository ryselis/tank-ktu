$(document).observe('keydown', function (e) {
	//if (!accelerometer_on){
        	var shiftDown = false; 
			
			switch (e.keyCode) {
				case 16:
					shiftDown = true;
					break;
			}
			
    		switch (e.keyCode) {
        		case Event.KEY_LEFT:
					if (shiftDown) 
					tankMove('left_fast')
						else
						tankMove('left');
            		break;
        		case Event.KEY_RIGHT:
        			if (shiftDown) 
					tankMove('right_fast')
						else
						tankMove('right');
            		break;
            	case Event.KEY_DOWN:
            		if (shiftDown) 
					tankMove('back_fast')
						else
						tankMove('back');
            		break;
            	case Event.KEY_UP:
            		if (shiftDown) 
					tankMove('forward_fast')
						else
						tankMove('forward');
            		break;
            	case 65:	//A
        			if (shiftDown) 
					tankMove('left_fast')
						else
						tankMove('left');
            		break;
        		case 68:	//D
        			if (shiftDown) 
					tankMove('right_fast')
						else
						tankMove('right');
            		break;
            	case 83:	//S
            		if (shiftDown) 
					tankMove('back_fast')
						else
						tankMove('back');
            		break;
            	case 87:	//W
            		if (shiftDown) 
					tankMove('forward_fast')
						else
						tankMove('forward');
            		break;
            	case 81:	//Q
            		turretMove('left');
            		break;
            	case 69:	//E
            		turretMove('right');
            		break;
            	}

     });