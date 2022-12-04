import React, { useState, useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Login from '../components/Login'
import Register from '../components/Register'

const Home = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(Boolean)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(Boolean)
  const [isWantLogin, setIsWantLogin] = useState(Boolean)
  return (
    <div>
      <Helmet>
        <title>RideTheBest | HOME</title>
      </Helmet>
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
        isWantLogin={() => {
          setIsLoginModalOpen(true)
          setIsRegisterModalOpen(false)
        }}
      />
      <Login
        onClose={() => {
          setIsLoginModalOpen(false)
          return isLoginModalOpen
        }}
        isOpened={isLoginModalOpen}
        isWantRegister={() => {
          setIsRegisterModalOpen(true)
          setIsLoginModalOpen(false)
        }}
      />
    </div>
  )
}

export default Home
