const fs = require('fs')
const path = require('path')
const http = require('http')

const server = http.createServer((req, res) =>{
    // get file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

    // get file extension
    let extname = path.extname(filePath)

    // write content type
    let contentType;

    switch (extname) {
        case '.js':
             contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.jpeg':
            contentType = 'text/jpg';
            break;
        default:
            contentType = 'text/html';
            break;
    }

    
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {console.log(`Starting up server.\nServer now running on port ${PORT} ...`)})