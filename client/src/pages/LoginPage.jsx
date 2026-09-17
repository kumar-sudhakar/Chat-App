import React, { useState } from 'react'
import assets from '../assets/assets'

const LoginPage = () => {

  const [currentState, setCurrentState] = useState("Sign up")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [bio, setBio] = useState("")
  const [isDataSubmitted, setIsDataSubmitted] = useState(false)

  const onSubmitHandler = (e) => {
    e.preventDefault()

    if (currentState === "Sign up" && !isDataSubmitted) {
      setIsDataSubmitted(true)
      return
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center gap-8 sm:gap-20 max-sm:flex-col'>
      {/* Left side */}
      <img src={assets.logo_big} alt="" className='w-[min(30vw,250px)]' />

      {/* Right side */}
      <form onSubmit={onSubmitHandler} className='border-2 border-gray-500 bg-white/10 p-6 rounded-2xl flex flex-col gap-4 text-white shadow-lg w-[min(90vw,350px)]'>
        <h2 className='text-2xl font-medium flex justify-between items-center'>
          {currentState}
          {isDataSubmitted && (
            <img 
              onClick={() => setIsDataSubmitted(false)} 
              src={assets.arrow_icon} 
              alt="" 
              className='w-5 cursor-pointer' 
            />
          )}
        </h2>

        {currentState === "Sign up" && !isDataSubmitted && (
          <input 
            type="text" 
            placeholder='Full Name' 
            className='bg-transparent border border-gray-500 rounded-md p-2 outline-none text-white' 
            required 
            onChange={(e) => setFullName(e.target.value)} 
            value={fullName} 
          />
        )}

        {!isDataSubmitted && (
          <>
            <input 
              type="email" 
              placeholder='Email Address' 
              className='bg-transparent border border-gray-500 rounded-md p-2 outline-none text-white' 
              required 
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
            />
            <input 
              type="password" 
              placeholder='Password' 
              className='bg-transparent border border-gray-500 rounded-md p-2 outline-none text-white' 
              required 
              onChange={(e) => setPassword(e.target.value)} 
              value={password} 
            />
          </>
        )}

        {currentState === "Sign up" && isDataSubmitted && (
          <textarea 
            rows="4" 
            placeholder='Provide a short bio...' 
            className='bg-transparent border border-gray-500 rounded-md p-2 outline-none text-white' 
            required 
            onChange={(e) => setBio(e.target.value)} 
            value={bio}
          ></textarea>
        )}

        <button 
          type='submit' 
          className='py-2.5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md text-white font-medium cursor-pointer'
        >
          {currentState === "Sign up" ? "Create Account" : "Login now"}
        </button>

        <div className='flex items-center gap-2 text-xs text-gray-300'>
          <input type="checkbox" required />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>

        <div className='flex flex-col gap-1 text-sm text-gray-400'>
          {currentState === "Sign up" ? (
            <p className='text-sm text-gray-400'>
              Already have an account?{' '}
              <span 
                onClick={() => { setCurrentState("Login"); setIsDataSubmitted(false) }} 
                className='font-medium text-violet-500 cursor-pointer underline'
              >
                Login here
              </span>
            </p>
          ) : (
            <p className='text-sm text-gray-400'>
              Don't have an account?{' '}
              <span 
                onClick={() => { setCurrentState("Sign up") }} 
                className='font-medium text-violet-500 cursor-pointer underline'
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default LoginPage