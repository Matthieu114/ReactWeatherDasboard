import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherDashboard from './pages/weatherDashboard/WeatherDashboard.js';
import Cities from './pages/cities/Cities.js';
import Map from './pages/map/Map.js';
import Settings from './pages/settings/Settings.js';

function App() {
  // search bar up top
  // Dashboard
  //  Overall todays weather card
  //  Todays forecast with hours
  // specifics
  // 7 day forecast on the right

  return (
    <Router>
      <Routes>
        <Route path='/' element={<WeatherDashboard />} />
        <Route path='/cities' element={<Cities />} />
        <Route path='/map' element={<Map />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
