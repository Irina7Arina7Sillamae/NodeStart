//https://nodejs.org/dist/latest-v16.x/docs/api/path.html


const path = require(`path`)


console.log(__filename)
//Метод возвращает последнюю часть имени каталога. 
console.log(path.basename(__filename))
//Метод возвращает имя каталога. 
console.log(path.dirname(__filename))
//Метод возвращает расширение каталога.
console.log(path.extname(__filename))


//Метод возвращает объект, свойства которого представляют значимые элементы .
console.log(path.parse(__filename))


//Метод соединяет все заданные сегменты вместе, используя \ в качестве разделителя, 
//а затем нормализует результирующий путь.path.join()path
console.log(path.join(__dirname, 'test', 'second.html'))
//The method resolves a sequence of paths or path segments into an absolute path.path.resolve()
console.log(path.resolve(__dirname, './test', '/second.html'))