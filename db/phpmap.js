// Map dynamic GET into path

!function(){
  var maps = {
    '/v2/article/comment/getList.php': '/db/article/comment/<id>.json',
    '/v2/article/index/getList.php': '/db/article/page<pageNumber>.json',
    '/v2/article/item/getDetail.php': '/db/article/article_<urlCode>.json',
  };
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function() {
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
    open.apply(this, arguments);
  };
}()
