//Homework-1

// const random = require("random");

// const events = require('events');

// const fs = require('fs');

// const os = require('os');

// const argv = require('minimist')( process.argv.slice(2) );

import {createServer} from 'http';
import fs from 'fs';
import path from 'path';

// const char = require("./Modules/charOneSecondOutput");
// let x = require('./homework2');
// const wordsFromString = require('./Modules/wordsFromString');

// console.log(__filename);

// console.log(__filename.length);

//Homework-2



// for(let i = 0; i < 5; i++){
//     console.log(x.foo())
// }

//Homework-4

// wordsFromString('sdfsd 121!sdfsd sdfsdf sdf@sdf tigran mary lilit !sds $sds')

//Homework-5



// char('tigran')



// fs.readFile('./test.txt', (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// console.log('lastline')

// fs.writeFile('./test.txt', 'hello world', () => {
//     console.log('file was written');
// })

// fs.writeFile('./test1.txt', 'hello world again', () => {
//     console.log('file was written');
// })


// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if(err){
//             console.log(err)
//         }
    
//         console.log('folder created');
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err)
//         }
//         console.log('folder deleted')
//     })


// }

// if(fs.existsSync('./deleteme.txt')){
//     fs.unlink('./deleteme.txt', (err) => {
//         if(err){
//             console.log(err)
//         }
//         console.log('file deleted')
//     })
// }

// const readStream = fs.createReadStream('./blog3.txt', { encoding: 'utf8' });

// readStream.on('data', (chunk) => {
//     console.log('-----NEW CHUNK-----');
//     console.log(chunk)
// })



                      //Lesson-2 

//Homework-1



// console.log(os.totalmem());

//Homework-2

// console.log(os.networkInterfaces());

//Homework-3

// function foo(){
//     let textName = random.int(0, 9);
//     for(let i = 0; i < 7; i++){
//         textName = textName + '' + random.int(0, 9)
//     }
//     return textName
// }

// fs.writeFile(`./${foo()}.text`, `${os.cpus().length}`, function(){
//     console.log('file created')
// })

//Homework-4


// if(fs.existsSync('./input')){
//     fs.readFile('./input.txt', (err, text) => {
    
//         let str = text.toString().replaceAll(' ', '-');
    
//         fs.writeFile('./input.txt', str, () => {
//             console.log('written')
//         });
//         if(fs.existsSync('./write.txt')){
//             fs.writeFile('./write.txt', str, () => {
//                 console.log('writen1')
//             })
//         }
        
//     });
// }

//Homeworks-5


// for(let i = 1; i <= 3; i++){
//     fs.readFile(`./homework${i}.js`, (err, data) => {
//         console.log(data.toString());

//         fs.writeFile(`./${os.platform()}_${new Date().getHours()}_${new Date().getMinutes()}_${new Date().getMinutes()}.txt`, data, () => {
//             console.log('done')
//         })
//     })
// }

const EventEmtter = events.EventEmitter;

const logger = new EventEmtter();

let myEvent = (msg) => {
    console.log(msg)
}

logger.on('message', myEvent)

logger.emit('message', 'Lord Jesus we love you');

let users = [];
let msgs = [];

myEvent = (msg) => {
    console.log(`New message ${msg}`);
    msgs.push(msg)
}

logger.on('message', myEvent)

logger.emit('message', 'Jesus is Lord');
logger.emit('message', 'Jesus is Savior');
logger.emit('message', 'Jesus is God');

console.log(msgs);

logger.on('login', (name) => {
    console.log(`New user ${name}`);
    users.push(name)
});

logger.emit('login', 'Tigran');
logger.emit('login', 'Lilit');
logger.emit('login', 'Mary');


logger.on('getUsers', (name) => {
    
    console.log('Logged users');
    for(let key in name){
        console.log(name[key])
    }
});

logger.emit('getUsers', users)

logger.on('getMessages', (name) => {
    console.log('Messages');
    for(let key in msgs){
        console.log(name[key])
    }
});

logger.emit('getMessages', msgs);

logger.emit('getUsers', users)
logger.emit('getMessages', msgs);


// console.log( argv );

//Test Meschian

// const mimeTypes = {
//     ".html": "text/html",
//     ".css" : "text/css",
//     ".js" : "text/javascript"
// }

// function fileMiddleware(req, res, next){
//     let url = req.url;
//     if(url === "/"){
//         url = "/index.html"
//     }
//     const filePath = path.resolve("public" + url);
//     fs.promises.access(filePath)
//     .then(() => {
//         const ext = path.extname(filePath);
//         res.writeHead(200, {"Content-Type": mimeTypes[ext]});
//         fs.createReadStream(filePath).pipe(res);
//     })
//     .catch(() => {
//         next();
//     })
// }

// const server = createServer((req, res) => {

//     fileMiddleware(req, res, () => {
//         if(req.url === "/hello"){
//             res.writeHead(200, {"Content-Type": "text/plain"});
//             res.end("Hello world")
//         } else if(req.url === "/bye"){
//             res.writeHead(200, {"Content-Type": "application/json"});
//             res.end(JSON.stringify({
//                 name: "Joe"
//             }));
//         } else {
//             res.writeHead(404, {"Content-Type": "text/plain"});
//             res.end("Data not found");
//         }
//     })
    
// });

// server.listen(3001);

