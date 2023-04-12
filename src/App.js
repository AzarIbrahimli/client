import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";


function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    document.title = "Participant Manager";
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  };

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      age,
      username,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          id: response.data.id,
          name,
          age,
          username,
        },
      ]);
    });
  };

  const deleteUser = (userId) => {
    Axios.delete(`http://localhost:3001/deleteUser/${userId}`).then((response) => {
      setListOfUsers(listOfUsers.filter((user) => user._id !== userId));
    });
  };


  return (
    <div className="App">
      <h1>Participant Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button onClick={createUser}> Create User </button>
      </div>

      <div className="usersDisplay">
        <ul>
          {listOfUsers.map((user) => {
            return (
              <li key={user.id}>
                <h3>Name: {user.name}</h3>
                <p>Age: {user.age}</p>
                <p>Username: {user.username}</p>
                <button onClick={() => deleteUser(user.id)}>Delete User</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
