import React from 'react'
import { BarChart2, TrendingUp, Activity, Heart } from 'lucide-react'

const Metrics = () => {
  const metricCards = [
    { title: 'Total Distance', value: '120 miles', icon: Activity },
    { title: 'Average Pace', value: '8:30 min/mile', icon: TrendingUp },
    { title: 'Workouts Completed', value: '15', icon: BarChart2 },
    { title: 'Average Heart Rate', value: '145 bpm', icon: Heart },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-black">Metrics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricCards.map((card, index) => (
          <div key={index} className="modern-card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-black">{card.title}</h2>
              <card.icon className="text-black" size={24} />
            </div>
            <p className="text-3xl font-bold text-black">{card.value}</p>
          </div>
        ))}
      </div>
      <div className="modern-card">
        <h2 className="text-2xl font-semibold mb-4 text-black">Performance Over Time</h2>
        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Chart placeholder</p>
        </div>
      </div>
    </div>
  )
}

export default Metrics