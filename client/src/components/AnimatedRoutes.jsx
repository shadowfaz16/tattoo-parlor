import React, {lazy, Suspense} from 'react'
import { useLocation, Route, Routes } from 'react-router-dom'
const Home = lazy(() => import("../pages/Home"));
const CreatePost = lazy(() => import("../pages/CreatePost"));
const Community = lazy(() => import("../pages/Community"));
const Profile = lazy(() => import("../pages/profile/[id]"));

import {AnimatePresence} from 'framer-motion'

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<div>loading...</div>}>
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/create-tattoo" element={<CreatePost />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </AnimatePresence>
    </Suspense>
  )
}

export default AnimatedRoutes