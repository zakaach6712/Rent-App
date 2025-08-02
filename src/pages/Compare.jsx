import React, { useState } from 'react';
import CompareModal from '../components/CompareModal';
import './Compare.css';

export default function Compare() {
  const [items, setItems] = useState([
    // replace with real compare state
  ]);

  return (
    <div className="compare-page">
      <h1>Compare Listings</h1>
      {items.length === 0 ? (
        <p>No items selected for comparison.</p>
      ) : (
        <CompareModal listings={items} onClose={() => setItems([])} />
      )}
    </div>
  );
}
