        var CurrentState = 0;
		var CameraPosition = "down";
		var HandlePosition = 4;
		
        function sendPictureToServer() {
			alert('Image sent');
			src='http://192.168.0.11/Jpeg/CamImg' + Math.floor (10000 * Math.random ()) + '.jpg';
			new Ajax.Request('http://192.168.0.89/roviopad/rovio-ktu/control.php', {
				method: 'get',
				parameters: {getOption: 'savePicture', Picture: src},
				onSuccess: function(transport) {
					var response = transport.responseText || "no response text";
					$("fotoimage").setAttribute('src',src);
				},
				onFailure: function() { alert('Something went wrong...'); }
			});
		}
		
		function setCameraPosition()
		{
			$("camera_down").setStyle({background: 'url(images/hud/lemputes.png) 0 46px'});
			$("camera_mid").setStyle({background: 'url(images/hud/lemputes.png) 0 46px'});
			$("camera_up").setStyle({background: 'url(images/hud/lemputes.png) 0 46px'});
			
			if(CameraPosition == "down")
			{
				$("camera_down").setStyle({background: 'url(images/hud/lemputes.png) 0 0'});
			}
			if(CameraPosition == "mid")
			{
				$("camera_mid").setStyle({background: 'url(images/hud/lemputes.png) 0 0'});
			}
			if(CameraPosition == "up")
			{
				$("camera_up").setStyle({background: 'url(images/hud/lemputes.png) 0 0'});
			}
		}
		
		function changeCameraPositionUp()
		{
			if(CameraPosition == "mid") CameraPosition = "up";
			if(CameraPosition == "down") CameraPosition = "mid";
			setCameraPosition();
			setCamPosTo(CameraPosition);
		}

		function changeCameraPositionDown()
		{
			if(CameraPosition == "mid") CameraPosition = "down";
			if(CameraPosition == "up") CameraPosition = "mid";
			setCameraPosition();
			setCamPosTo(CameraPosition);
		}
		
		function changeTransmissionUp()
		{
			if(HandlePosition<4) HandlePosition++;
			MovementSpeed = HandlePosition * 2;
			bgPosition = 0 +'px' + ' '+(HandlePosition-1)*-90+'px';
			$("handles").setStyle({backgroundPosition: bgPosition});
		}
		
		function changeTransmissionDown()
		{
			if(HandlePosition>1) HandlePosition--;
			MovementSpeed = HandlePosition * 2;
			bgPosition = 0 +'px' +' '+(HandlePosition-1)*-90+'px';
			$("handles").setStyle({backgroundPosition: bgPosition});
		}
		