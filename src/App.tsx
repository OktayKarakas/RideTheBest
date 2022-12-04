import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import NavProvider from './providers/NavProvider'
import Toggle from './components/Toggle'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <BrowserRouter>
      <NavProvider>
        <Toggle />
        <Nav />
        <HelmetProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HelmetProvider>
      </NavProvider>
    </BrowserRouter>
  )
}

export default App
