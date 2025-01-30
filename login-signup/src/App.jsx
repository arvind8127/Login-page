

import Signup from './components/Signup.jsx';
// import Enquiry from './components/Enquiry.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Product from './components/Product.jsx';
import Home from './components/Home.jsx';

function App() {
  

  return (
    
      <BrowserRouter>
      <Routes>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/home' element={<Home />}></Route>
      </Routes>
      
      </BrowserRouter>
      
    
  )
}


export default App
