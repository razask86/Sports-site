import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your desired action with the email and message data, such as sending an email or submitting a form

    // Clear the form fields
    setEmail('');
    setMessage('');
  };

  return (
    <div className='bg-gray-800 text-white py-10 mt-8'>
      <div className='max-w-4xl mx-auto px-4'>
        <h1 className='text-lg font-semibold text-center'>
          Need help? Email - rsheikh.work@gmail.com
        </h1>
        {/* <form
          className='mt-8 flex flex-col items-center'
          onSubmit={handleSubmit}
        >
          <input
            type='email'
            placeholder='Your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-gray-200 text-gray-800 rounded-md py-2 px-4 w-full sm:w-auto mb-4'
            required
          />
          <textarea
            placeholder='Your message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='bg-gray-200 text-gray-800 rounded-md py-2 px-4 w-full sm:w-auto mb-4'
            required
          />
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg focus:outline-none'
          >
            Submit
          </button>
        </form> */}
        <ul className='flex justify-center mt-8'>
          <li className='mr-4'>
            <a href='https://www.facebook.com'>
              <FaFacebook size={24} className='text-white' />
            </a>
          </li>
          <li className='mr-4'>
            <a href='https://www.twitter.com'>
              <FaTwitter size={24} className='text-white' />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com'>
              <FaInstagram size={24} className='text-white' />
            </a>
          </li>
        </ul>
        <p className='text-sm text-center mt-8'>
          &copy; 2023 Md Raza Sheikh. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
