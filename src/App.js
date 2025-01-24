import React from 'react';
import Giaodich from './component/Giaodich';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './component/Home';

function App() {
  return (
    <>
      
      <Router>
      
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/giaodich" element={<Giaodich />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;