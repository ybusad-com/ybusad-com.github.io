<?php 
$k = '../../../db/user/CommentList/'.urlencode($_GET['userCode']).'.json#'.urlencode($_GET['pageNumber']).'.txt';
if (!file_exists($k)) exit('{"code":0,"msg":"ok","data":{"list":[],"total":0}}');
include($k) ?>