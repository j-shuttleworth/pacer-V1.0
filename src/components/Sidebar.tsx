import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Home, Calendar, Activity, BarChart2, MessageSquare, User, LogOut } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { logout } = useAuth()

  const navItems = [
    { to: "/", icon: Home, text: "Dashboard" },
    { to: "/calendar", icon: Calendar, text: "Training Calendar" },
    { to: "/activities", icon: Activity, text: "Activities" },
    { to: "/metrics", icon: BarChart2, text: "Metrics" },
    { to: "/chat", icon: MessageSquare, text: "Chat" },
    { to: "/account", icon: User, text: "Account" },
  ]

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.error('Failed to log out', error)
    }
  }

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen bg-black text-white p-6 fixed">
      <Link to="/" className="text-2xl font-bold mb-10">PACER</Link>
      <nav className="flex-1">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} Icon={item.icon} text={item.text} active={location.pathname === item.to} />
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={handleLogout}
        className="flex items-center space-x-2 p-2 rounded transition-colors duration-200 text-white hover:bg-gray-800 w-full"
      >
        <LogOut size={20} />
        <span>Log out</span>
      </button>
    </aside>
  )
}

const NavLink = ({ to, Icon, text, active }) => (
  <Link
    to={to}
    className={`flex items-center space-x-2 p-2 rounded transition-colors duration-200
      ${active ? 'bg-white text-black' : 'text-white hover:bg-gray-800'}`}
  >
    <Icon size={20} />
    <span>{text}</span>
  </Link>
)

export default Sidebar