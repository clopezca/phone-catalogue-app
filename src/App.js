import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Header from './components/Header';
import Landing from './components/Landing';
import PhoneDetail from './components/PhoneDetail';
import PhoneForm from './components/PhoneForm';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:id" element={<PhoneDetail />} />
        <Route path="/create-phone" element={<PhoneForm />} />
      </Routes>
    </Router>
  );

}

export default App;
