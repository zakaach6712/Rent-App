import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Listings from "../pages/Listings";
import ListingDetails from "../pages/ListingDetails";
import Compare from "../pages/Compare";
import LandlordDashboard from "../pages/LandlordDashboard";
import Chat from "../pages/Chat";
rentwise/src/context
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/listings/:id" element={<ListingDetails />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/landlord-dashboard" element={<LandlordDashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/:id" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
