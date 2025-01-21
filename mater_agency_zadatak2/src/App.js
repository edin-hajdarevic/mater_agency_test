import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Users from './components/Users';
import UserDetails from './components/UserDetails';

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Users/>} />
          <Route path="/users/:id" element={<UserDetails/>} />
        </Routes>
    </div>
  );
}

export default App;
 