const mongoose = require("mongoose");
const config = require("config");
mongoose
  .connect(config.dbURI, { useNewUrlParser: true })
  .then(() => {
    console.log("Database connected");
  })
  .catch(err => {
    throw err;
  });
const studentSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  age: {
    required: true,
    type: Number
  },
  subjects: {
    type: Array
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});
const Student = mongoose.model("student", studentSchema);
const Students = [
  {
    name: "Thomas",
    age: 20,
    subjects: ["Data Mining", "Cloud Management"]
  },
  {
    name: "John",
    age: 20,
    subjects: ["Mathematics", "English"]
  }
];
Students.forEach(student => {
  Student.create(student)
    .then(crStu => {
      console.log(`Student with name ${crStu.name} created`);
    })
    .catch(err => {
      throw err;
    });
});
