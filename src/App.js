import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/Home";
import Register from "./Pages/Register";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/login" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
