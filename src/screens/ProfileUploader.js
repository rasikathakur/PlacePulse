import React, { useState } from 'react';
import './ProfileUploader.css'; // Assuming you have a CSS file for styles

function ProfileUploader() {
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [profilePicSrc, setProfilePicSrc] = useState('');

  // Attempt to load the profile picture from local storage on component mount
  React.useEffect(() => {
    const savedPic = localStorage.getItem('profilePic');
    if (savedPic) {
      setProfilePicSrc(savedPic);
    }
  }, []);

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicSrc(reader.result);
        localStorage.setItem('profilePic', reader.result); // Saving as base64 might have limitations
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting
    console.log('Username:', username);
    console.log('Description:', description);
    // Add your submission logic here
  };

  return (
    
    <div className="hero" style={{ backgroundColor: '#293462' }}>
      <div className="card" style={{ color: '#F7D716' }}>
        <div className="greeting">
          <h2>Hi {username || 'there'}</h2>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your name here"
            className="username-input"
          />
          <button className="submit-button" onClick={handleSubmit}>Submit</button>
          <div className="description">
            <label htmlFor="descriptionInput">Description:</label>
            <textarea
              id="descriptionInput"
              name="description"
              rows="4"
              cols="50"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
        {profilePicSrc && <img src={profilePicSrc} alt="Profile" id="profilePic" />}
        <label htmlFor="inputFile" className="upload-label">Upload Image</label>
        <input
          id="inputFile"
          type="file"
          accept="image/*" // Accepts all image types
          onChange={handleFileChange}
          className="file-input"
        />
      </div>
    </div>
   
  );
}

export default ProfileUploader;
