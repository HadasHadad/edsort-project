import React from 'react';

const StarRating = ({ rating }) => {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const remainingStars = maxStars - fullStars;

  const fullStarIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 fill-current text-yellow-500"
      viewBox="0 0 20 20"
    >
      <path d="M10 1.25L12.59 6.29L18.12 7.05L14.76 10.61L15.82 16.15L10 13.82V1.25Z" />
    </svg>
  );

  const halfStarIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 fill-current text-yellow-500"
      viewBox="0 0 20 20"
    >
      <path d="M10 1.25L12.59 6.29L18.12 7.05L14.76 10.61L15.82 16.15L10 13.82V1.25Z" />
    </svg>
  );

  const emptyStarIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 fill-current text-gray-300"
      viewBox="0 0 20 20"
    >
      <path d="M10 1.25L12.59 6.29L18.12 7.05L14.76 10.61L15.82 16.15L10 13.82V1.25Z" />
    </svg>
  );

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(fullStarIcon);
    }

    if (rating > fullStars && rating < fullStars + 1) {
      stars.push(halfStarIcon);
    }

    for (let i = 0; i < remainingStars; i++) {
      stars.push(emptyStarIcon);
    }

    return stars;
  };

  return <div className="flex">{renderStars()}</div>;
};

export default StarRating;
