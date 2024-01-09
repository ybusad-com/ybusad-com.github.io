https = require('https');
fs = require('fs');
!async function() {
  var buf = [];
  for (var i=1; ; ++i) {
    var e = await getHttps('https://www.ybusad.com/v2/xbar/thread/getList.json?pageNumber='+i);
    var f = JSON.parse(e).data.list;
    if (f.length == 0) break;
    fs.writeFileSync('thread/'+i+'.json', e);
    buf.push(...f);
    for (var j of f) {
      getList('tid='+j.id);
    }
  }
  fs.writeFileSync('thread.json', JSON.stringify(buf));
}();

async function getList(id, type='post') {
console.log(id);
try {
  var buf = JSON.parse(await getHttps('https://www.ybusad.com/v2/xbar/'+type+'/getList.json?'+id+'&pageNumber=1')).data;
  for (var i=2; ; ++i) {
    var e = await getHttps('https://www.ybusad.com/v2/xbar/'+type+'/getList.json?'+id+'&pageNumber='+i);
    var f = JSON.parse(e).data;
    if (f.list.length == 0) break;
    buf.list.push(...f.list);
    for(var u in f.users) buf.users[u]=f.users[u];
  }
  fs.writeFileSync('list/'+id+'.json', JSON.stringify(buf));
  for (var i of buf.list) if(i.replyCount>5) getList('pid='+i.pid, 'comment');
} catch(err) {
console.log(id, err, JSON.stringify(buf), e);
process.exit();
}}

function getHttps(url) {
  return new Promise(function(resolve){
    https.get(url, res=>{
      var data = [];
      res.on('data', x=>data.push(x));
      res.on('end', _=>resolve(Buffer.concat(data).toString('utf8')));
    });
  });
}
