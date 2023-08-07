import React from 'react';
import phoneIcon from '../assets/icons/phone.svg'
import emailIcon from '../assets/icons/email.svg'
import userIcon from '../assets/icons/user.svg'

// import { urlencoded } from 'express';
import image from '../assets/images/bgBlue.png'




const ContactForm = () => {
    
  return (
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className="w-full max-w-md p-8 rounded shadow-lg"
      >
        <div className="text-center">
          <h2 className="text-md  mb-4 mx-auto">
            עדיין מתלבטים? השאירו פרטים ליעוץ לימודים בחינם!
          </h2>
        </div>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            ></label>

            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded placeholder-icon "
              placeholder="שם מלא"
              style={{
                backgroundImage: `url(${userIcon})`,
                backgroundPosition: "right 5px center",
                backgroundRepeat: "no-repeat",
                paddingRight: "40px",
              }}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            ></label>

            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded"
              placeholder="אימייל"
              style={{
                backgroundImage: `url(${emailIcon})`,
                backgroundPosition: "right 5px center",
                backgroundRepeat: "no-repeat",
                paddingRight: "40px",
              }}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <input
              id="message"
              name="message"
              className="mt-1 p-2 w-full border rounded"
              placeholder="טלפון"
              style={{
                backgroundImage: `url(${phoneIcon})`,
                backgroundPosition: "right 5px center",
                backgroundRepeat: "no-repeat",
                paddingRight: "40px",
              }}
            ></input>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-auto"
            >
              שלח
            </button>
          </div>
        </form>
      </div>
   
  );
};

export default ContactForm;