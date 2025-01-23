"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  const testimonials = [
    { name: "Stephen Curry", image: "/customer/Cust1.jpg", feedback: "Saya suka portfolio yang hazim dah buat. Very creative.", rating: 4 },
    { name: "Jack Kie", image: "/customer/Cust2.jpg", feedback: "Thanks for created me an e-commerce. Very user-friendly.", rating: 5 },
    { name: "Sam Collay", image: "/customer/Cust3.jpg", feedback: "Good job bro for creating my personal branding website.", rating: 4 },
    { name: "John Doe", image: "/customer/Cust4.jpg", feedback: "Terima kasih.", rating: 5 },
    { name: "Jane Smith", image: "/customer/Cust5.jpg", feedback: "Lawa lah website.", rating: 5 },
    { name: "Ray Jackson", image: "/customer/Cust4.jpg", feedback: "Terbaik.", rating: 5 },
    { name: "IShow Speed", image: "/customer/Cust3.jpg", feedback: "Nicer.", rating: 5 },
    { name: "King Butcher", image: "/customer/Cust2.jpg", feedback: "Tak pernah tak smart.", rating: 5 },
  ];

  // Calculate the total number of slides
  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

  // Adjust cards per slide based on screen size
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1); // Small screens
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2); // Medium screens
      } else {
        setCardsPerSlide(3); // Large screens
      }
    };

    updateCardsPerSlide(); // Run on mount
    window.addEventListener("resize", updateCardsPerSlide); // Adjust on resize
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

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

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full ${
                  cardsPerSlide === 1
                    ? "sm:w-full"
                    : cardsPerSlide === 2
                    ? "sm:w-1/2"
                    : "lg:w-1/3"
                } px-4`}
              >
                <div className="bg-transparent border-2 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative">
                  {/* Number label */}
                  <span className="absolute top-4 left-4 text-xl font-bold text-yellow-400 rounded-full border-2 w-8 h-8">{index + 1}</span>
                  <Image
                    src={testimonial.image}
                    alt="Customer"
                    width={150}
                    height={150}
                    className="h-16 w-16 rounded-full border-2 shadow-lg mx-auto object-cover"
                  />
                  <h3 className="text-xl font-semibold text-white mb-4 mt-2">
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
                  <h3 className="text-xl text-white mt-2">{testimonial.rating}.0 </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

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
