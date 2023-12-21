import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/index.jsx";
import { Dashboard } from "./pages/dashboard.jsx";
import { Login } from "./pages/login.jsx";
import { Register } from "./pages/register.jsx";
import { Nav } from "./pages/nav.jsx";
import { useEffect, useState } from "react";
import { Payment } from "./pages/payment.jsx";
import "@fontsource/k2d";
import "./assets/css/main.css";


function App() {
  const [userAuth, setUserAuth] = useState();
  useEffect(() => {
    // if (userAuth) {
    //   const userAuthStorage = localStorage.getItem("user");
    //   if (userAuth) {
    //     setUser(JSON.parse(userAuth));
    //   } else {
    //     // metodo de user logueado
    //   }
    // }
  });
  return (
    <Router>
      <Nav user={userAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment/:plan" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
