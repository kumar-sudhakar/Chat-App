import React, { useState } from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {

  const [selectedImage, setSelectedImage] = useState(null)
  const navigate = useNavigate()
  const [name, setName] = useState("Alison Martin")
  const [bio, setBio] = useState("Hi everyone, I am using QuickChat")

  const handleSubmit = async (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className='min-h-screen bg-cover bg-no-repeat flex items-center justify-center'>
      <div className='w-[min(90vw,700px)] border-2 border-gray-600 bg-white/10 p-6 rounded-2xl flex items-center justify-between max-sm:flex-col-reverse'>
        {/* Left Side Form */}
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 text-white flex-1'>
          <h3 className='text-lg'>Profile Details</h3>

          <label htmlFor="avatar" className='flex items-center gap-3 cursor-pointer text-gray-300'>
            <input 
              onChange={(e) => setSelectedImage(e.target.files[0])} 
              type="file" 
              id="avatar" 
              accept='.png, .jpg, .jpeg' 
              hidden 
            />
            <img 
              src={selectedImage ? URL.createObjectURL(selectedImage) : assets.avatar_icon} 
              alt="" 
              className={`w-12 h-12 ${selectedImage && 'rounded-full'}`} 
            />
            Upload profile image
          </label>

          <input 
            onChange={(e) => setName(e.target.value)} 
            value={name} 
            type="text" 
            placeholder='Your name' 
            required 
            className='p-2 bg-transparent border border-gray-500 rounded-md outline-none text-white' 
          />

          <textarea 
            onChange={(e) => setBio(e.target.value)} 
            value={bio} 
            placeholder='Write profile bio' 
            required 
            rows="4" 
            className='p-2 bg-transparent border border-gray-500 rounded-md outline-none text-white'
          ></textarea>

          <button 
            type='submit' 
            className='bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-2 rounded-md font-medium cursor-pointer'
          >
            Save
          </button>
        </form>

        {/* Right Side Image */}
        <img 
          src={assets.logo_icon} 
          alt="" 
          className='max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10' 
        />
      </div>
    </div>
  )
}

export default ProfilePage