import React, { useState } from 'react'
import { User, Mail, Lock, CreditCard } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const Account = () => {
  const { user } = useAuth()
  const [showProfilePopup, setShowProfilePopup] = useState(false)
  const [showPasswordPopup, setShowPasswordPopup] = useState(false)
  const [showPaymentPopup, setShowPaymentPopup] = useState(false)

  const AccountCard = ({ title, description, icon, onClick }) => (
    <div className="modern-card cursor-pointer" onClick={onClick}>
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-2xl font-semibold ml-2 text-black">{title}</h2>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )

  const Popup = ({ title, children, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <Lock size={24} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-black">Account</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AccountCard
          title="Profile"
          description="Update your personal information"
          icon={<User size={24} className="text-black" />}
          onClick={() => setShowProfilePopup(true)}
        />
        <AccountCard
          title="Password"
          description="Change your password"
          icon={<Lock size={24} className="text-black" />}
          onClick={() => setShowPasswordPopup(true)}
        />
        <AccountCard
          title="Email"
          description="Update your email address"
          icon={<Mail size={24} className="text-black" />}
          onClick={() => setShowProfilePopup(true)}
        />
        <AccountCard
          title="Payment"
          description="Manage your payment methods"
          icon={<CreditCard size={24} className="text-black" />}
          onClick={() => setShowPaymentPopup(true)}
        />
      </div>

      {showProfilePopup && (
        <Popup title="Edit Profile" onClose={() => setShowProfilePopup(false)}>
          <form className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input type="text" id="firstName" name="firstName" defaultValue={user?.firstName} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" id="lastName" name="lastName" defaultValue={user?.lastName} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" defaultValue={user?.email} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200">Save Changes</button>
          </form>
        </Popup>
      )}

      {showPasswordPopup && (
        <Popup title="Change Password" onClose={() => setShowPasswordPopup(false)}>
          <form className="space-y-4">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current Password</label>
              <input type="password" id="currentPassword" name="currentPassword" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
              <input type="password" id="newPassword" name="newPassword" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200">Change Password</button>
          </form>
        </Popup>
      )}

      {showPaymentPopup && (
        <Popup title="Manage Payment Methods" onClose={() => setShowPaymentPopup(false)}>
          <div className="space-y-4">
            <p className="text-gray-600">You currently have no payment methods on file.</p>
            <button className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200">Add Payment Method</button>
          </div>
        </Popup>
      )}
    </div>
  )
}

export default Account