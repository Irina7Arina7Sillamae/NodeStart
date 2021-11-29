const http = require ('http')
const path = require ('path')
const fs = require ('fs')

//Cоздание своего сервера
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })
//выход на главную страницу
        if (req.url === '/') {
            fs.readFile(
                path.join(__dirname, 'views',  'index.html'),
                'utf-8',
                (err, content) => {
                    if (err) { 
                        throw err
                    }

                    res.end(content)
                }
            )
//выход на страницу About
        } else if (req.url === '/about') {
            fs.readFile(
                path.join(__dirname, 'views', 'about.html'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        throw err
                    }
                    res.end(content)
                }
            )
//выход на страницу Art
        } else if (req.url === '/art') {
            fs.readFile(
                path.join(__dirname, 'views', 'art.html'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        throw err
                    }
                    res.end(content)
                }
            )
        } else if (req.url === '/animals') {
            fs.readFile(
                path.join(__dirname, 'views', 'animals.html'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        throw err
                    }
                    res.end(content)
                }
            )
//выход на страницу Architec
        } else if (req.url === '/architec') {
            fs.readFile(
                path.join(__dirname, 'views', 'architec.html'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        throw err
                    }
                    res.end(content)
                }
            )
        }
    } else if (req.method === 'POST') {
        const body = []
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        req.on('data', data => {
            body.push(Buffer.from(data))
        })

        req,on('end', () => {
            const message = body.toString().split('=')[1]

            res.end(`
            <h1>Ваше сообщение: ${message}</h1>
            `)
        })
    }
})
        
//сервер слушает порт 3000
server.listen(3000, () => {
    console.log('Server is running...')
})