import http from 'http';
const PORT = process.env.PORT;
/* creating a server */

const server = http.createServer((req, res) => {
    //res.setHeader('Content-Type', 'text/html');
    //res.statusCode = 404

    console.log(req.url);
    console.log(req.method);
    res.writeHead(200, { 'Content-Type': 'text/html'})
    // When using express, don't have to manually do all this
    res.end('<h1>Hello!</h1>');
});

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})