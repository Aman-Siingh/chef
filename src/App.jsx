import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Sucess from './pages/Sucess';
import Error from './pages/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/sucess' element={<Sucess/>}></Route>
        <Route path='/*' element={<Error/>}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App