const { error } = require('console');
const fs = require('fs');


// fs.writeFile('data.txt','demo of FS', (error)=>{
//     if(error) return console.log(error);
//     console.log("data is added!!");
// });  //<--new file create kri tema data add kare.. & jyare data change karie new data old dataq sathe REPLACE thay se..

// fs.appendFile('data.txt', '\nthis is a fs demo', (error)=>{
//     if(error) return console.log(error);
//     console.log('data added!');
// });   // file ma new data add kare without deleting old data..

// fs.readFile('data.txt','utf-8',(error,data)=>{
//     console.log(data);
// })  // File read karva


// fs.unlink('data.txt', (error)=>{
//     if (error) return console.log(error);
//     console.log('file deleted!!');
// });   // File delete karva..


// Ex. create a .xls file and add some data 

    fs.writeFile('data.xls','React js \tNode js\nReact Demo\tNode demo', (error)=>{
        if(error)return console.log(error);
        console.log('File created successfully..');
    });

    fs.readFile('data.xls','utf-8',(error,data)=>{
        console.log(data);
    })