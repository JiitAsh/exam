import React, { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from "./services/userService";
import { User } from "./types/User";

const App: React.FC = () => {
  const [students, setStudents] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      const data = await getStudents();
      setStudents(data);
    };
    fetchStudents();
  }, []);

  const handleAddOrUpdateUser = async (user: User) => {
    if (editingUser) {
      await updateStudent(user);
    } else {
      await createStudent(user);
    }
    setEditingUser(null);
    const updatedStudents = await getStudents();
    setStudents(updatedStudents);
  };

  const handleDeleteUser = async (rollNo: string) => {
    await deleteStudent(rollNo);
    const updatedStudents = await getStudents();
    setStudents(updatedStudents);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
  };

  return (
    <div>
      <h1>Student Management</h1>
      <UserForm onSubmit={handleAddOrUpdateUser} existingUser={editingUser} />
      <UserList
        users={students}
        onDelete={handleDeleteUser}
        onUpdate={handleEditUser}
      />
    </div>
  );
};

export default App;
