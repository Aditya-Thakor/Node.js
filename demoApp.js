var http = require('http');

var cm = require("./customModule");

var val = " value-1 ";


http.createServer(function(req,res){
    res.writeHead(200,{
        "content-type":"text/html",
        // "content-type":"application/json",
    });
    // res.write('Welcome to Node.' + val);
    // res.write(req.url);

    res.write(cm.myModule(val));

    res.end();
}).listen(5000);