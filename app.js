require('dotenv').config()

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");


const auth = require("./middleware/auth");
const User = require("./Models/bhool.js");
const Client = require("./Models/client.js");

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

main()
  .then((result) => { console.log("database connected to bhoolgya"); })
  .catch(err => console.log(err));


app.listen(process.env.PORT, () => {
  console.log("app is listening to port 3000");
})



app.post("/data", auth, async (req, res) => {
  const { name, email, age, std, roll } = req.body;

  let newuser = new User({
    name: name, std: std, email: email, age: age, roll: roll
  });

  const user = await newuser.save();

  res.json(user);
})

app.get("/Alldata", auth, async (req, res) => {
  let alldata = await User.find()
  res.json(alldata);
})


app.put("/edit/:id/data", auth, async (req, res) => {
  const { email, age, roll, std, name } = req.body;
  const { id } = req.params;
  console.log(id)
  const user = await User.findByIdAndUpdate(id, { email, age, roll, std, name });
  res.json(user);
})

app.delete("/data/delete/:id", auth, async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  res.json(user);
})













app.post("/login/data", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const data = await Client.findOne({ email, password });
  if (!data) {
    return res.send("wrong email or password");
  }
  // Create JWT token
  const token = jwt.sign(
    {
      id: data._id,
      username: data.username
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h"
    }
  );

  // Store token in cookie
  res.cookie("token", token);

  res.json(data)
})

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.set({
    "Cache-Control": "no-store, no-cache, must-revalidate, private",
    "Pragma": "no-cache",
    "Expires": "0"
  });
  res.json("logout");
})



app.post("/signup/data", async (req, res) => {
  const { name, email, password } = req.body;

  const existingemail = await Client.findOne({ email });

  if (existingemail) {
    return res.send("email already exist");
  }

  const newclient = new Client({
    name: name,
    email: email,
    password: password,
  })
  const client = await newclient.save();

  // it will redirect on main page  after signup 
  if (client) {
    const token = jwt.sign(
      {
        id: client._id,
        username: client.username
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h"
      }
    );

    res.cookie("token", token);
    res.json(client);
  }
})


app.get("/api/check-auth", auth, (req, res) => {
  res.json({
    loggedIn: true
  });
});


//  name =Bhool
//  password ==orhg eunj gxrc nwwv