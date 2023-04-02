import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (

    <>
      {/* preheader */}
      <div className="p-2 h-[40px] bg-gray-100">
        <ul className="flex w-auto float float-right space-x-4">
          {/* TODO: after click will show Register form */}
          <Link to="/register" className="w-auto"> <li>Register</li> </Link>
          {/* TODO: after click will show logged in */}
          <Link to="/login" className="w-auto"> <li>Log in</li> </Link>
        </ul>
      </div>

      {/* navbar */}
      <nav className="clear-both">
        <ul className="p-2 text-white flex items-center space-x-4">
          <Link to="/"><li>
            <img className="p-2 h-[100px] object-contain" src="/images/whitelogo.png" alt="onedonelogo" />
          </li> </Link>
          <li>
            Productivity & Stress Free! __ Capture || Clarify || Organize || Reflect || Engage
          </li>
          {/* <Link to="/aboutus"><li>About us</li></Link> */}
          {/* <Link to="/product"><li>Product</li></Link> */}
          {/* <Link to="/blogs"><li>Blogs</li></Link> */}
          {/* <Link to="/contact"><li>Contact</li></Link> */}
        </ul>
      </nav>
    </>
  )
}
