require('./new')

const http = require('http')

const server = http.createServer((req, res)=>{
    // console.log(req.url)
    // res.write('Hai Backend')
    // res.end()
    
    if(req.url =='/'){
        res.write('Hello Backend')
        res.end()
    }
    else if(req.url =='/home'){
        res.write('Hello Aadhi')
        res.end()
    }

    else if(req.url =='/about'){
        res.write('Hello HK')
        res.end()
    }

    else if(req.url =='/services'){
        res.write('Hello Bala')
        res.end()
    }

    else{
        res.write('Hello JD')
        res.end()
    }   
})
server.listen(2000)