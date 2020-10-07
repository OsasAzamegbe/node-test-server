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

    // read file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, data) => {
                    if (err) throw err;

                    res.writeHead(404, {'Content-type': 'text/html'})
                    res.write(data, 'utf-8')
                    res.end()
                })
            } else {
                res.writeHead(500)
                res.write(`Server Error: ${err.code}`)
                res.end()
            }
        }

        res.writeHead(200, {'Content-type': contentType})
        res.write(data, 'utf-8')
        res.end()
    })

    
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {console.log(`Starting up server.\nServer now running on port ${PORT} ...`)})