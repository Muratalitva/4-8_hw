import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home,About,Contact,Location, Main } from "./pages/index.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes >
        <Route element={<Main/>} path="">
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/location" element={<Location/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;