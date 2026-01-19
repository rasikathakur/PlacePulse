import React, { useState } from 'react';
import './TripPlanner.css'; // Assume this is your CSS file for styles

function TripPlanner() {
  const [formData, setFormData] = useState({
    sourceCity: '',
    destinationCity: '',
    duration: '',
    budget: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can send formData to your backend here
    setFormData({
      sourceCity: '',
      destinationCity: '',
      duration: '',
      budget: ''
    });
  };

  return (
    
    <div className="container" style={{ color: '#293462' }}>
      
      <h2 style={{ color: '#F7D716' }}>Trip Planner</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="sourceCity" style={{ color: '#F24C4C' }}>Source City:</label>
          <input type="text" id="sourceCity" name="sourceCity" value={formData.sourceCity} onChange={handleInputChange} required style={{ borderColor: '#EC9B3B' }} />
        </div>
        <div className="form-group">
          <label htmlFor="destinationCity" style={{ color: '#F24C4C' }}>Destination City:</label>
          <input type="text" id="destinationCity" name="destinationCity" value={formData.destinationCity} onChange={handleInputChange} required style={{ borderColor: '#EC9B3B' }} />
        </div>
        <div className="form-group">
          <label htmlFor="duration" style={{ color: '#F24C4C' }}>Duration of Trip (days):</label>
          <input type="number" id="duration" name="duration" min="1" value={formData.duration} onChange={handleInputChange} required style={{ borderColor: '#EC9B3B' }} />
        </div>
        <div className="form-group">
          <label htmlFor="budget" style={{ color: '#F24C4C' }}>Budget for the Trip ($):</label>
          <input type="number" id="budget" name="budget" min="1" value={formData.budget} onChange={handleInputChange} required style={{ borderColor: '#EC9B3B' }} />
        </div>
        <div className="form-group">
          <input type="submit" value="Plan Trip" style={{ backgroundColor: '#293462', color: '#F7D716' }} />
        </div>
      </form>
    </div>
   
  );
}

export default TripPlanner;
