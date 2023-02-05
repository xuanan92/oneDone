import React from "react"
import { Link } from "react-router-dom" 

export default function Navbar() {
  return (
    
    <>
    {/* preheader */}
      <div className="p-2 h-[30px] bg-gray-500">
        <ul className="text-[10px] flex w-auto float-right space-x-4">
      {/* TODO: after click will show Register form */}
          <Link to="/register" className="w-auto"> <li>Register</li> </Link>
      {/* TODO: after click will show logged in */}
          <Link to="/login" className="w-auto"> <li>Log in</li> </Link>
        </ul>
      </div>

    {/* navbar */}
      <nav className="bg-gray-800">
        <ul className="p-2 text-white flex items-center space-x-4">
          <Link to="/"><li>
          <img className="p-2 h-[50px]" src="./logo192.png" alt="fillthis" />
          </li> </Link>
          <Link to="/aboutus"><li>About us</li></Link>
          <Link to="/product"><li>Product</li></Link>
          <Link to="/blogs"><li>Blogs</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </nav>
    </>
  )
}
