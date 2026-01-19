import React from 'react';
import './Community.css'; // Make sure to import the CSS file for styles

function Community() {
  const handleCityClick = (cityName) => {
    alert(cityName);
  };

  return (
    
      
    <div className="container">
      <div className="city" onClick={() => handleCityClick('New York')} style={{ backgroundColor: '#293462', color: '#F7D716' }}>New York</div>
      <div className="city" onClick={() => handleCityClick('Los Angeles')} style={{ backgroundColor: '#F24C4C', color: '#EC9B3B' }}>Los Angeles</div>
      <div className="city" onClick={() => handleCityClick('Chicago')} style={{ backgroundColor: '#EC9B3B', color: '#293462' }}>Chicago</div>
      {/* Add more cities as needed */}
    </div>
    
    
  );
}

export default Community;
