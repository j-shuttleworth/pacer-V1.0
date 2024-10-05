import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import TrainingCalendar from './pages/TrainingCalendar'
import Activities from './pages/Activities'
import Metrics from './pages/Metrics'
import Chat from './pages/Chat'
import Account from './pages/Account'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
          <Route path="*" element={
            <PrivateRoute>
              <div className="flex min-h-screen bg-gray-100">
                <Sidebar />
                <div className="flex-1 md:ml-64">
                  <Navbar />
                  <main className="container mx-auto px-4 py-8">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/calendar" element={<TrainingCalendar />} />
                      <Route path="/activities" element={<Activities />} />
                      <Route path="/metrics" element={<Metrics />} />
                      <Route path="/chat" element={<Chat />} />
                      <Route path="/account" element={<Account />} />
                    </Routes>
                  </main>
                </div>
              </div>
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App