const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("dotenv").config();

const errorHandler = require("./middleware/errorHandling");
const studentRoutes = require("./routes/student.route");
const userRoutes = require("./routes/user.route");

mongoose
.connect("mongodb://localhost:27017/student-management", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to DataBase successfully..."));

const app = express();
const port = process.env.PORT;

app.use(errorHandler);
app.use(express.json());

// connecting api endpoint to user routes
app.use("/api/user", userRoutes);

// connecting api endpoint to student routes
app.use("/api/students", studentRoutes);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
