//import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Landing from './screens/Landing';
import Community from './screens/Community'
import TripPlanner from './screens/TripPlanner'
import GetUserLocation from './screens/GetUserLocation.js'
import ProfileUploader from './screens/ProfileUploader.js'

import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (
    
      <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/landing" element={<Landing/>}/>
          <Route exact path="/community" element={<Community/>}/>
          <Route exact path="/tripplanner" element={<TripPlanner/>}/>
          <Route exact path="/profileuploader" element={<ProfileUploader/>}/>
          <Route exact path="/getUserLocation" element={<GetUserLocation/>}/>
        </Routes>
      
      </div>
      </Router>
    
  );
}

export default App;
