import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    usename: "admin",
    password: "admin"
  }

  const [user, setUser] = useState({ name: "", usename: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (details.usename == adminUser.usename && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        matricule: details.matricule,
        username: details.usename,
      });
    } else {
      console.log("Details do not match!");
      setError("details do not match!");
    }
  }

  const Logout = () => {
    setUser({ matricule: "", usename: "" });
  }

  return (
    <div className="App">
      {(user.usename != "") ? (
        <div className="welcome">
          <h2>welcome, <span> {user.name} </span></h2>
          <button onClick={Logout}> Logout </button>
        </div>
      ) :
        <LoginForm />


      }
    </div>

  )}

  export default App;