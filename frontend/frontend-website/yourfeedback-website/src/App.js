import './App.css';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Discount from './pages/Discount';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Landing />} />
          <Route path='/signup' element= {<Signup />} />
          <Route path='/home' element= {<Home />} />
          <Route path='/discount' element= {<Discount />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
