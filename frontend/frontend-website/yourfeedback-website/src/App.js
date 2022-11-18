import './App.css';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Discount from './pages/Discount';
import Profile from './pages/Profile';
import Feedback from './pages/Feedback';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Landing />} />
          <Route path='/signup' element= {<Signup />} />
          <Route path='/home' element= {
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>} />
          <Route path='/feedback' element= {
          <ProtectedRoute>
            <Feedback />
          </ProtectedRoute>} />
          <Route path='/discount' element= {
          <ProtectedRoute>
            <Discount />
          </ProtectedRoute>} />
          <Route path='/profile' element= {
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
