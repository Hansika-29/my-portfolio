import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="my-20 max-w-lg mx-auto">
      <h3 className="text-3xl font-semibold text-teal-700 mb-6 text-center">Contact Me</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('Thanks for reaching out!');
        }}
        className="bg-white p-6 rounded shadow-md"
      >
        <label className="block mb-3">
          <span className="text-gray-700 font-medium">Name</span>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500"
            placeholder="Your Name"
          />
        </label>
        <label className="block mb-3">
          <span className="text-gray-700 font-medium">Email</span>
          <input
            type="email"
            required
            className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500"
            placeholder="you@example.com"
          />
        </label>
        <label className="block mb-3">
          <span className="text-gray-700 font-medium">Message</span>
          <textarea
            required
            className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500"
            rows="4"
            placeholder="Your message here..."
          />
        </label>
        <button
          type="submit"
          className="w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-800 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
