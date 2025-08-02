import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ListingDetails.css';

export default function ListingDetails() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    // fetch by id from Firestore; here we mock:
    setListing({
      id,
      title: 'Cozy Studio',
      price: '$450',
      image: '/assets/apt2.jpg',
      description: 'Quiet, fully furnished studio in town center.'
    });
  }, [id]);

  if (!listing) return <p>Loading…</p>;

  return (
    <div className="listing-details">
      <h1>{listing.title}</h1>
      <img src={listing.image} alt={listing.title} />
      <p>{listing.price} / month</p>
      <p>{listing.description}</p>
    </div>
  );
}
