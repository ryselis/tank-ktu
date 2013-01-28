$(document).observe('keydown', function (e) {
	if (!accelerometer_on){
        	var is_hotkey = true; 
        	var is_rotkey = false;
        	var opposing_direction = '';
        	var direction = '';
    		switch (e.keyCode) {
        		case Event.KEY_LEFT:
        			direction = direction1 = 'move_left';
        			opposing_direction = 'move_right';
            		break;
        		case Event.KEY_RIGHT:
        			direction = direction1 = 'move_right';
        			opposing_direction = 'move_left';
            		break;
            	case Event.KEY_DOWN:
            		direction = direction2 = 'move_back';
            		opposing_direction = 'move_forward';
            		direction1 = '';
            		break;
            	case Event.KEY_UP:
            		direction = direction2 = 'move_forward';
            		opposing_direction = 'move_back';
            		direction1 = '';
            		break;
            	case 65:	//A
        			direction = direction1 = 'move_left';
        			opposing_direction = 'move_right';
            		break;
        		case 68:	//D
        			direction = direction1 = 'move_right';
        			opposing_direction = 'move_left';
            		break;
            	case 83:	//S
            		direction = direction2 = 'move_back';
            		opposing_direction = 'move_forward';
            		direction1 = '';
            		break;
            	case 87:	//W
            		direction = direction2 = 'move_forward';
            		opposing_direction = 'move_back';
            		direction1 = '';
            		break;
            	case 81:	//Q
            		direction = direction1 = 'rot_left';
            		is_rotkey = true;
            		opposing_direction = 'rot_right';
            		direction2 = '';
            		break;
            	case 69:	//E
            		direction = direction1 = 'rot_right'
            		opposing_direction = 'rot_left';
            		is_rotkey = true;
            		direction2 = '';
            		break;
            		
            	default:
            		is_hotkey = false;
            	}
            	
            	switch (direction){
            		case 'move_left':
            			image_url_part = 'left';
            			button_name = 'strifeleft';
            			xpoz = 36;
            			ypoz = 0;
            			break;
            		case 'move_right':
            			image_url_part = 'right';
            			button_name = 'striferight';
            			xpoz = 36;
            			ypoz = 0;
            			break;
            		case 'move_forward':
            			image_url_part = 'forward';
            			button_name = 'forward';
            			xpoz = 0;
            			ypoz = 36;
            			break;
            		case 'move_back':
            			image_url_part = 'backward';
            			button_name = 'backward';
            			xpoz = 0;
            			ypoz = 36;
            			break;
            		case 'rot_left':
            			image_part_url = 'left';
            			button_name = 'rotate_left';
            			break;
            		case 'rot_right':
            			image_part_url = 'right';
            			button_name = 'rotate_right';
            			break;
            	}
            	
            if (speed != 11 && (is_moving == 0 || ((direction1!=lastDirection1 || direction2 != lastDirection2) && direction1 != opposing_direction &&
            		direction2 != opposing_direction))){
            		if (direction1 != '' && direction2 == ''){
            			direction = direction1;
            		}
            		if (direction1 == '' && direction2 != ''){
            			direction = direction2;
            		}
            		if (direction1 != '' && direction2 != ''){
            			direction = 'move_';
            			switch (direction2){
            				case 'move_forward':
            					direction += 'fwd_';
            					break;
            				case 'move_back':
            					direction += 'bck_';
            					break;
            			}
            			switch (direction1){
            				case 'move_left':
            					direction += 'left';
            					break;
            				case 'move_right':
            					direction += 'right';
            					break;
            			}
            		}
            		stopMoving();
            		startMoving(direction, speed);
            		console.log(direction1);
            		console.log(direction2);
            		console.log(direction);
            		lastDirection1 = direction1;
            		lastDirection2 = direction2;
            		is_moving = 1;
            		logAction('start');
            	}
            		var image_url_part;
            		var button_name;
            		var xpoz, ypoz;
            	switch (direction){
            		case 'move_left':
            			image_url_part = 'left';
            			button_name = 'strifeleft';
            			xpoz = 36;
            			ypoz = 0;
            			break;
            		case 'move_right':
            			image_url_part = 'right';
            			button_name = 'striferight';
            			xpoz = 36;
            			ypoz = 0;
            			break;
            		case 'move_forward':
            			image_url_part = 'forward';
            			button_name = 'forward';
            			xpoz = 0;
            			ypoz = 36;
            			break;
            		case 'move_back':
            			image_url_part = 'backward';
            			button_name = 'backward';
            			xpoz = 0;
            			ypoz = 36;
            			break;
            		case 'rot_left':
            			image_part_url = 'left';
            			button_name = 'rotate_left';
            			break;
            		case 'rot_right':
            			image_part_url = 'right';
            			button_name = 'rotate_right';
            			break;
            		
            	}
            	if (is_hotkey){
            		if (is_rotkey){
            			setButtonDown2(button_name, image_part_url, 0, 62)
            		}
            		else{
            			$(button_name).setStyle({background: 'url(images/'+image_url_part+'.png) '+xpoz+'px '+ypoz+'px'});
            		}
            	}
            }
           
            
      });
   
		$(document).observe('keyup', function(e){
			var is_key_up = false;
			if ((e.keyCode == Event.KEY_LEFT || e.keyCode == 65) ){
				setButtonUp('strifeleft', 'left');
				if (direction1 == 'move_left'){
					direction1 = '';
					is_key_up = true;
				}
				
			}
			if ((e.keyCode == Event.KEY_RIGHT || e.keyCode == 68)){
				setButtonUp('striferight', 'right');
				if (direction1 == 'move_right'){
					direction1 = '';
					is_key_up = true;
				}
			}
			if ((e.keyCode == Event.KEY_DOWN || e.keyCode == 83)){
				setButtonUp('backward', 'backward');
				if (direction2 == 'move_back'){
					direction2 = '';
					is_key_up = true;
				}
			}
			if ((e.keyCode == Event.KEY_UP || e.keyCode == 87)){
				setButtonUp('forward', 'forward');
				if (direction2 == 'move_forward'){
					direction2 = '';
					is_key_up = true;
				}
			}
			if (e.keyCode == 81) {
				setButtonUp2('rotate_left', 'left');
				if (direction1 == 'rot_left'){
					direction1 = '';
					is_key_up = true;
				}
			}
			if (e.keyCode == 69) {
				setButtonUp2('rotate_right', 'right');
				if (direction1 == 'rot_right'){
					direction1 = '';
					is_key_up = true;
				}
			}
			if (is_key_up){
         		stopMoving();
         		is_moving = 0;
         		lastDirection = 'stop_moving';
         	}
         	if (direction1 != '' && direction2 == ''){
            			direction = direction1;
            		}
            if (direction1 == '' && direction2 != ''){
            			direction = direction2;
            }
            if (direction1 != '' && direction2 != ''){
            			direction = 'move_';
            			switch (direction2){
            				case 'move_forward':
            					direction += 'fwd_';
            					break;
            				case 'move_back':
            					direction += 'bck_';
            					break;
            			}
            			switch (direction1){
            				case 'move_left':
            					direction += 'left';
            					break;
            				case 'move_right':
            					direction += 'right';
            					break;
            			}
            }
            		stopMoving();
            		//startMoving(direction, speed);
         });
function setButtonBackground(button, direction, xpos, ypos) {
			$(button).setStyle({background: 'url(images/'+direction+'.png) '+xpos+'px '+ypos+'px'});
		}        
         
function setButtonDown(button, direction, xpos, ypos) {
			$(button).setStyle({background: 'url(images/'+direction+'.png) '+xpos+'px '+ypos+'px'});
			if (speed != 11){
				if(direction=='forward') startMoving('move_forward',speed);
				if(direction=='backward') startMoving('move_back',speed);
				if(direction=='left') startMoving('move_left',speed);
				if(direction=='right') startMoving('move_right',speed);
				logAction('start');
			}
		}
		
		// this image sprite based function should replace setButtonDown
		function setButtonDown2(button, direction, xpoz, ypoz) {
			$(button).setStyle({background: 'url(images/rotate_'+direction+'.png) '+xpoz+' '+ypoz+'px'});
			startMoving("rot_"+direction,turn_speed);
		}
		
		function setButtonUp(button, direction) {
			$(button).setStyle({background: 'url(images/'+direction+'.png)'});
			stopMoving();
			logAction('end 1');
		}
		
		function setButtonUp2(button, direction) {
			$(button).setStyle({background: 'url(images/rotate_'+direction+'.png)'});
			stopMoving();
			logAction('end 1');
		}

		function setAllButtonsUp(button1, direction1, button2, direction2, button3, direction3, button4, direction4, 
				button5, direction5, button6, direction6) {
			$(button1).setStyle({background: 'url(images/'+direction1+'.png)'});
			$(button2).setStyle({background: 'url(images/'+direction2+'.png)'});
			$(button3).setStyle({background: 'url(images/'+direction3+'.png)'});
			$(button4).setStyle({background: 'url(images/'+direction4+'.png)'});
			setButtonUp2(button5, direction5);
			setButtonUp2(button6, direction6);
			stopMoving();
			logAction('end 2');
			
		}