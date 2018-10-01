<?php
$dir = opendir('css/plugins/');
$dirList = array();
while (($file = readdir($dir)) !== false) {
    if ($file === '.' || $file === '..' || (preg_match('/.plg$/', $file)===0 && preg_match('/.css$/', $file)===0)) {
        continue;
    }
    
    array_push($dirList, preg_replace('/\..../', '', $file));

    $dirList = array_unique($dirList);
}

sort($dirList);
for ($i = 0; $i < count($dirList); $i++) {
    echo "<option>" . $dirList[$i] . "</option>\n";
}
