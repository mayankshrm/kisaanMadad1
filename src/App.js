import React from 'react';
import './App.css';
import FrontPage from './Components/FrontPage/FrontPage';
import Farmer from "./Components/Farmer/Farmer"
import Consumer from "./Components/Consumer/Consumer"
import { BrowserRouter,Routes,Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <Routes>
   <Route path='/' element={<FrontPage/>}/>
   <Route path="farmers" element={<Farmer/>}/>
   <Route path="consumers" element={<Consumer/>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
