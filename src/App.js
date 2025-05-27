import React from 'react';
import Giaodich from './component/Giaodich';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Chuyentien from './component/Chuyentien';
import MyQR from './component/MyQR';
import './index.css';

function App() {
  return (
    <Router className="h-full w-full">
      <div className="min-h-screen w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/giaodich" element={<Giaodich />} />
          <Route path="/chuyentien" element={<Chuyentien />} />
          <Route path="/myqr" element={<MyQR />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;