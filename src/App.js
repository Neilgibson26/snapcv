import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hire from "./pages/Hire";
import Apply from "./pages/PostJob";
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

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // const uid = user.uid;
      setCurrentUser(user);
    } else {
      // User is signed out
      setCurrentUser(null);
    }
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="signup"
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
        <Route
          path="post"
          element={
            <>
              <NavigationBar
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
              <PostJob />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
