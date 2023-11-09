import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Classes from './components/Classes';

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/login/" element={<Login />} />
          <Route path="/Register/" element={<Register />} />
          <Route path="/Classes/" element={<Classes />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
