const express = require("express");
const jwt = require("jsonwebtoken");
const { validateToken } = require("./middleware/validateToken");
const {
  getStudents,
  deleteStudent,
  getStudent,
  postStudent,
  patchStudent,
  putStudent,
} = require("./controllers/studentController");
const { loginUser } = require("./controllers/userController");
const app = express();
const PORT = 3000;

app.use(express.json());

// routes for user
app.post("/login", loginUser);

// routes for student functionality
app.get("/api/students", getStudents);
app.get("/api/students/:id", getStudent);
app.post("/api/students", validateToken, postStudent);
app.put("/api/students/:id", validateToken, putStudent);
app.patch("/api/students/:id", validateToken, patchStudent);
app.delete("/api/students/:id", validateToken, deleteStudent);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
