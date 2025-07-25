import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-24 my-20 px-4">
      <h3 className="text-3xl font-semibold text-teal-700 mb-6 text-leftalign">Contact Me</h3>
      <h5
        onSubmit={(e) => {
          e.preventDefault();
          alert('Thanks for reaching out!');
        }}
        className="bg-gray-200 p-6 rounded shadow-md"
      >
        <label className="block mb-3">
          <span className="text-gray-700 font-medium">Name :- Hansika Mupparti</span>
        </label>
        <label className="block mb-3">
          <span className="text-gray-700 font-medium">Email :- hansikamupparti7@gmail.com</span>
        </label>
        <label className="block mb-3">
          <span className="text-gray-700 font-medium">Phone.no :- 7416518482</span>
        </label>
      </h5>
    </section>
  );
};

export default Contact;
