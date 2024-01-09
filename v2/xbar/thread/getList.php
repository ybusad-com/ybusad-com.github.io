<?php 
$k = '../../../db/xbar/thread/'.urlencode($_GET['pageNumber']).'.json';
if (!file_exists($k)) exit('{"code":0,"msg":"ok","data":{"list":[],"pageInfo":{"total":0,"pageSize":0,"current":1}}}');
include($k) ?>
