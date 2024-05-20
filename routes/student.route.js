const express = require("express");
const routes = express.Router();
const { validateToken } = require("../middleware/validateToken");
const {
  getStudents,
  deleteStudent,
  getStudent,
  postStudent,
  patchStudent,
  putStudent,
} = require("../controllers/student.controller");

routes.route("/").get(getStudents).post(validateToken, postStudent);

routes
  .route("/:id")
  .get(getStudent)
  .put(validateToken, putStudent)
  .patch(validateToken, patchStudent)
  .delete(validateToken, deleteStudent);

module.exports = routes;
