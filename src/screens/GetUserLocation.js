import React, { useState, useEffect } from 'react';

function GetUserLocation() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (window.google) {
      initMap();
    } else {
      console.error('Google Maps API not loaded');
    }
  }, []);

  function initMap() {
    const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 6,
    });
    setMap(mapInstance);
  }

  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          map.setCenter(userLocation);

          new window.google.maps.Marker({
            position: userLocation,
            map: map,
            title: 'Your Location',
          });
        },
        () => alert('Error: The Geolocation service failed.'),
      );
    } else {
      alert("Error: Your browser doesn't support geolocation.");
    }
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Get User Location</h1>
      <div id="map-container" style={{ width: '600px', height: '400px' }}>
        <div id="map" style={{ width: '100%', height: '100%' }}></div>
      </div>
      <button onClick={getUserLocation}>
        Get My Location
      </button>
    </div>
  );
}

export default GetUserLocation;
