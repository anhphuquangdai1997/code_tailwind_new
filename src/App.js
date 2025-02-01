import React from 'react';
import Giaodich from './component/Giaodich';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import ChuyenTien from './component/Chuyentien';

function App() {
  return (
    <>
      
      <Router>
      
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/giaodich" element={<Giaodich />} />
        <Route path="/chuyentien" element={<ChuyenTien />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;