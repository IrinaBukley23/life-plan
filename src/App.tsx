import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/startPage/startPage';
import MainPage from './pages/mainPage/mainPage';
import NotFoundPage from './pages/notFoundPage/notFoundPage';
import Layout from './components/layout/layout';
import FinancePage from './pages/financePage/financePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<StartPage />} />
        <Route path="/" element={<Layout  />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
