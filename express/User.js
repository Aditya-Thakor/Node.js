const express=require('express');
const cors=require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app=express();
app.use(cors());
app.use(express.json());
app.use("/taskdata",express.static(path.join(__dirname, 'taksdata')));



const connectDB = require("./db");
const { ObjectId } = require('mongodb');
// app.use(cors());

const uploadDir = path.join(__dirname, 'taksdata');
if(!fs.existsSync(uploadDir)){
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'./taksdata');
  },
  filename: function(req,file,cb){
    cb(null, file.originalname);
  }
});


const upload = multer({storage:storage});


const userData=
[
  {
    "id": 1,
    "name": "Alice",
    "email": "alice@example.com",
    "isActive": true
  },
  {
    "id": 2,
    "name": "Bob",
    "email": "bob@example.com",
    "isActive": false
  },
  {
    "id": 3,
    "name": "Charlie",
    "email": "charlie@example.com",
    "isActive": true
  },
  {
    "id": 4,
    "name": "Diana",
    "email": "diana@example.com",
    "isActive": true
  },
  {
    "id": 5,
    "name": "Ethan",
    "email": "ethan@example.com",
    "isActive": false
  }
];

app.get('/users',(req,res)=>{
    res.json(userData);

    res.end();
});

// registration code (signup/signin)
app.post("/registration", async (req,res)=>{
  console.log("request")
  data = req.body;
  const db = await connectDB();
   const newUser = db.collection("Test").insertOne({
    firstname: data.firstname,
    lastname: data.lastname,
    username: data.username,
    email: data.email,
    password: data.password,
    confirmpass: data.confirmpass,
   
  }); // for POST data
  res.statusMessage="Record Added"
  res.json({"message":"Your registration is successfull."})
  res.end();
});


//creating task card
app.post("/task/create", upload.single('file') ,async (req,res)=>{
  console.log("task requist");
  console.log(req.body);
  if(!req.file){
    console.log("File not found")
  }

  data=req.body;
  const db=await connectDB();
  const newTask=db.collection("Task").insertOne({
    title:data.title,
    date:data.date,
    priority:data.priority,
    description:data.description,
    file:req.file.originalname,
    status:'Not Started'
  });
  res.statusMessage="Task record Added"
  res.end();
});


// Updating  Tasks
app.post("/task/update", async(req,res)=>{
  data = req.body;
  var status = data.status;

  

 const userId = data.id+"";
 const db=await connectDB();
  const result = await db.collection("Task").updateOne(
    {_id : new ObjectId(userId)},
    {
      $set:{status:status},
    }
  );
  console.log(result);
  res.end();
})

// Edit functionality
app.post("task/edit", async(req,res)=>{
  data.req.body;
  var status=data.status;
  var title=data.title;
  var date=data.date;
  var priority=data.priority;
  var discription=data.discription;
  var id=data.id+"";

  const db=await connectDB();
  const cardData= await db.collection("Task").updateOne(
    {_id: new ObjectId(id)},
    // {$set:{}}
  );
  res.end();
})

// Updating new card details..
app.post("/task/updateCard", async(req,res)=>{
  data=req.body;
  var title = data.title;
  var date = data.date;
  var priority = data.priority;
  var description =data.description
  var status=data.status;
  const userId = data.id+"";
  const db = await connectDB();

  const result = await db.collection("Task").updateOne(
    {_id : new ObjectId(userId)},
    {
      $set: {
        title: title,
        date:date,
        priority:priority,
        description:description,
        status:status
      }
     
    }
    
  );
  console.log(result);
  res.end();

})

// delete functionality
app.post("/task/delete", async(req,res) => {
  data = req.body;
  var id = data.id;
  const db=await connectDB();
  const result = await db.collection("Task").deleteOne(
    {
      _id : new ObjectId(id)
    },
  )
  console.log(result);
  res.send("Success");
  res.end();
});


app.get("/tasks", async (req,res)=>{
  const db = await connectDB();
  const data = await db.collection("Task").find().toArray();
  
  
  res.json(data);
  res.end();
});

app.listen(3001, ()=>{
    console.log("Server is started....")
})
