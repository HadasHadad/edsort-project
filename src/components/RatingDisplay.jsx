import React from 'react'
import StarRating from './StarRating';

export default function RatingDisplay() {
  return (
    <>
    <div className='flex flex-wrap justify-center'>
    <StarRating title="יחס אישי מהמרצה"/>
    <StarRating title="ידע וניסיון המרצים"/>
    <StarRating title="מוכנות לעבודה"/>
    <StarRating title="תמורה למחיר"/>
    </div>
    </>
  )
}