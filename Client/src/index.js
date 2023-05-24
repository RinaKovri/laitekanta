import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/mainPage';
import Searching from './components/Searching/searching';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import AddButton from './components/AddButton/AddingForm';
import ArchiveButton from './components/ArchiveButton/archiveButton';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/searching" element={<Searching />} />
        <Route path="/adding" element={<AddButton />} />
        <Route path="/archive" element={<ArchiveButton />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
