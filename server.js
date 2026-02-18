const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Demo login user
const USER = {
  email: "admin@magical.com",
  password: "123456"
};

// Serve login page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === USER.email && password === USER.password) {
    res.send("<h2>Login Successful 🎉 Welcome to Magical Panel</h2>");
  } else {
    res.send("<h3>Invalid Email or Password ❌</h3>");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server started"));
