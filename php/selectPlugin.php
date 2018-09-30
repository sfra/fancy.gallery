<?php
$dir = opendir('css/plugins/');
$dirList = array();
while (($file = readdir($dir)) !== false) {
    if ($file === '.' || $file === '..') {
        continue;
    }
    array_push($dirList, preg_replace('/\.php/', '', $file));
}

sort($dirList);
for ($i = 0; $i < count($dirList); $i++) {
    echo "<option>" . $dirList[$i] . "</option>\n";
}
