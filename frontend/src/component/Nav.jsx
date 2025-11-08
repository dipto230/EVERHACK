import React, { useState } from 'react'
import icon from '../assets/icon.svg'
import { IoPersonCircle } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { serverUrl } from '../App';
import { setUserData } from '../redux/userSlice';
import { toast } from 'react-toastify';

function Nav() {
  const [showPopup, setShowPopup] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const { userData } = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Handle Logout
  const handleLogOut = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout", { withCredentials: true })
      dispatch(setUserData(null))
      toast.success("Logout Successful")
      setShowMenu(false)
    } catch (error) {
      console.error("Logout error:", error)
      const message = error.response?.data?.message || "Logout failed. Please try again."
      toast.error(message)
    }
  }

  return (
    <div>
      {/* Navbar */}
      <div className='w-full h-[70px] fixed top-0 px-6 py-3 flex items-center justify-between 
        bg-[#0a0f1e]/90 backdrop-blur-md shadow-md shadow-[#00ffd180] z-10'>

        {/* Left: Logo */}
        <div className='lg:w-[20%] w-[40%] lg:pl-[50px]'>
          <img 
            src={icon} 
            alt="icon" 
            className='w-[60px] rounded-[5px] border-2 border-[#00FFD1] cursor-pointer hover:scale-105 transition-transform duration-300'
            onClick={() => navigate('/')}
          />
        </div>

        {/* Middle: Navigation Links */}
        <div className='hidden lg:flex items-center justify-center gap-8 text-white text-[18px] font-light'>
          {['Home', 'About', 'What We Do', 'Mission & Vision'].map((item, index) => (
            <span
              key={index}
              className='cursor-pointer px-[10px] py-[5px] rounded-[8px] transition-all duration-300 
              hover:text-[#00FFD1] hover:underline hover:underline-offset-4'
              onClick={() => navigate(`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`)}
            >
              {item}
            </span>
          ))}

          {/* Show Join Us button only when NOT logged in */}
          {!userData && (
            <span
              onClick={() => setShowPopup(true)}
              className='cursor-pointer px-[14px] py-[8px] rounded-[10px] bg-[#00FFD1] text-black font-medium
              hover:bg-transparent hover:text-[#00FFD1] hover:border hover:border-[#00FFD1] transition-all duration-300'>
              Join Us
            </span>
          )}
        </div>

        {/* Right: Profile + Dashboard + Logout */}
        <div className='relative w-[40%] lg:w-[20%] flex items-center justify-end gap-5'>
          {!userData && (
            <IoPersonCircle 
              className='w-[45px] h-[45px] fill-[#00FFD1] cursor-pointer hover:scale-105 transition-transform duration-300'
              onClick={() => setShowPopup(true)}
            />
          )}

          {userData && (
            <>
              {/* Profile Icon */}
              <div
                className='w-[50px] h-[50px] rounded-full text-white flex items-center justify-center text-[20px] border-2 bg-black border-white cursor-pointer'
                onClick={() => setShowMenu(prev => !prev)}
              >
                {userData?.name?.slice(0, 1).toUpperCase()}
              </div>

              {/* Dropdown Menu */}
              {showMenu && (
                <div className='absolute top-[70px] right-0 flex flex-col items-start gap-2 bg-white border border-[#00FFD1] rounded-lg shadow-lg p-3 z-20'>
                  <span
                    onClick={() => {navigate('/profile'); setShowMenu(false)}}
                    className='w-full px-4 py-2 text-black rounded-md hover:bg-[#00FFD1] hover:text-black cursor-pointer transition-all duration-200'
                  >
                    My Profile
                  </span>
                  <span
                    onClick={() => {navigate('/courses'); setShowMenu(false)}}
                    className='w-full px-4 py-2 text-black rounded-md hover:bg-[#00FFD1] hover:text-black cursor-pointer transition-all duration-200'
                  >
                    My Courses
                  </span>
                </div>
              )}

              {/* Dashboard button for Educators */}
              {userData?.role === "educator" && (
                <div
                  className='px-[20px] py-[10px] border-2 border-[#00FFD1] text-[#00FFD1] rounded-[10px] 
                  text-[18px] font-light cursor-pointer hover:bg-[#00FFD1] hover:text-black transition-all duration-300'
                  onClick={() => navigate('/dashboard')}
                >
                  Dashboard
                </div>
              )}

              {/* Logout button */}
              <button
                onClick={handleLogOut}
                className='px-[18px] py-[8px] rounded-[10px] border-2 border-[#00FFD1] text-[#00FFD1] 
                text-[16px] font-medium hover:bg-[#00FFD1] hover:text-black transition-all duration-300'
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Popup Modal (for Login) */}
      {showPopup && (
        <div className='fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-20'>
          <div className='bg-[#0a0f1e] border border-[#00FFD1] rounded-2xl p-8 w-[90%] max-w-[400px] text-center text-white shadow-[0_0_20px_#00FFD1]'>
            <h2 className='text-2xl font-semibold mb-6 text-[#00FFD1]'>Join EverHack</h2>
            <p className='text-gray-300 mb-6'>Choose an option below to continue:</p>

            <div className='flex flex-col gap-4'>
              <button
                className='px-6 py-3 border-2 border-[#00FFD1] text-[#00FFD1] rounded-lg font-medium 
                  hover:bg-[#00FFD1] hover:text-black transition-all duration-300'
                onClick={() => {
                  setShowPopup(false)
                  navigate("/login")
                }}
              >
                Login
              </button>
            </div>

            <button
              onClick={() => setShowPopup(false)}
              className='mt-6 text-gray-400 hover:text-[#00FFD1] transition-colors'>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Nav
