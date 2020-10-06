const fs = require('fs')
const http = require('http')

const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write('<h1 style="display: flex; justify-content: center;">HOME PAGE</h1>')
    res.end()
})

server.listen(PORT, () => console.log(`Server Started.\nServer running on port ${PORT}...`))
