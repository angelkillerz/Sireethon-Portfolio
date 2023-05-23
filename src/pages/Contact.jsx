import React from 'react';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/git.svg';
import email from '../assets/email.svg';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send the form data to your email
  };

  return (
    <section className="contact w-full py-10 flex flex-col items-center justify-center text-green-500">
     

      <div className="contact-form bg-gray-800/30 rounded-lg p-20 shadow-lg">
        <h2 className="text-green-500 text-2xl mb-6 text-center">Contact Me</h2>
        <form 
        method='post'
        action=
    "mailto: sireethon.bcp@gmail.com" className="w-full max-w-md">
          <div className="form-group mb-4">
            <label htmlFor="name" className="text-green-500 block mb-2">
              Name
            </label>
            <input type="text" id="name" name="name" required className="w-full bg-gray-700/90 text-green-500 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="email" className="text-green-500 block mb-2">
              Email
            </label>
            <input type="email" id="email" name="email" required className="w-full bg-gray-700/90 text-green-500 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="message" className="text-green-500 block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full bg-gray-700/70 text-green-500 py-2 px-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
          <div className='flex justify-center'>
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg ">
              Send
            </button>
          </div>
          
        </form>
      </div>
    </section>
  );
}

export default Contact;
