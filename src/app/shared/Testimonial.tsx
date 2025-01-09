"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Ali bin Abu",
      image: "/customer/Haz.jpg",
      feedback: "Saya suka dengan website yang hazim buat. Sangat colourful dan menarik. Sangat recommended untuk personal branding atau portfolio.",
      rating: 4,
    },
    {
      name: "Siti Kasminah Lumen",
      image: "/customer/Haz.jpg",
      feedback: "Saya suka dengan website yang hazim buat. Sangat colourful dan menarik. Sangat recommended untuk personal branding atau portfolio.",
      rating: 4,
    },
    {
      name: "Zam Alakazam",
      image: "/customer/Haz.jpg",
      feedback: "Saya suka dengan website yang hazim buat. Sangat colourful dan menarik. Sangat recommended untuk personal branding atau portfolio.",
      rating: 4,
    },
    {
      name: "John Doe",
      image: "/customer/Haz.jpg",
      feedback: "Saya suka dengan website yang hazim buat. Sangat colourful dan menarik. Sangat recommended untuk personal branding atau portfolio.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      image: "/customer/Haz.jpg",
      feedback: "Saya suka dengan website yang hazim buat. Sangat colourful dan menarik. Sangat recommended untuk personal branding atau portfolio.",
      rating: 5,
    },
    {
      name: "Ahmad Zaki",
      image: "/customer/Haz.jpg",
      feedback: "Saya suka dengan website yang hazim buat. Sangat colourful dan menarik. Sangat recommended untuk personal branding atau portfolio.",
      rating: 5,
    },
  ];

  const totalSlides = Math.ceil(testimonials.length / 3);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  return (
    <section
      id="testimonial"
      className="relative bg-gradient-to-r from-black to-green-900 text-white py-20 flex items-center justify-center"
    >
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
          Customer Feedback
        </h2>

        {/* Testimonials Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4"
              >
                <div className="bg-transparent border-2 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={testimonial.image}
                    alt="Customer"
                    width={10}
                    height={10}
                    className="w-14 h-14 object-cover rounded-full border-2 shadow-lg mx-auto"
                  />
                  <h3 className="text-xl font-semibold text-yellow-400 mb-4 mt-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-start text-white-600">{testimonial.feedback}</p>
                  <div className="mt-3 flex justify-center">
                    {Array.from({ length: 5 }, (_, index) => (
                      <i
                        key={index}
                        className={`fa-solid fa-star ${
                          index < testimonial.rating ? "text-yellow-400" : ""
                        }`}
                      />
                    ))}
                  </div>
                  <h3 className="text-xl text-white mt-2">{testimonial.rating}.0</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-between w-full max-w-xs">
          <button
            onClick={goToPrev}
            className="text-3xl text-white bg-transparent hover:bg-yellow-500 p-2 rounded-full"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={goToNext}
            className="text-3xl text-white bg-transparent hover:bg-yellow-500 p-2 rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
