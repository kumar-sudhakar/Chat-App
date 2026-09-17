import React, { useEffect, useRef } from 'react'
import { messagesDummyData } from '../assets/assets'
import { formatMessageTime } from '../lib/utils'
import assets from '../assets/assets';

const ChatContainer = ({ selectedUser, setSelectedUser }) => {

  const scrollEnd = useRef()

  useEffect(() => {
    if (scrollEnd.current) {
      scrollEnd.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return selectedUser ? (
    <div className='w-full overflow-scroll relative backdrop-blur-lg'>
      {/* Header */}
      <div className='flex items-center gap-3 py-3 mx-4 border-b border-gray-600'>
        <img src={assets.profile_martin} alt="" className='w-8 rounded-full' />
        <p className='flex-1 text-lg text-white flex items-center gap-2'>
          Martin Johnson
          <span className='w-2 h-2 rounded-full bg-green-500'></span>
        </p>
        <img 
          onClick={() => setSelectedUser(null)} 
          src={assets.arrow_icon} 
          alt="" 
          className='md:hidden max-w-7 cursor-pointer' 
        />
        <img src={assets.help_icon} alt="" className='max-md:hidden max-w-5' />
      </div>

      {/* Chat area */}
      <div className='p-4 md:p-6 overflow-y-scroll h-[calc(100%-120px)]'>
        {messagesDummyData.map((message, index) => (
          <div 
            key={index} 
            className={`flex items-end gap-2 mb-4 ${message.senderId !== '67bc6689d0eb649856f7091' && 'flex-row-reverse'}`}
          >
            {message.image ? (
              <img src={message.image} alt="" className='max-w-[200px] md:max-w-[250px] rounded-lg' />
            ) : (
              <p className={`p-3 max-w-[250px] md:max-w-[300px] text-sm text-white font-light rounded-lg ${message.senderId === '67bc6689d0eb649856f7091' ? 'bg-[#282142] rounded-bl-none' : 'bg-[#403863] rounded-br-none'}`}>
                {message.text}
              </p>
            )}

            <div className='flex flex-col items-center text-[10px]'>
              <img 
                src={message.senderId === '67bc6689d0eb649856f7091' ? assets.avatar_icon : assets.profile_martin} 
                alt="" 
                className='w-6 rounded-full' 
              />
              <p className='text-gray-500'>{formatMessageTime(message.createdAt)}</p>
            </div>
          </div>
        ))}
        <div ref={scrollEnd}></div>
      </div>

      {/* Bottom area */}
      <div className='flex items-center gap-3 p-3 absolute bottom-0 left-0 right-0'>
        <div className='flex-1 flex items-center bg-gray-100/10 px-3 rounded-full'>
          <input 
            type="text" 
            placeholder="Send a message" 
            className='flex-1 text-sm p-3 border-none rounded-lg outline-none text-white placeholder-gray-400 bg-transparent' 
          />
          <input type="file" id='image' accept='image/png, image/jpeg' hidden />
          <label htmlFor="image">
            <img src={assets.gallery_icon} alt="" className='w-5 mr-2 cursor-pointer' />
          </label>
        </div>
        <img src={assets.send_button} alt="" className='w-7 cursor-pointer' />
      </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden'>
      <img src={assets.logo_icon} alt="" className='max-w-16' />
      <p className='text-lg font-medium text-white'>Chat anytime, anywhere</p>
    </div>
  )
}

export default ChatContainer