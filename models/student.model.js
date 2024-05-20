const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        default: 18
    },
    course: String
});

const studentModel = mongoose.model("student", studentSchema);
module.exports = {studentModel};
