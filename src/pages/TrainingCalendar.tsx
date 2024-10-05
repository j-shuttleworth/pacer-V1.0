import React, { useState } from 'react'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import WorkoutDetails from '../components/WorkoutDetails'

const TrainingCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedWorkout, setSelectedWorkout] = useState(null)

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

  const workouts = [
    { date: new Date(2023, 4, 15), workout: '5K Easy Run', description: 'A light 5K run to start the week.', distance: '5K', pace: '9:30/mile', type: 'easy' },
    { date: new Date(2023, 4, 17), workout: 'Interval Training', description: '6x400m repeats with 90 sec rest.', distance: '4 miles', pace: 'Varies', type: 'interval' },
    { date: new Date(2023, 4, 19), workout: 'Tempo Run', description: '20 minutes at half marathon pace.', distance: '5 miles', pace: '8:00/mile', type: 'tempo' },
    { date: new Date(2023, 4, 21), workout: 'Long Run', description: 'Steady-paced long run to build endurance.', distance: '10 miles', pace: '9:45/mile', type: 'long' },
  ]

  const getWorkoutColor = (type) => {
    switch (type) {
      case 'easy': return 'bg-green-200'
      case 'interval': return 'bg-yellow-200'
      case 'tempo': return 'bg-orange-200'
      case 'long': return 'bg-blue-200'
      default: return 'bg-gray-200'
    }
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const handleWorkoutClick = (workout) => {
    setSelectedWorkout(workout)
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-black">Training Calendar</h1>
      <div className="modern-card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold flex items-center text-black">
            <Calendar className="mr-2 text-black" size={24} />
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <div className="flex space-x-2">
            <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-gray-200">
              <ChevronLeft size={24} />
            </button>
            <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-gray-200">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center font-bold">{day}</div>
          ))}
          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div key={`empty-${index}`} className="h-24 border border-gray-200 rounded-lg"></div>
          ))}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), index + 1)
            const workout = workouts.find(w => w.date.toDateString() === date.toDateString())
            return (
              <div
                key={index}
                className={`h-24 border border-gray-200 rounded-lg p-2 ${
                  workout ? getWorkoutColor(workout.type) : ''
                } cursor-pointer transition-all duration-200 hover:shadow-lg`}
                onClick={() => workout && handleWorkoutClick(workout)}
              >
                <div className="font-semibold">{index + 1}</div>
                {workout && (
                  <div className="text-sm font-medium mt-1">{workout.workout}</div>
                )}
              </div>
            )
          })}
        </div>
      </div>
      {selectedWorkout && (
        <WorkoutDetails workout={selectedWorkout} onClose={() => setSelectedWorkout(null)} />
      )}
    </div>
  )
}

export default TrainingCalendar