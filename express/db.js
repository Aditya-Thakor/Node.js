const mongo =require('mongodb');
const url="mongodb+srv://adityagithub27x:Aditya%4027x@cluster0.uenvt9n.mongodb.net/";
const database= "Demodata";

const client = new mongo.MongoClient(url);

async function connectDB(){
    try{
        await client.connect();
        const db= client.db(database);
        console.log('connection Success..');
        return db;
        
    }catch(err){
        console.log("Connection Error=>" + err)
    }
}

module.exports = connectDB;