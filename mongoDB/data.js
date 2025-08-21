const { ObjectId } = require("mongodb");
const connectDB = require("./db");

(
  async () => {
   const db = await connectDB();
  //  const newUser = db.collection("Test").insertOne({
  //   name: "user-5",
  //   email: "user1@gmail.com",
  //   contact: "5456454564",
  //   password: "usr5@123",
  // }); // for POST data


  // Edit data
  const userId = "686ce296327626c7cd6b2ec2";
  const result = db.collection("Test").updateOne(
    {_id : new ObjectId(userId)},
    {
      $set: {name:'Demo User',email:'demouser@gmail.com'}
    }
  );

  console.log("Result = "+result);

  const user = await db.collection("Test").find().toArray(); // for GET data
  console.log(user);
})();
