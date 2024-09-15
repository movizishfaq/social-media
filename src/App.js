import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Login, Home, Profile, Register, Resetpassword } from "./pages"; // Ensure correct paths
import Layout from "./Layout"; // Ensure this path is correct

function App() {
  const theme = useSelector((state) => state.theme?.theme || "light"); // Provide a fallback
  const user = useSelector((state) => state.user?.user || {}); // Provide a fallback

  return (
    <div data-theme={theme} className="w-full min-h-[100vh] text-blue-500">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
      </Routes>
    </div>
  );
}

export default App;
