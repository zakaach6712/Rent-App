// src/pages/Listings.jsx
import React, { useState, useEffect } from 'react';
import ListingCard from '../components/ListingCard';
import './Listings.css';

// ← Place your updated sampleListings here, right after imports:
const sampleListings = [
  {
    id: '1',
    title: 'Cozy 1-BR Apartment',
    price: '$500 / month',
    images: [
      '/assets/apt1-living.jpg',
      '/assets/apt1-bedroom.jpg',
      '/assets/apt1-kitchen.jpg'
      
    ]
  },
  {
    id: '2',
    title: '5 star luxury resort',
    price: '$1200 / month',
    images: [
      '/assets/5-start-1-living.jpg',
       '/assets/5-star-1-kitchen.jpg',
      '/assets/5-star-1-bedroom.jpg'
     
    ]
  },
  {
    id: '3',
    title: 'Event Hall Downtown',
    price: '$800 / month',
    images: [
      '/assets/hall1-1.jpg',
      '/assets/hall1-2.jpg',
      '/assets/hall1-3.jpg'
    ]
  },
];

export default function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // simulate fetch from Firestore
    setListings(sampleListings);
  }, []);

  const handleCompare = (item) => {
    console.log('Add to compare:', item);
    // later: push to compare context or state
  };

  return (
    <div className="listings-page">
      <h1>Available Rentals</h1>
      <div className="listings-grid">
        {listings.map((item) => (
          <ListingCard
            key={item.id}
            listing={item}
            onCompare={handleCompare}
          />
        ))}
      </div>
    </div>
  );
}
