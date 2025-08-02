import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to RentWise</h1>
      <p>Browse verified local rentals in one place.</p>
      <Link to="/listings" className="btn">View Listings</Link>
    </div>
  );
}
