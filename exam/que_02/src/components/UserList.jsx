import React from "react";
import UserItem from "./UserItem";

const UserList = ({ users, onDelete, onUpdate }) => {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {users.map((user) => (
          <UserItem
            key={user.rollNo}
            user={user}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
