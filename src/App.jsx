import React from 'react'
import Home from '../pages/Home'
import Founders from '../pages/Founders'
import About from '../pages/AboutUs'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import WhatWeDo from '../pages/WhatWeDo'
// Create a NoPage component for 404 errors
const NoPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App