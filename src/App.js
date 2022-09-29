import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <Navbar />
        <div className={styles.content}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/calculator" element={<Calculator />} />
            <Route exact path="/quote" element={<Quote />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
