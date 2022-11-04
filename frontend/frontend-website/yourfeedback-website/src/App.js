import './App.css';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Discount from './pages/Discount';
import Profile from './pages/Profile';
import Feedback from './pages/Feedback';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Landing />} />
          <Route path='/signup' element= {<Signup />} />
          <Route path='/home' element= {<Home />} />
          <Route path='/feedback' element= {<Feedback />} />
          <Route path='/discount' element= {<Discount />} />
          <Route path='/profile' element= {<Profile />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
