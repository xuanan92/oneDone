import React from 'react'
import HomePage from './app/clients/containers/HomePage'
import Register from "./app/clients/components/Register"
import Navbar from "./app/clients/components/Navbar"
import Footer from "./app/clients/components/Footer"
import Login from "./app/clients/components/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/aboutus" element={<Login />} /> */}
          {/* <Route path="/products" element={<Login />} /> */}
          {/* <Route path="/blogs" element={<Login />} /> */}
          {/* <Route path="/contact" element={<Login />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
