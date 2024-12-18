import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Games, Home, Login, Register, Admin, Profile } from "./pages";
import { Navbar } from "./components/SiteComponents/NavBar.jsx";
import Footer from "./components/SiteComponents/Footer.jsx";
import ProtectedRoutes from "./utils/ProtectedRoutes.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
