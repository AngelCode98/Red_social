import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homes from "./pages/Homes";      
import Login from "./pages/Login";
import Register from "./pages/Register";
import SocialApp from "./pages/SocialApp"; 
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: "70px" }}>
        <Routes>
          {/* Página inicial */}
          <Route path="/" element={<Homes />} />

          {/* Login y registro */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Red social protegida */}
          <Route element={<ProtectedRoute />}>
            <Route path="/social" element={<SocialApp />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
