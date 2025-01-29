import React, { useState } from "react";

const UserForm = ({ onSubmit, existingUser }) => {
  const [rollNo, setRollNo] = useState(existingUser ? existingUser.rollNo : "");
  const [name, setName] = useState(existingUser ? existingUser.name : "");
  const [phone, setPhone] = useState(existingUser ? existingUser.phone : "");
  const [state, setState] = useState(existingUser ? existingUser.state : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ rollNo, name, phone, state });
    setRollNo("");
    setName("");
    setPhone("");
    setState("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Roll No"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="State"
        value={state}
        onChange={(e) => setState(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
