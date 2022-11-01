import './App.css';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Landing />} />
          <Route path='/signup' element= {<Signup />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
