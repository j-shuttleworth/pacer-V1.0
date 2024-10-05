import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, Home, Calendar, Activity, BarChart2, MessageSquare, User, LogOut } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { logout } = useAuth()
  const navigate = useNavigate()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.error('Failed to log out', error)
    }
  }

  return (
    <nav className="md:hidden bg-black text-white p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">PACER</Link>
        <button onClick={toggleMenu} className="focus:outline-none">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="mt-4">
          <NavLink to="/" icon={<Home size={20} />} text="Dashboard" onClick={toggleMenu} />
          <NavLink to="/calendar" icon={<Calendar size={20} />} text="Training Calendar" onClick={toggleMenu} />
          <NavLink to="/activities" icon={<Activity size={20} />} text="Activities" onClick={toggleMenu} />
          <NavLink to="/metrics" icon={<BarChart2 size={20} />} text="Metrics" onClick={toggleMenu} />
          <NavLink to="/chat" icon={<MessageSquare size={20} />} text="Chat" onClick={toggleMenu} />
          <NavLink to="/account" icon={<User size={20} />} text="Account" onClick={toggleMenu} />
          <button
            onClick={() => {
              handleLogout()
              toggleMenu()
            }}
            className="flex items-center space-x-2 py-2 w-full text-left hover:bg-gray-800 transition-colors duration-200"
          >
            <LogOut size={20} />
            <span>Log out</span>
          </button>
        </div>
      )}
    </nav>
  )
}

const NavLink = ({ to, icon, text, onClick }) => (
  <Link to={to} className="flex items-center space-x-2 py-2 hover:bg-gray-800 transition-colors duration-200" onClick={onClick}>
    {icon}
    <span>{text}</span>
  </Link>
)

export default Navbar