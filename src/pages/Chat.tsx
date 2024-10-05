import React from 'react'
import { MessageSquare } from 'lucide-react'

const Chat = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-black">Chat</h1>
      <div className="modern-card">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-black">
          <MessageSquare className="mr-2 text-black" size={24} />
          Chat with Your Coach
        </h2>
        <p className="text-gray-600 mb-4">This feature is coming soon. You'll be able to chat with your coach and get real-time advice here.</p>
      </div>
    </div>
  )
}

export default Chat