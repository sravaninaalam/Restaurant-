
import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Order from './Components/order';

import Pagenotfound from './Components/Pagenotfound';
import Review from './Components/Review';
import About from './Components/Aout';
import Header from './Components/Header';
function App() {
  return (
   <>
     <div className='App'>
         <BrowserRouter>
         <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/review' element={<Review/>}/>
          <Route path='*' element={<Pagenotfound/>}/>

         </Routes>
         </BrowserRouter>
     </div>
   </>
  );
}

export default App;
