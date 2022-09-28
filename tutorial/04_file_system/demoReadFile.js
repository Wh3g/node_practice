var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('demoFile1.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data)
        return res.end();
    });
}).listen(8080);

fs.appendFile('myNewFile.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!')
});

fs.open('myNewFile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});

fs.writeFile('myNewFile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});