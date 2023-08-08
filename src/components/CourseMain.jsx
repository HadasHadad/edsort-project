import React from 'react'
import barIlan from '../assets/images/barIlan 1.png'
import ticket from '../assets/icons/ticket.svg'
import StarRating from './StarRating'
import emptyStar from '../assets/icons/emptyStar.svg';
import globe from '../assets/icons/globe.svg'
import phone from '../assets/icons/phone.svg';
import whatsapp from '../assets/icons/whatsapp.png';
import shekel from '../assets/icons/shekel.png'

export default function CourseMain() {
  return (
    <>
       <div className='flex justify-center '>
        <div className='w-20 h-20 rounded-sm'>
        <img className='c' src={barIlan} alt="BarIlan" />
        </div>
        <img className= '' src={ticket} alt="ticket" />
       </div>
       <div>
        <div className='flex justify-between'>
            <div className='font-assistant m-5'>
                <h3 className='font-semibold'>שם הקורס</h3>
                <p className='font-assistant text-sm'>אוניברסיטת בר אילן</p>
            </div>
            <StarRating />
        </div>
        <p className='font-assistant text-xs m-5'>אוניברסיטת בר אילן מציעה מסלול הכולל מכינה טכנולוגית המקיפה הכנה לבחינות הסמכה הבינלאומיות. התוכנית נבנתה ע"פ מסמך מדיניות מקצועות הסייבר ע"י מטה הסייבר הלאומי במשרד ראש הממשלה. מסלול דו-חוגי המשלב כלים וידע נוסף.</p>
       </div>
       <div className='flex justify-center m-2'>
        <div className='m-2 border-gray border-2'>
        <img  src={emptyStar} alt="star rating" />
        </div>
        <div className='m-2 border-gray border-2'>
        <img src={globe} alt="globe" />
        </div>
        <div className='m-2 border-gray border-2'>
        <img src={phone} alt="phone" />
        </div>
        <div className='m-2 border-gray border-2'>
        <img src={whatsapp} alt="whatsapp" />
        </div>
       </div>
       <div className='flex justify-center'>
        <p>13000</p>
        <div className='h-2 w-2 flex justify-center content-center'>
        <img src={shekel} alt="shekel" />
        </div>
       </div>
    </>
  )
}