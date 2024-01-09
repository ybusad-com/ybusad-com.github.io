// Map dynamic GET into path

!function(){
  var maps = {
    '/v2/article/comment/getList.php': '/db/article/comment<id>.json',
    '/v2/article/index/getList.php': '/db/article/page<pageNumber>.json',
    '/v2/article/item/getDetail.php': '/db/article/article_<urlCode>.json',
    '/v2/baike/view/getQueryItem.php': '/db/baike/<link>.php',
    '/v2/user/page/getArticleList.php': '/db/user/ArticleList/<userCode>.json%23<pageNumber>.txt',
    '/v2/user/page/getCommentList.php': '/db/user/CommentList/<userCode>.json%23<pageNumber>.txt',
    '/v2/user/page/getData.php': '/db/user/Data/<code>.json',
    '/v2/user/page/getPostList.php': '/db/user/PostList/<userCode>.json%23<pageNumber>.txt',
    '/v2/xbar/comment/getList.php': '/db/xbar/list/pid=<pid>.json',
    '/v2/xbar/post/getList.php': '/db/xbar/list/tid=<tid>.json',
    '/v2/xbar/thread/getList.php': '/db/xbar/thread/<pageNumber>.json',
  };
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function() {
   if (arguments[0] == 'GET') {
    var url = arguments[1];
    var spl = url.indexOf('?');
    if (spl != -1) {
      var arg = {};
      url.slice(spl+1).split('&').forEach(function(v){
        var x = v.indexOf('=');
        arg[v.slice(0,x)] = v.slice(x+1);
      });
      // console.log (url, arg);
      url = url.slice(0,spl);
      try {
        arguments[1] = maps[url].replace(/<(.*?)>/g,
          function(_,n) { return arg[n] });
      } catch (e) {}
    }
   } else {
    arguments[1] = '/db/onlyGET.json?' + arguments[0] + arguments[1];
    arguments[0] = 'GET'; 
   }
   open.apply(this, arguments);
  };
}()
