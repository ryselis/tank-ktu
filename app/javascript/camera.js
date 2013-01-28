$(document).observe('keydown', function (e) {
	switch (e.keyCode){
		case 82:	//R
    		if (last_cam_pos == 'down')
           		setHeadPosition('mid');
        	else
        		if (last_cam_pos == 'mid')
            		setHeadPosition('up');
        	break;
     	case 70:	//F
        	if (last_cam_pos == 'up')
            	setHeadPosition('mid');
        	else
            	if (last_cam_pos == 'mid')
            		setHeadPosition('down');
        	break;	
       }
});

function setHeadPosition (pos) {
        	if (pos != '' && last_cam_pos != pos){
        		setCamPosTo(pos);
                switch(last_cam_pos){
                	case 'down':
                		$(position1).setStyle({background: 'url(images/position1.png)'});
                		break;
                	case 'mid':
						$(position2).setStyle({background: 'url(images/position2.png)'});
                		break;
                	case 'up':
						$(position3).setStyle({background: 'url(images/position3.png)'});
                		break;
                	}
                switch(pos){
                	case 'down':
                		$(position1).setStyle({background: 'url(images/position1.png) 0 40px'});
                		break;
                	case 'mid':
						$(position2).setStyle({background: 'url(images/position2.png) 0 40px'});
                		break;
                	case 'up':
						$(position3).setStyle({background: 'url(images/position3.png) 0 40px'});
                		break;
                }
               last_cam_pos = pos;
            }         
        }
        
function CaptureON(button, cond){ 		 //cond = 0 - ispaudziamas mygtukas, cond = 1 - atleidziamas mygtukas
			if (slide2.value==0.1) {    //video capture 
				if (cond==0) CaptureONToggle(button, 50, "video"); //video turi reaguoti tik i ispaudima. Ne isspaudima
			}
			if (slide2.value==0.9) {	//foto capture
				if (cond==0){											
					 CaptureONToggle(button, 150, "foto");   
					 //-----------fotografijos realizacija----------
					}
				else if (cond==1) CaptureONToggle(button, 0, "foto");  
			}
		}
		
		function CaptureONToggle(button, variable, mode){
					if (mode=="video"){   
						if (captureY==0){
							//--------pradeti filmuoti---------------
						}
						if(captureY==50){
							variable = 0;	//Atskiria, jei einama is STOP i SHOT
							//--------baigti filmuoti----------------
						}
							}
					if((mode=="foto")&&(!savingFoto))
					{
						savingFoto = true;
						src='http://192.168.0.11/Jpeg/CamImg' + Math.floor (10000 * Math.random ()) + '.jpg';
						new Ajax.Request('http://192.168.0.89/roviopad/rovio-ktu/control.php', {
							method: 'get',
							parameters: {getOption: 'savePicture', Picture: src},
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
					captureY = variable;				
					$(button).setStyle({background: 'url(images/capture-2.png) 0 '+captureY+'px'});
		}
		
		
		function CaptureONForced(button){ //Kai slider pajudinamas, nutraukiamas filmavimas
			captureY = 0;
			if (slide2.value==0.9){
				//--------baigti filmuoti----------------
			}
			$(button).setStyle({background: 'url(images/capture-2.png) 0 '+captureY+'px'});
		}