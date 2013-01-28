<?php
  	$Response = new StdClass();
	$Response->success = false;
   	if ($_GET['getOption']=="savePicture")
   	{
		$now = getdate();
		$ch = curl_init($_GET['Picture']);
		$fp = fopen('fotos/foto_'.$now['year'].$now['mon'].$now['mday'].$now['hours'].$now['minutes'].$now['seconds'].'.jpg', 'wb');
		curl_setopt($ch, CURLOPT_FILE, $fp);
		curl_setopt($ch, CURLOPT_HEADER, 0);
		curl_exec($ch);
		curl_close($ch);
		fclose($fp);
		$Response->success = true;
	}
   	if ($_GET['getOption']=="getMindState")
   	{
		$myFile = "state.info";
		$fh = fopen($myFile, 'r');
		$theData = fgets($fh);
		fclose($fh);
		$Response->state=intval($theData);
		$Response->success = true;
	}
   	if ($_GET['getOption']=="setMindState")
   	{
		$myFile = "state.info";
		$fh = fopen($myFile, 'w') or die("can't open file");;
		fwrite($fh, $_GET['State']);
		fclose($fh);
		$Response->success = true;
	}
	echo json_encode($Response);
?>