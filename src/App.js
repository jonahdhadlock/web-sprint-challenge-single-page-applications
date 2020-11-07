import React, { useState } from 'react';
import './App.css';
// import { Route, Switch } from 'react-router-dom';
// import Home from './Home';
import Form from './Form';

function App() {
    const [users, setUsers] = useState("");

  const addNewUser = (user) => {
    const newUser = {
      name: user.name,
      email: user.email,
      role: user.password
    };

    setUsers([newUser, ...users]);
  };
  return (
    <div className="App">
      {/* <Switch>
        <Route>exact path="/"{Form.js}</Route>
        </Switch> */}
      <Form />
    </div>
  );
}

export default App;
