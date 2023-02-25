import React from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { logo } from "./assets"

import { Home, CreatePost } from "./pages"

const App = () => {

  return (
    <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-16 px-4 py-4 border-b border-b-gray-300">
      <Link to="/">
        <img src={logo} alt="logo" className="w-52 md:w-80 object-contain" />
      </Link>
      <Link to="/create-tattoo" className="font-inter font-medium bg-emerald-400 text-white text-xs md:text-sm px-4 py-2 rounded-md">
        Create Tattoo
      </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-tattoo" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
