const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const User = require("./models/user.model")
const { hashPassword } = require("./authentication/hashedPassword")
const bcrypt = require("bcryptjs")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/code-editor");

app.get("/",function(req,res){
  try {
    res.status(200).json({msg:"it is a get function request"})
  } catch (error) {
    res.json({error:"some error occured"})
  }
})

app.post("/sign-in", async (req, res) => {
    const {email, password} = req.body;
    try {
      const user = await User.findOne({ email: email });
      
      if (!user) {
        return res.json("No record existed");
      }
  
      // Compare the provided password with the hashed password in the database
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
  
      if (isPasswordCorrect) {
        res.json("Success");
      } else {
        res.json("Incorrect Password");
      }
    } catch (error) {
      console.error("Error in /sign-in:", error);
      res.status(500).json("An error occurred. Please try again.");
    }
      })



app.post("/sign-up", async (req, res) => {
  try {
   const { firstName,lastName, email, password } = req.body;
   // validation
   if (!firstName) return res.status(400).send("firstName is required");
   if (!lastName) return res.status(400).send("lastName is required");
   if (!password || password.length < 6)
    return res
     .status(400)
     .send(
      "Password is required and should be min 6 characters long"
     );
   let userExist = await User.findOne({ email }).exec();
   if (userExist) return res.status(400).send("User already exits.");
   // hash password
   const hashedPassword = await hashPassword(password);
   // register
   const user = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
   });
   await user.save();
   console.log("saved user", user);
   return res.json({ ok: true });
  } catch (err) {
   console.log(err);
   return res.status(400).send("Error. Try again.");
  }
 })
//  app.get("/sign-in/forgot-password",(req,res)=>{
//   res.json({msg:"this is a /sign-in/forgot-password get request"})
//  })

 app.post("/sign-in/forgot-password",async (req,res)=>{
  const {email,password} = req.body;
  console.log("the email is: "+ email)
  try {
   
    const user = await User.findOne({ email });
    if(!user){
      res.status(400).json({message:"user dosen't exits"})
    }

    if (!password || password.length < 6)
      return res
       .status(400)
       .json({msg:
        "Password is required and should be min 6 characters long"}
       );

       const hashedPassword = await hashPassword(password);

       user.password = hashedPassword;
       await user.save();

       return res.json({ message: "Password reset successful" });
  } catch (error) {
    return res.status(400).json({msg:"Error. Try again. /sign-in/forgot-password post req"});
  }
 })


app.listen(3000, () => {
    console.log("listening to port 3000")
})