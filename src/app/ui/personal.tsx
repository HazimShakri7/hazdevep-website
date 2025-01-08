"use client";
import React, { useState } from 'react';

export default function Personal() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', contactNumber: '', email: '', projectName: ''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Submitted: ${formData.firstName} ${formData.lastName} ${formData.contactNumber} ${formData.email} ${formData.projectName}`);
  };

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
        <div className="col-span-5 text-left mb-2 mt-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        Customer Form
     </h2>
    </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left mt-4">
        {/* First Name Input */}
        <div>
          <label htmlFor="firstName" className="text-lg font-semibold text-white text-left">
          </label>
          <input placeholder="First Name" type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 py-1 border-b-2 outline-none bg-transparent text-white w-full" required/>
        </div>

        {/* Last Name Input */}
        <div>
          <label htmlFor="lastName" className="text-lg font-semibold text-white text-left">
          </label>
          <input placeholder="Last Name" type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 py-1 border-b-2 outline-none bg-transparent text-white w-full" required/>
        </div>

        {/* Contact Number Input */}
        <div>
           <label htmlFor="contactNumber" className="text-lg font-semibold text-white text-left">
          </label>
          <input placeholder="Contact Number" type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="mt-1 py-1 border-b-2 outline-none bg-transparent text-white w-full" required/>
        </div>

        {/* Email Input */}
        <div>
           <label htmlFor="email" className="text-lg font-semibold text-white text-left">
          </label>
          <input placeholder="Email" type="text" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 py-1 border-b-2 outline-none bg-transparent text-white w-full" required/>
        </div>

        {/* Project Name Input */}
        <div className="col-span-1 sm:col-span-2 md:col-span-4 mt-4">
        <div>
           <label htmlFor="projectName" className="text-lg font-semibold text-white text-left">
          </label>
          <input placeholder="Project Name and (Detail Description)" type="text" id="projectName" name="projectName" value={formData.projectName} onChange={handleChange} className="mt-1 py-1 border-b-2 outline-none bg-transparent text-white w-full max-w-full" required/>
        </div>

        {/* Submit Button */}
        <div className="flex justify-start mt-8">
          <button type="submit" className="px-4 py-2 bg-yellow-500 border-2 text-white font-semibold rounded hover:bg-transparent transition duration-300">
            Submit
          </button>
        </div>
        </div>
      </form>
    </div>
  );
}
