const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const auth = require("./middleware/auth");
const User = require("./Models/bhool.js");
const Client = require("./Models/client.js");

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"));
app.use(cookieParser());
const SECRET_KEY = "mysecretkey";

async function main() {
  await mongoose.connect('mongodb://127.0.0.1/bhoolgya');
}

main()
  .then((result) => { console.log("database connected to bhoolgya"); })
  .catch(err => console.log(err));


app.listen(3000, (req, res) => {
  console.log("app is listening to port 3000");
})

app.get("/", auth, (req, res) => {
  res.render("index.ejs");
})

app.post("/data", auth, async (req, res) => {
  const { name, email, age, std, roll } = req.body;

  let newuser = new User({
    name: name, std: std, email: email, age: age, roll: roll
  });

  await newuser.save();

  res.redirect("/Alldata");
})

app.get("/Alldata", auth, async (req, res) => {
  let alldata = await User.find()
  res.render("alldata.ejs", { alldata });
})

app.get("/data/edit/:id", auth, async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.render("editpage.ejs", { user });
})

app.put("/edit/:id/data", auth, async (req, res) => {
  const { email, age, roll, std, name } = req.body;
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, { email, age, roll, std, name });
  res.redirect("/Alldata");
})

app.delete("/data/delete/:id", auth, async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  res.redirect("/Alldata");
})









app.get("/login", (req, res) => {
  res.render("loginform.ejs");
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
    SECRET_KEY,
    {
      expiresIn: "1h"
    }
  );

  // Store token in cookie
  res.cookie("token", token);

  res.redirect("/");
})

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.set({
    "Cache-Control": "no-store, no-cache, must-revalidate, private",
    "Pragma": "no-cache",
    "Expires": "0"
  });
  res.redirect("/login");
})


app.get("/signup", (req, res) => {
  res.render("signupform.ejs");
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
      SECRET_KEY,
      {
        expiresIn: "1h"
      }
    );

    res.cookie("token", token);
    res.redirect("/");
  }
})



//  name =Bhool
//  password ==orhg eunj gxrc nwwv