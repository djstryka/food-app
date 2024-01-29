const http = require('http');
const Port = 3000

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': ' text/html'})
    fs.readFile('index.html', function(error,data))
});

server.listen(Port, function (error) {
    if (error){
        console.log('something went wrong')
       }   else{
        console.log('your apllication server listening')
       }
});
    