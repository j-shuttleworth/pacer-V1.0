import React from 'react'
import { Calendar } from 'lucide-react'

const WeekView = ({ onWorkoutClick }) => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const currentDate = new Date()
  const currentDay = currentDate.getDay()
  const mondayOffset = currentDay === 0 ? -6 : 1 - currentDay
  const weekStart = new Date(currentDate)
  weekStart.setDate(currentDate.getDate() + mondayOffset)

  const workouts = [
    { day: 'Mon', workout: '5K Easy Run', description: 'A light 5K run to start the week.', distance: '5K', pace: '9:30/mile', type: 'easy' },
    { day: 'Wed', workout: 'Interval Training', description: '6x400m repeats with 90 sec rest.', distance: '4 miles', pace: 'Varies', type: 'interval' },
    { day: 'Fri', workout: 'Tempo Run', description: '20 minutes at half marathon pace.', distance: '5 miles', pace: '8:00/mile', type: 'tempo' },
    { day: 'Sat', workout: 'Long Run', description: 'Steady-paced long run to build endurance.', distance: '10 miles', pace: '9:45/mile', type: 'long' },
  ]

  const isToday = (date) => {
    const today = new Date()
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear()
  }

  const getWorkoutColor = (type) => {
    switch (type) {
      case 'easy': return 'bg-green-200'
      case 'interval': return 'bg-yellow-200'
      case 'tempo': return 'bg-orange-200'
      case 'long': return 'bg-blue-200'
      default: return 'bg-gray-200'
    }
  }

  return (
    <div className="modern-card">
      <h2 className="text-2xl font-semibold mb-4 flex items-center text-black">
        <Calendar className="mr-2 text-black" size={24} />
        This Week's Workouts
      </h2>
      <div className="space-y-4">
        {daysOfWeek.map((day, index) => {
          const date = new Date(weekStart)
          date.setDate(weekStart.getDate() + index)
          const workout = workouts.find(w => w.day === day)
          const today = isToday(date)
          return (
            <div 
              key={day} 
              className={`workout-item ${
                workout 
                  ? `${getWorkoutColor(workout.type)} shadow-md` 
                  : 'bg-white border border-gray-200'
              } rounded-lg transition-all duration-200 hover:shadow-lg ${
                today ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => workout && onWorkoutClick({...workout, date: date.toDateString()})}
            >
              <div className="flex items-center p-3">
                <div className="w-16 text-center">
                  <p className="font-semibold text-black">{day}</p>
                  <p className="text-sm text-gray-600">{date.getDate()}</p>
                </div>
                {workout && (
                  <p className="text-lg font-medium text-black ml-4">
                    {workout.workout}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WeekView