import React from "react";

const UserItem = ({ user, onDelete, onUpdate }) => {
  const handleDelete = () => {
    onDelete(user.rollNo);
  };

  const handleUpdate = () => {
    onUpdate(user);
  };

  return (
    <li>
      <span>
        {user.rollNo} - {user.name} - {user.phone} - {user.state}
      </span>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default UserItem;
