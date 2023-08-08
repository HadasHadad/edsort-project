import React from 'react'
import studio from '../assets/images/studio.png';
import flag from '../assets/icons/flag.svg';

export default function Card() {
  return (
    <>
      <section>
        <div className="">
          

          <div id="flex card_" className='m-5 flex bg-gray-100 justify-around rounded-md'>
           
              <img src={studio} alt="studio" className='w-12 h-12 flex place-self-center mr-2 flex-shrink-0'/>
            
            <div className='font-assistant m-2 flex-grow'>
              <h3 className='text-base font-semibold'>כותרת</h3>
              <p className='text-xs'>
                בית ספר בעל ותק של למעלה מ-20 שנה המעסיק אנשי מקצוע מפורסמים
                מעולם העיצוב בשלל תחומים. בית הספר ידוע בליווי אישי וצמוד לכל
                סטודנט עם קורסים הכוללים עבודה מעשית והכנה לשוק העבודה. לסטודיו
                שני סניפים הנמצאים בתל-אביב ובחיפה.
              </p>
            </div>
            <div id="inf" className='flex ml-2 pl-2 flex-shrink-0'>
              <p className='font-assistant text-xs'>4.5/5</p>
              <img src={flag} alt="flag" className='w-3 h-3'/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}