const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Hello how are')
    }
    else if(req.url === '/about'){
        res.end('We are in about section ')
    }
    else{
        res.end(`
    <h1> Hello </h1>
    `)
    }
    
    
})

server.listen('7000')