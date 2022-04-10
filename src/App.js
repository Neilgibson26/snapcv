import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hire from "./pages/Hire";
import Explore from "./pages/Explore";
import NavigationBar from "./components/NaviagtionBar";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp/SignUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import useScript from "./hooks/useScript";
import PostJob from "./pages/PostJob";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useScript("https://upload-widget.cloudinary.com/global/all.js");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        // User is signed out
        setCurrentUser(null);
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <NavigationBar
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
              <SignUp
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            </>
          }
        />
        <Route
          path="/explore"
          element={
            <>
              <NavigationBar
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
              <Explore
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            </>
          }
        />
        <Route
          path="/hire"
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
          path="/profiles/:id"
          element={
            <>
              <NavigationBar
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
              <Profile
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <NavigationBar
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
              <Profile
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            </>
          }
        />
        <Route
          path="post"
          element={
            <>
              <NavigationBar
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
              <PostJob
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
