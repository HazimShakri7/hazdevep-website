"use client";

import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
interface FormInputs {
  name: string;
  email: string;
  message: string;
}

export default function Contact () {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    setIsSubmitted(true);
    console.log(data); // Here you can handle the data (e.g., send it to an API or email service)
  };

  return (
    <section id="contact" className="relative bg-gradient-to-r from-black to-green-900 text-white h-screen flex items-center justify-center">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          Want a Website?
        </h2>

        <form
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { 
                required: "Email is required", 
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Enter a valid email address",
                }
              })}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
              rows={4}
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>

          {isSubmitted && (
            <p className="mt-4 text-green-600 text-lg">
              Thank you for contacting me! I'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
