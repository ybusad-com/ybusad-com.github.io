<?php 
$k = '../../../db/xbar/list/pid='.urlencode($_GET['pid']).'.json';
if (!file_exists($k)) exit('{"code":0,"msg":"ok","data":{"list":[],"pageInfo":{"total":0,"pageSize":0,"current":1}}}');
echo '{"code":0,"msg":"ok","data":';include($k) ?>}
