import express from "express";
import User from "../Models/UserModel.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
import authtoken from "../middleware/authtoken.js";
dotenv.config()
const userRouter = express.Router();
const jwtkey = process.env.JWTKEY;
//sign in
userRouter.post("/regiser", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({ email, username, password });
    const response = await user.save();
    res.status(200).json({ msg: "data saved", response });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});


//login
userRouter.post("/login", async (req, res) => {
  try {
    const { email,password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      if (user.password === password) {
        const token = jwt.sign({ id: user._id ,username:user.username}, jwtkey);
        res.cookie("token", token, {
          httpOnly: true,
        });
        res.status(200).json({ msg: "login successfull", user });
      }
      else{
        res.status(404).json({ msg: "wrong password" });
      }
    } else {
      res.status(404).json({ msg: "user not found" });
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

userRouter.get('/getuser', authtoken ,async(req,res)=>{
  try {
    const username = req.username
  
    return res.send(username)
  } catch (error) {
    res.status(500).send("Internal server error");
  }
})
export default userRouter