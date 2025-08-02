import React, { useState } from 'react';
import './LandlordDashboard.css';

export default function LandlordDashboard() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, price });
    // later: addDoc() to Firestore
    setTitle('');
    setPrice('');
  };

  return (
    <div className="dashboard-page">
      <h1>Landlord Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Listing Title"
          required
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Monthly Price"
          required
        />
        <button type="submit">Add Listing</button>
      </form>
    </div>
  );
}
