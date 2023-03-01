import React, {lazy, Suspense} from 'react'
import { useLocation, Route, Routes } from 'react-router-dom'
import { Home, CreatePost, Community } from "../pages"
import Profile from "../pages/profile/[id]"

// const Home = lazy(() => import("../pages/Home"));
// const CreatePost = lazy(() => import("../pages/CreatePost"));
// const Community = lazy(() => import("../pages/Community"));
// const Profile = lazy(() => import("../pages/profile/[id]"));

import {AnimatePresence} from 'framer-motion'

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      {/* <Suspense fallback={<div>loading...</div>}> */}
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/create-tattoo" element={<CreatePost />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile/:id" element={<Profile />} />
      </Routes>
      {/* </Suspense> */}
    </AnimatePresence>
  )
}

export default AnimatedRoutes