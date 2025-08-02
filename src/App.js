// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Listings from './pages/Listings';
import ListingDetails from './pages/ListingDetails';
import Compare from './pages/Compare';
import LandlordDashboard from './pages/LandlordDashboard';
import Chat from './pages/Chat';

import './App.css';

export default function App() {
  return (
    <Router>
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listings/:id" element={<ListingDetails />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/landlord-dashboard" element={<LandlordDashboard />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
