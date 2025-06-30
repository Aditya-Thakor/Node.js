const os = require('os');
const http=require('http');


//console.log(os.tmpdir());   //{Shows Temp File's Location}
// console.log(os.homedir()); // {shows User}
// console.log(os.platform()); // {platform/system type}
// console.log(os.hostname()); // {device name}
// console.log(os.arch());  // {system suported type}
// console.log(os.cpus());  // {CPU's specs..}
// console.log(os.freemem()); // {Returns the amount of free system memory in bytes as an integer}
// console.log(os.totalmem()); // {Returns the total amount of system memory }
// console.log(os.machine()); // {Returns the machine type}
// console.log(os.networkInterfaces()); //{Returns an object containing network interfaces that have been assigned a network address.}
// console.log(os.release()); //{Returns the operating system}
// console.log(os.type()); // {Returns the operating system name}


const server=http.createServer((req,res)=>{
    // res.write("Hello..")
    // if(req.url=="/"){
    //     res.write("Home Page");
    // }
    if(req.url=="/" && req.method=="POST" ){
        res.write("Home Page Post");
    }
    else{
        res.write("Home Page Get");
    }
    if(req.url=="/about"){
        res.write("About Page");
    }



    res.end();
});

server.listen(5000,()=>{
    console.log('Server is started....');
});