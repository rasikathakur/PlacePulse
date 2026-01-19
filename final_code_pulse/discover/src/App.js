import './App.css';
import Home from './screens/Home';
import Landing from 'C:/Users/rasik/OneDrive/Documents/final_code_pulse/discover/src/components/Landing.js'
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/Landing" element={<Landing/>}/>
      </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
