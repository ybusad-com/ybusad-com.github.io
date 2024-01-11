// Map dynamic GET into path

!function(){
  var maps = {
    '/v2/article/comment/getList.json': '/db/article/comment<id>.json',
    '/v2/article/index/getList.json': '/db/article/page<pageNumber>.json',
    '/v2/article/item/getDetail.json': '/db/article/article_<urlCode>.json',
    '/v2/baike/view/getQueryItem.json': '/db/baike/<link>.php',
    '/v2/user/page/getArticleList.json': '/db/user/ArticleList/<userCode>.json%23<pageNumber>.txt',
    '/v2/user/page/getCommentList.json': '/db/user/CommentList/<userCode>.json%23<pageNumber>.txt',
    '/v2/user/page/getData.json': '/db/user/Data/<code>.json',
    '/v2/user/page/getPostList.json': '/db/user/PostList/<userCode>.json%23<pageNumber>.txt',
    '/v2/xbar/comment/getList.json': '/db/xbar/list/pid=<pid>.json',
    '/v2/xbar/post/getList.json': '/db/xbar/list/tid=<tid>.json',
    '/v2/xbar/thread/getList.json': '/db/xbar/thread/<pageNumber>.json',
    '/v2/essay/index/getData.json': '/db/essay/list/<offset/30|0>.json',
  };
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url) {
   if (/\/\//.test(url.slice(0,8))); else
   if (method == 'GET') {
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
          function(_,n) { return eval('arg.'+n) });
      } catch (e) {}
    }
   } else {
    arguments[1] = '/db/onlyGET.json?' + arguments[0] + arguments[1];
    arguments[0] = 'GET'; 
   }
   open.apply(this, arguments);
  };
}()
