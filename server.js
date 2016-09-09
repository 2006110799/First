var http = require("http");  
var server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html' //将返回类型由text/plain改为text/html
    });
    res.write('<h1>hello world!</h1>'); //返回HTML标签
    res.end();
}).listen(8080);
