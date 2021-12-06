const http = require ('http')

//Cоздание сервера
//Чтения данных с сайта, доступ к указанной странице
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
//Форма для принятия сообщения
        res.end(`
            <h1>Form</h1>
            <form method = "post" action="/">
                <input name = "title" type = "text" />
                <button type = "submit">Send</button>
            </form>  
        `) 
//Mетод для отправки данных на сайт  
    } else if (req.method === 'POST') {
        const body = []
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        req.on('data', data => {
            body.push(Buffer.from(data))
        })
//вывод сообщения
        req.on('end', () => {
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