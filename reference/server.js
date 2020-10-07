const fs = require('fs')
const http = require('http')
const path = require('path')

const PORT = process.env.PORT || 5000
const STATIC_ROOT = path.join(__dirname, 'public')


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'})
    if (req.url === '/'){
        fs.readFile(path.join(STATIC_ROOT, 'index.html'), 'utf-8', (err, data) => {
            if (err) throw err
            res.write(data)
            res.end()
        })        
    } else if (req.url === '/about'){
        fs.readFile(path.join(STATIC_ROOT, 'about.html'), 'utf-8', (err, data) => {
            if (err) throw err
            res.write(data)
            res.end()
        })        
    }
})

server.listen(PORT, () => console.log(`Server Started.\nServer running on port ${PORT}...`))
