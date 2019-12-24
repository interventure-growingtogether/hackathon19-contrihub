import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "antd/dist/antd.css";

import LoginButton from "./components/Auth/LoginButton";
import Auth from "./components/Auth/Auth";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <LoginButton />

        <Route path="/auth" component={Auth} />
      </div>
    </Router>
  );
}

export default App;
