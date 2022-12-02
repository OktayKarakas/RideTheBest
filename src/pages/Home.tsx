import React, { useState, useContext, useEffect } from 'react'
import Header from '../components/Header'
import Register from '../components/Register'

const Home = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(Boolean)
  return (
    <div>
      <Header>
        <button
          className="btn-default"
          onClick={() => {
            setIsRegisterModalOpen(true)
          }}
        >
          Get Started
        </button>
      </Header>
      <Register
        onClose={() => {
          setIsRegisterModalOpen(false)
          return isRegisterModalOpen
        }}
        isOpened={isRegisterModalOpen}
      />
    </div>
  )
}

export default Home
