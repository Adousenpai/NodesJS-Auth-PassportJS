const express = require("express");
const mongoose = require("mongoose");
const expressLayout = require('express-ejs-layouts')
const dotenv = require("dotenv");
const app = express();
const port = 3000;

dotenv.config();


app.use(express.static("public"));

// connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log("Connected to db :)");
});

// EJS
app.use(expressLayout);
app.set('view engine', 'ejs')

//Middleware
app.use(express.json());

// Route Middleware
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/Users"));

app.listen(port, () => console.log(`App listening on port ${port} !`));
