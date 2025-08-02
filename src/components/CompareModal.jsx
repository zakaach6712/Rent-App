import React from "react";
import "./CompareModal.css";

const CompareModal = ({ listings, onClose }) => (
  <div className="modal">
    <h2>Compare Listings</h2>
    <div className="compare-list">
      {listings.map((item) => (
        <div key={item.id} className="compare-item">
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
    <button onClick={onClose}>Close</button>
  </div>
);

export default CompareModal;
