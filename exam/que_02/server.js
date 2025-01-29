import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let students = [];

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  const student = req.body;
  students.push(student);
  res.status(201).json(student);
});

app.put("/students/:rollNo", (req, res) => {
  const { rollNo } = req.params;
  const updatedStudent = req.body;
  students = students.map((student) =>
    student.rollNo === rollNo ? updatedStudent : student
  );
  res.json(updatedStudent);
});

app.delete("/students/:rollNo", (req, res) => {
  const { rollNo } = req.params;
  students = students.filter((student) => student.rollNo !== rollNo);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
