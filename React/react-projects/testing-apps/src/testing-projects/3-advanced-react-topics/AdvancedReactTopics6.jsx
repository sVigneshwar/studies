import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AdvancedReactTopicsHome from "./AdvancedReactTopics/AdvancedReactTopicsHome";
import AdvancedReactTopicsAbout from "./AdvancedReactTopics/AdvancedReactTopicsAbout";
import AdvancedReactTopicsContact from "./AdvancedReactTopics/AdvancedReactTopicsContact";

// Optional: 404 page
function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}

export default function AdvancedReactTopics6() {
  const navStyle = {
    display: "flex",
    gap: "15px",
    padding: "10px",
    borderBottom: "1px solid #ccc",
    marginBottom: "20px",
  };

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "red"
  };

  return (
    <>
    <BrowserRouter>
      <nav style={navStyle}>
        <NavLink to="/" style={({isActive}) => isActive?activeStyle:undefined}>Home</NavLink>
        <NavLink to="/about" style={({isActive}) => isActive?activeStyle:undefined}>About</NavLink>
        <NavLink to="/contact" style={({isActive}) => isActive?activeStyle:undefined}>Contact</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<AdvancedReactTopicsHome />} />
        <Route path="/about" element={<AdvancedReactTopicsAbout />} />
        <Route path="/contact" element={<AdvancedReactTopicsContact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
