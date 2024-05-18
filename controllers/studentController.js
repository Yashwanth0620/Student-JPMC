const jwt = require("jsonwebtoken");
const {students} = require("../database")
const SECRET = "jg45y398%(44*++8ybg";

// @request GET
// @authentication notrequired
// @api /api/students
// @desc get all the students
const getStudents = (req, res) => {
  res.status(200).json(students);
};

// @request GET
// @authentication notrequired
// @api /students/:id
// @desc get student with given id
const getStudent = (req, res) => {
  const student = students.find((student) => student.id === req.params.id);

  if (!student) {
    res.status(404).send("Student with the given ID doesn't exist");
  }
  res.status(200).json(student);
};

// @request POST
// @authentication required
// @api /api/students
// @desc request to add new student
const postStudent = (req, res) => {
  jwt.verify(req.token, SECRET, (err, data) => {
    if (err) {
      res.status(401).send("Unauthorized user");
    }

    const { id, name, age } = req.body;
    const student = { id, name, age };

    students.push(student);
    res.status(201).json(student);
  });
};

// @request PATCH
// @authentication required
// @api /api/students/:id
// @desc patch request to update existing student
const patchStudent = (req, res) => {
  jwt.verify(req.token, SECRET, (err, data) => {
    if (err) {
      res.status(401).send("Unauthorized user");
    }

    const id = req.params.id;
    const index = students.findIndex((student) => student.id === id);
    const { name, age } = req.body;

    if (index === -1) {
      res.status(404).send("Student with the given ID doesn't exist");
    }
    const student = students.find((student) => student.id === id);
    students[index] = {
      id: student.id,
      name: name || student.name,
      age: age || student.age,
    };
    res.status(200).json(students[index]);
  });
};

// @request PUT
// @authentication required
// @api /api/students/:id
// @desc put request to rewrite existing student
const putStudent = (req, res) => {
  jwt.verify(req.token, SECRET, (err, data) => {
    if (err) {
      res.status(401).send("Unauthorized user");
    }

    const id = req.params.id;
    const index = students.findIndex((student) => student.id === id);
    const { name, age } = req.body;

    if (index === -1) {
      res.status(404).send("Student with the given ID doesn't exist");
    }
    students[index] = { id, name, age };
    res.status(200).json(students[index]);
  });
};

// @request PUT
// @authentication required
// @api /api/students/:id
// @desc put request to rewrite existing student
const deleteStudent = (req, res) => {
  jwt.verify(req.token, SECRET, (err, data) => {
    if (err) {
      res.status(401).send("Unauthorized user");
      // return;
    }else{
      const student = students.find((student) => student.id === req.params.id);
      if (!student) {
        res.status(404).send("Student with the given id isn't present");
      }
      students.splice(students.indexOf(student), 1);
      res.status(200).json(student);
    }
  });
};

module.exports = {
  getStudents,
  getStudent,
  postStudent,
  patchStudent,
  putStudent,
  deleteStudent,
};
