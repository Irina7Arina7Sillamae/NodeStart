const http = require ('http')

const server = http.createServer((req, res) => {
    console.log(req.url)

    res.write('<h1>Hello from NodeJS</h1>')
    res.write('<h2>Hello from NodeJS</h2>')
    res.write('<h3>Hello from NodeJS</h3>')
    res.end(`
    <div style="background: lightblue; width: 400px; height: 200px;">
    <h1>Test</h1>
    </div>
    
    <img src="https://klike.net/uploads/posts/2019-05/1556708032_1.jpg" style=" width: 200px; height: 200px" >
    
    <div style="background: lightgreen; width: 400px; height: 200px;">
    <div>Microsoft and our third-party vendors use cookies to store and access information such 
    as unique IDs to deliver, maintain and improve our services and ads. If you agree, MSN 
    and Microsoft Bing will personalize the content and ads that you see. You can select 
    ‘I Accept’ to consent to these uses or click on ‘Manage preferences’ to review your options  
    You can change your selection under ‘Manage Preferences’ at the bottom of this page.
    </div>
    </div>
    `)
})

server.listen(3000, () => {
    console.log('Server is running...')
})