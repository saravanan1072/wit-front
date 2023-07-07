import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Vendor from './pages/Vendor';
import Resources from './pages/Resources';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Vendor/>}/>
        <Route path='/resource' element={<Resources/>}/>

        <Route path='/dashboard' element={<Dashboard/>}/>

        
        
        </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
