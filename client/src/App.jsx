import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import assets from './assets/assets' // Or whatever this file is named (e.g., './assets')

const App = () => {
  return (
   <div
  className="min-h-screen w-full bg-cover bg-no-repeat bg-center"
  style={{ backgroundImage: `url(${assets.bgImage})` }}
>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App