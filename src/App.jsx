import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ValidAuthroutes } from "./common/validRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className=" bg-center bg-cover">
        <Routes>
          {ValidAuthroutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
