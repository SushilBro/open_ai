import './App.css';
import SignIn from './components/SignIn';
import { Route,Routes } from 'react-router-dom';
import HomePage from './components/homepage';

function App() {
  return (
    
      <Routes>
            <Route  path="/" element={<SignIn/>} />
            <Route  path="/homepage" element={<HomePage/>} />
      </Routes>
    // <SignIn/>
    
  );
}

export default App;
