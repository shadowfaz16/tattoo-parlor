import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import { Analytics } from '@vercel/analytics/react';
import { logo } from "./assets"
import AnimatedRoutes from "./components/AnimatedRoutes";


const App = () => {
  return (
    <Router>
    <header className="w-full flex justify-between items-center bg-white sm:px-16 px-4 py-4 border-b border-b-gray-300">
      <Link to="/">
        <img src={logo} alt="logo" className="w-56 md:w-80 object-contain" />
      </Link>
      <div className="flex items-center justify-center gap-5">
      {/* <Link to="/community" className="hidden md:flex">
        Community
      </Link> */}
      <Link to="/create-tattoo" className="font-inter font-medium bg-emerald-400 text-white text-xs md:text-sm px-4 py-2 rounded-md">
        Create Tattoo
      </Link>
      </div>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <AnimatedRoutes />
      </main>
      <Analytics />
    </Router>
  )
}

export default App
