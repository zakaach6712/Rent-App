import React from 'react';
import './ListingCard.css';

function ListingCard({ listing, onCompare }) {
  const { title, price, images = [] } = listing;

  // Hero image is the first in the array, or a placeholder
  const heroImage = images[0] || '/assets/placeholder.jpg';

  // Any remaining images become thumbnails
  const thumbnails = images.slice(1);

  return (
    <div className="listing-card">
      {/* HERO IMAGE */}
      <div className="listing-card__hero">
        <img
          src={heroImage}
          alt={title}
          className="listing-card__hero-img"
        />
      </div>

      {/* THUMBNAILS ROW */}
      {thumbnails.length > 0 && (
        <div className="listing-card__thumbs">
          {thumbnails.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${title} view ${idx + 2}`}
              className="listing-card__thumb"
            />
          ))}
        </div>
      )}

      {/* DETAILS & COMPARE BUTTON */}
      <div className="listing-card__info">
        <h3 className="listing-card__title">{title}</h3>
        <p className="listing-card__price">{price} / month</p>
        <button
          className="listing-card__compare-btn"
          onClick={() => onCompare(listing)}
        >
          Compare
        </button>
      </div>
    </div>
  );
}

export default ListingCard;
