'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(false);
    setError(false);
    setLoading(true);

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

    setLoading(false);

    if (res.ok) {
      setSent(true);
      form.reset();
    } else {
      setError(true);
      console.error('Email send failed');
    }
  };

  return (
    <section className="py-10 overflow-hidden p-5 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-center bg-gradient-to-b from-black to-[#868d25] text-transparent bg-clip-text mt-6">
          Get In Touch
        </h2>
        <p className="text-[#454911] text-xl"></p>
      </div>

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
            disabled={loading}
            className={`mt-8 flex items-center gap-2 bg-yellow-400 rounded-md px-6 py-4 hover:bg-yellow-200 transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
          {loading ? (
            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"
              ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
            </svg>
          ) : (
            <>
              <Image src="/send.svg" width={40} height={40} alt="->" />
              Send Message
            </>
          )}
      </button>

        </div>
        {sent && (
          <p className="col-span-2 text-green-600 text-center mt-4">
            Message sent successfully!
          </p>
        )}
        {error && (
          <p className="col-span-2 text-red-600 text-center mt-4">
            ❌ Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </section>
  );
};
