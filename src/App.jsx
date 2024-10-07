import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "/src/Pages/HomePage";
import NoPage from "/src/Pages/NoPage";
import About from "/src/Components/About";
import Contact from "/src/Components/Contact";
import Services from "/src/Components/Services";
import Login from "/src/Login/Login";
import Signup from "/src/Login/Signup";
import UserDashboard from "/src/Dashboard/UserDashboard";
import AdminDashboard from "/src/Dashboard/AdminDashboard";
import MyState from "/src/context/myState";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForAdmin } from "/src/protectedRoute/ProtectedRouteForAdmin";
import { ProtectedRouteForUser } from "/src/protectedRoute/ProtectedRouteForUser";
import Booking from "./Components/Booking";
import ScrollTop from "./Components/ScrollTop";

const App = () => {
  return (
    <MyState>
      {" "}
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/UserDash"
            element={
              <ProtectedRouteForUser>
                <UserDashboard />
              </ProtectedRouteForUser>
            }
          />
          <Route
            path="/AdminDash"
            element={
              <ProtectedRouteForAdmin>
                <AdminDashboard />
              </ProtectedRouteForAdmin>
            }
          />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
};

export default App;
