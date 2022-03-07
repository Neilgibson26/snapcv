import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Explore from "./pages/Explore";
import NavigationBar from "./components/NaviagtionBar";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <Router>
      <NavigationBar
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="apply" element={<Apply />} />
        <Route path="explore" element={<Explore />} />
      </Routes>
    </Router>
  );
}

export default App;
