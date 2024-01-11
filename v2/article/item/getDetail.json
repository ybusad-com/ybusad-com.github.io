<?php 
$k = '../../../db/article/article_'.urlencode($_GET['urlCode']).'.json';
if (!file_exists($k)) exit('{"code":404,"msg":"文章未找到","detail":{"data":{"code":404,"msg":"文章未找到"}}}');
include($k) ?>