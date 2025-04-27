// import React from 'react'
// import Image from 'next/image'

// export const Contact = () => {
//   return (
//     <section className='py-16' >
//         <h1 className='text-2xl sm:text-3xl text-center font-bold' >Get In Touch</h1>
//         <p className='text-center text-sm sm:text-base text-gray-700 mt-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//         <div className='w-[90%] sm:w-[80%] lg:w-60% mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mt-16' >
//             <div className='h-full ' >
//                 <input type="text" placeholder='Name' className='w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4' />
//                 <input type='email' placeholder='Email' className='w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4' />
//                 <input type="text" placeholder='Subject' className='w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md ' />
//             </div>
//             <div className='h-full' > 
//                 <textarea placeholder='message' className='w-full h-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4'></textarea>
//             </div>
//         </div>
//         <button className='mt-8 flex items-center gap-2 bg-yellow-400 rounded-md px-6 py-4 hover:bg-yellow-200 transition mx-auto' >
//             <Image src="/send.svg" width={40} height={40} alt='->' /> Send Message
//         </button>
//     </section>
//   )
// }

'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setSent(true);
      form.reset();
    } else {
      console.error('Email send failed');
    }
  };

  return (
    <section className="py-16">
      <h1 className="text-2xl sm:text-3xl text-center font-bold">Get In Touch</h1>
      <p className="text-center text-sm sm:text-base text-gray-700 mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-[90%] sm:w-[80%] lg:w-60% mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-16"
      >
        <div className="h-full">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md"
          />
        </div>
        <div className="h-full">
          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full h-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4"
          ></textarea>
        </div>
        <div className="col-span-2 flex justify-center">
          <button
            type="submit"
            className="mt-8 flex items-center gap-2 bg-yellow-400 rounded-md px-6 py-4 hover:bg-yellow-200 transition"
          >
            <Image src="/send.svg" width={40} height={40} alt="->" />
            Send Message
          </button>
        </div>
        {sent && (
          <p className="col-span-2 text-green-600 text-center mt-4">
            Message sent successfully!
          </p>
        )}
      </form>
      
    </section>
  );
};
