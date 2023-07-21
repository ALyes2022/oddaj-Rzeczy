import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<Registration />} />
    </Routes>
  );
}

export default App;
