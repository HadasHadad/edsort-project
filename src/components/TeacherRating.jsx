import React from 'react'
import RatingDisplay from './RatingDisplay';
import graduateHat from '../assets/icons/graduateHat.svg'
import star from '../assets/icons/star.svg'

export default function TeacherRating() {
  return (
    <>
    <div className='m-6'>
    <header className='flex justify-between'>
        <img src={graduateHat} alt="graduate hat" />
        <h1 className='font-assistant'>אלון צור</h1>
        <div className='flex'>
           <h3 className='ml-1'>4.6</h3>
           <img src={star} alt="star" />
        </div>
    </header>
    <RatingDisplay/>
    <p className='font-assistant text-xs '>הבעת דעה שלילית, הצבעה על ליקויים. "הוא כל הזמן מעביר עלי ביקורת."
סקירה של אירוע, מופע, תערוכה וכד' לשם מתן הערכה חיובית או שלילית. "אני אוהבת לקרוא את ביקורת התיאטרון בעיתון.
בדיקה תקופתית. "יש לנו ביקורת של משרד הבריאות במסעדה."
ספח של כרטיס. "הסדרן תלש לנו את הביקורת בכניסה לקולנוע."</p>
</div>
    </>
    
  )
}