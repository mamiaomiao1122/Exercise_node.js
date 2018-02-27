


var http = require("http");

var server = http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type" : "text/plain"
    });
    response.write("Welcome to mamiao");
    response.end();
})
server.listen(8000, "127.0.0.1");

console.log("Creat server on http://127.0.0.1:8000/");
