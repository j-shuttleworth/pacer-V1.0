import React from 'react'
import { X } from 'lucide-react'

const WorkoutDetails = ({ workout, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{workout.workout}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-4">
          <p><strong>Date:</strong> {workout.date.toDateString()}</p>
          <p><strong>Description:</strong> {workout.description}</p>
          <p><strong>Distance:</strong> {workout.distance}</p>
          <p><strong>Target Pace:</strong> {workout.pace}</p>
        </div>
      </div>
    </div>
  )
}

export default WorkoutDetails