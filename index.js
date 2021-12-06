const http = require ('http')

//Cоздание своего сервера
const server = http.createServer((req, res) => {
    console.log(req.url)

    res.write('<h1>Hello from NodeJS</h1>')
    res.write('<h2>Hello from NodeJS</h2>')
    res.write('<h3>Hello from NodeJS</h3>')
    res.end(`
    <div style="background: #f4e539; width: 400px; height: 200px;">
    <h1>Test</h1>
    </div>
    
    <img src="https://klike.net/uploads/posts/2019-05/1556708032_1.jpg" style=" width: 400px; height: 200px" >
    
    <div style="background: #fe876c ; width: 400px; height: 200px; padding-top: 50px;">
    <div style="text-align: center;  font-size: 20px;">Aspirations subsided; different beauty
    <br>Changed the old one; jubilant summer
    <br>Strong rays are no longer warmed,
    <br>Nature is all full of the last warmth;
    <br>Even along the wet between the flowers flaunt.
    <br>Alexey Tolstoy
    </div>
    </div>
    `)
})

//сервер слушает порт 3000
 server.listen(3000, () => {
    console.log('Server is running...')
})