import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ContactForm from "./components/ContactForm";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <ContactForm />
      <Signup />
      <Login />
    </div>
  );
}

export default App;
