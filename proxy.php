<?php
$ch = curl_init();
$timeout = 30;
$userAgent = $_SERVER['HTTP_USER_AGENT'];

//$_REQUEST['url']=htmlspecialchars(urldecode($_REQUEST['url']));
$_REQUEST['url']=urldecode($_REQUEST['url']);
curl_setopt($ch, CURLOPT_URL, $_REQUEST['url']);
// curl_setopt($ch, CURLOPT_URL, $_REQUEST['url']."&_render=rss");
// echo "A:".$_REQUEST['url'].$_REQUEST['render'];
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
curl_setopt($ch, CURLOPT_USERAGENT, $userAgent);

$response = curl_exec($ch);    

if (curl_errno($ch)) {
    echo curl_error($ch);
} else {
    curl_close($ch);
    echo $response;
}
?>