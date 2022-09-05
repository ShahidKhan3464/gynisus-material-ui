import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/index'
import Patient from './pages/patient/index'
import Data from './pages/data/index'
import Authorization from './pages/authorization/index'
import './App.css';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/'  >
          <Route path='/' element={<Homepage />} />
          <Route path='patient' element={<Patient />} />
          <Route path='data' element={<Data />} />
          <Route path='authorization' element={<Authorization />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;