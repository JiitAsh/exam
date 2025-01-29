import axios from "axios";
import { User } from "../types/User.ts";

const API_URL = "http://localhost:5000/students";

export const getStudents = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createStudent = async (student) => {
  const response = await axios.post(API_URL, student);
  return response.data;
};

export const updateStudent = async (student) => {
  const response = await axios.put(`${API_URL}/${student.rollNo}`, student);
  return response.data;
};

export const deleteStudent = async (rollNo) => {
  await axios.delete(`${API_URL}/${rollNo}`);
};
