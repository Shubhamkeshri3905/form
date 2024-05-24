

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Display from './components/Display';
import { useState } from 'react';
function App() { 
  const [data,setData]=useState({});
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home data={data} setData={setData} />} />
        <Route path='/display' element={<Display data={data}  />} />
      </Routes>
    </div>
  );
}

export default App;
