fs = require('fs');
https = require('https');
nam = process.argv[2];
console.log(nam);
t=fs.readFileSync(nam, 'utf8');
w=t.replace(/"(?:https?:)?(\/\/\w+\.ybusad\.com\/(.*?))(?="|\?)/g, (_,x,y)=>{
  try {
    console.log(x,y);
    var p = y.split`/`;
    var bas = 'D:/phpstudy_pro/WWW/fakeybusad';
    for (var i=0; i<p.length-1; ++i) {
      try {
        fs.mkdirSync(bas+='/'+p[i]);
      } catch(e) {}
    }console.log(bas, p, i);
    var fd = fs.openSync(bas+'/'+p[i],'wx');
    https.get('https:'+x, e=>{try{
      e.on('data', v=>fs.writeSync(fd, v));
      e.on('end', v=>fs.closeSync(fd));}catch(e){console.log(e)}
    });
  }catch(e){}
  return '"/'+y;
});
fs.writeFileSync(nam, w);
