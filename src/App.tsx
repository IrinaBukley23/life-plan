import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import StartPage from './pages/startPage/startPage';
import MainPage from './pages/mainPage/mainPage';
import NotFoundPage from './pages/notFoundPage/notFoundPage';

function App() {
  return (
    <div className="App">
      <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
          Start
          </Link>
          <Link to="/main" style={{ padding: 5 }}>
          Main
          </Link>
      </nav>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
