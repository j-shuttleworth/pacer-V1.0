import React, { useState } from 'react'
import { Activity, Clock, MapPin, TrendingUp } from 'lucide-react'
import WeekView from '../components/WeekView'
import ActivityDetails from '../components/ActivityDetails'

const Dashboard = () => {
  const [selectedActivity, setSelectedActivity] = useState(null)

  const activities = [
    {
      id: 1,
      date: "May 15, 2023",
      title: "Long Run",
      distance: "10 miles",
      time: "1:30:25",
      location: "Central Park",
      pace: "9:02 min/mile",
      elevation: "150 ft",
      calories: "800 kcal"
    },
    {
      id: 2,
      date: "May 13, 2023",
      title: "Interval Training",
      distance: "5 miles",
      time: "45:30",
      location: "Local Track",
      pace: "9:06 min/mile",
      elevation: "50 ft",
      calories: "500 kcal"
    },
    {
      id: 3,
      date: "May 11, 2023",
      title: "Recovery Run",
      distance: "3 miles",
      time: "30:15",
      location: "Neighborhood",
      pace: "10:05 min/mile",
      elevation: "30 ft",
      calories: "300 kcal"
    },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-black">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <WeekView onWorkoutClick={(workout) => console.log('Workout clicked:', workout)} />
        <div className="modern-card">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-black">
            <Activity className="mr-2 text-black" size={24} />
            Recent Activities
          </h2>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div 
                key={activity.id} 
                className="dashboard-card cursor-pointer"
                onClick={() => setSelectedActivity(activity)}
              >
                <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Activity size={16} className="mr-1" />
                    <span>{activity.distance}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{activity.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp size={16} className="mr-1" />
                    <span>{activity.pace}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedActivity && (
        <ActivityDetails 
          activity={selectedActivity} 
          onClose={() => setSelectedActivity(null)} 
        />
      )}
    </div>
  )
}

export default Dashboard