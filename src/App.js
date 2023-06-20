import React from "react";
import Header from "./components/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Parent from "./pages/Parent";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      {/* here we defining router  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Parent />}>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
