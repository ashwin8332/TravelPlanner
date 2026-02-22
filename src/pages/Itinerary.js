import { motion } from 'framer-motion';
import { useState } from 'react';
import BookingForm from '../components/BookingForm';
function Itinerary({ selectedDestinations, customPlans, onRemoveDestination, onAddCustomPlan, onUpdateStatus }) {
  const [showForm, setShowForm] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Your Itinerary</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          {showForm ? 'Hide Form' : 'Add Custom Plan'}
        </button>
      </div>
      {showForm && (
        <BookingForm onAddCustomPlan={onAddCustomPlan} />
      )}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Selected Destinations</h2>
        {selectedDestinations.length === 0 ? (
          <p className="text-gray-600">No destinations selected yet. Browse our destinations to add some!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedDestinations.map(destination => (
              <motion.div
                key={destination.id}
                layout
                className="bg-white rounded-lg shadow-md p-4 flex items-start space-x-4"
              >
                <img
                  src={destination.imageUrl}
                  alt={destination.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{destination.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{destination.description}</p>
                  <button
                    onClick={() => onRemoveDestination(destination.id)}
                    className="mt-2 text-red-600 hover:text-red-700 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Custom Plans</h2>
        {customPlans.length === 0 ? (
          <p className="text-gray-600">No custom plans added yet. Use the form above to add some!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {customPlans.map(plan => (
              <motion.div
                key={plan.id}
                layout
                className="bg-white rounded-lg shadow-md p-4"
              >
                <h3 className="text-lg font-semibold text-gray-800">{plan.destination}</h3>
                <div className="mt-2 space-y-1">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Dates:</span> {plan.startDate} - {plan.endDate}
                  </p>
                  {plan.notes && (
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Notes:</span> {plan.notes}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
export default Itinerary;