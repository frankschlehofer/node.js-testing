import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
//const PORT = process.env.PORT;
const PORT = 8080;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);
console.log(__dirname);
/* creating a server */

const server = http.createServer(async (req, res) => {
    //res.setHeader('Content-Type', 'text/html');
    //res.statusCode = 404

    try {
        if (req.method == 'GET') {
            let filePath;
            if (req.url == '/') {
                filePath = path.join(__dirname, 'public', 'index.html');
            } else if (req.url == '/about') {
                filePath = path.join(__dirname, 'public', 'about.html');
            } else {
                throw new Error('Not found');
            }
            console.log('file path' + filePath);
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        } else {
            throw new Error('Method not allowed');
        }
    } catch {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end('Server Error');
    }
    
});

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})