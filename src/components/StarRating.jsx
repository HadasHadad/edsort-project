import React from 'react'

export default function StarRating({title}) {
  return (
    <div className='flex flex-col items-center m-8'>
        <p className='font-assistant text-xs'>{title}</p>
    <div className="rating flex-row-reverse ">
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-blue-400 w-4 h-4"
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-blue-400 w-4 h-4"
        checked
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-blue-400 w-4 h-4"
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-blue-400 w-4 h-4"
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-blue-400 w-4 h-4"
      />
    </div>
    </div>
  );
}