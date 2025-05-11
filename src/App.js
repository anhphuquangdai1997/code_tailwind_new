import React from 'react';
import Giaodich from './component/Giaodich';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Chuyentien from './component/Chuyentien';
import MyQR from './component/MyQR';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/giaodich" element={<Giaodich />} />
        <Route path="/chuyentien" element={<Chuyentien />} />
        <Route path="/myqr" element={<MyQR />} />
      </Routes>
    </Router>
  );
}

export default App;