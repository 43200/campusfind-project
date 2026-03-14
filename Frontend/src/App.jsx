import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Colleges from "./pages/Colleges";
import CollegeDetails from "./pages/CollegeDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import SavedColleges from "./pages/SavedColleges";


function App() {

  return (

    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/signup" element={<Signup />} />


      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/colleges/:type"
        element={
          <ProtectedRoute>
            <Colleges />
          </ProtectedRoute>
        }
      />

      <Route
        path="/college/:id"
        element={
          <ProtectedRoute>
            <CollegeDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/saved-colleges"
        element={<SavedColleges />}
      />


    </Routes>



  );
}

export default App;