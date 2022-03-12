import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hire from "./pages/Hire";
import Apply from "./pages/Apply";
import Explore from "./pages/Explore";
import NavigationBar from "./components/NaviagtionBar";
import Profile from "./pages/Profile";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="apply"
          element={
            <>
              <NavigationBar
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
              <Apply />
            </>
          }
        />
        <Route
          path="explore"
          element={
            <>
              <NavigationBar
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
              <Explore />
            </>
          }
        />
        <Route
          path="hire"
          element={
            <>
              <NavigationBar
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
              <Hire />
            </>
          }
        />
        <Route
          path="profile"
          element={
            <>
              <NavigationBar
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
              <Profile />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
