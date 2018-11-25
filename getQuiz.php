<?php
function isMobile() {
    return preg_match("/(android|avantgo|blackberry|
    bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|
    tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
}

if (isMobile())
{
    ob_start();
    header("Location: https://fortloc.com/quiz/mobile4.html");
    ob_flush();
    die();
}
else{
    
    ob_start();
     header("Location: https://fortloc.com/quiz/quiz.html");
     ob_flush(); 
    die();
}

?>