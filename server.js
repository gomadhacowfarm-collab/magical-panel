const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const USER = {
  email: "admin@magical.com",
  password: "123456"
};

// Login Page (No separate HTML file needed)
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Magical Panel Login</title>
      <style>
        body {
          background: #0f172a;
          color: white;
          font-family: Arial;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .box {
          background: #1e293b;
          padding: 30px;
          border-radius: 10px;
          width: 300px;
        }
        input {
          width: 100%;
          padding: 10px;
          margin: 8px 0;
          border: none;
          border-radius: 5px;
        }
        button {
          width: 100%;
          padding: 10px;
          background: #22c55e;
          border: none;
          color: white;
          border-radius: 5px;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <h2>Magical Panel</h2>
        <form method="POST" action="/login">
          <input type="email" name="email" placeholder="Email" required>
          <input type="password" name="password" placeholder="Password" required>
          <button type="submit">Login</button>
        </form>
      </div>
    </body>
    </html>
  `);
});

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
