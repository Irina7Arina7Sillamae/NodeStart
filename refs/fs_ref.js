//https://nodejs.org/dist/latest-v16.x/docs/api/fs.html

const fs = require('fs')
const path = require('path')

//File System
//Асинхронно создает каталог.
fs.mkdir(
    path.join(__dirname, 'notes'), 
    err => {
    if (err) throw err
    console.log('Папка была создана')
})

//Асинхронно записывает данные в файл, заменяя файл, если он уже существует.
fs.writeFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'Hello World! ',
    (err) => {
        if (err) throw err
        console.log('Файл был создан')

 //Асинхронно меняет(добавляет) содержимое файла.       
        fs.appendFile(
            path.join(__dirname, 'notes', 'mynotes.txt'),
            ' From append file',
            (err) => {
                if (err) throw err
                console.log('Файл был изменен')

//Асинхронно считывает все содержимое файла.
//                fs.readFile(
//                  path.join(__dirname, 'notes', 'mynotes.txt'),
//                  'utf-8',
//                  (err, data) => {
//                      if (err) throw err
//                      console.log(data)

//Renames the file from to . 
                fs.rename(
                    path.join(__dirname, 'notes', 'mynotes.txt'),
                    path.join(__dirname, 'notes', 'text.txt'),
                    (err) => {
                    if (err) throw err
                    console.log('Файл переименован')

//Асинхронно считывает все содержимое файла.
                        fs.readFile(
                            path.join(__dirname, 'notes', 'text.txt'),
                            'utf-8',
                            (err, data) => {
                                if (err) throw err
                                console.log(data)
                            }
                        )
                   }
                )
            }
        )
    }
)
Renames to .oldPathnewPath
fs.rename(
   path.join(__dirname, 'notes', 'mynotes.txt'),
   path.join(__dirname, 'notes', 'notes.txt'),
   (err) => {
   if (err) throw err
   console.log('Файл переименован')
   }
)




//    fs.writeFile(
//            path.join(__dirname, 'test', 'text.txt'),
//            'SKTVp20! ',
//            (err) => {
//                if (err) throw err
//                console.log('Файл был создан')
//
//                fs.appendFile(
//                    path.join(__dirname, 'test', 'text.txt'),
//                    ' 2021 Sergei Lobyshev',
//                    (err) => {
//                        if (err) throw err
//                        console.log('Файл был изменен')
//
//                        fs.readFile(
//                            path.join(__dirname, 'test', 'text.txt'),
//                            'utf-8',
//                            (err, data) => {
//                                if (err) throw err
//                                console.log(data)
//                            }
//                        )   
//                    }
//                )
//            }
//        )
