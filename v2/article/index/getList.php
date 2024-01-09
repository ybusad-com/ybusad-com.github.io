<?php 
$k = '../../../db/article/page'.urlencode($_GET['pageNumber']).'.json';
if (!file_exists($k)) exit('{"code":0,"msg":"ok","data":{"list":[],"pageInfo":{"total":304,"pageSize":20,"current":999},"total":304,"totalPages":16}}');
include($k) ?>