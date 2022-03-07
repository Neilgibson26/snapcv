import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Apply";
import Home from "./pages/Home";
import Profile from "./pages/Home";
import Create from "./pages/Explore";
import Apply from "./pages/Apply";
import Explore from "./pages/Explore";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="apply" element={<Apply />} />
        <Route path="explore" element={<Explore />} />
      </Routes>
    </Router>
  );
}

export default App;
