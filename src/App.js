import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    console.log(...usersList, uName, uAge);
    setUsersList(() => {
      return [
        ...usersList,
        { name: uName, age: uAge, id: Math.floor(Math.random() * 9999) },
      ];
    });
  };

  return (
    <div>
      <AddUser onAdduser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
