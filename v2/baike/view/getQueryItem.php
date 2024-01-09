<?php 
$k = '../../../db/baike/'.urlencode($_GET['link']).'.php';
if (!file_exists($k)) exit('{"code":0,"msg":"ok","data":{"exists":false}}');
include($k) ?>