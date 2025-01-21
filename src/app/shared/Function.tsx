"use client";
import { Button, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Function() {
  const functionList = [
    { title: "Portfolio", image: "/whywehave/PortfolioExample.jpg", link: "https://www.behance.net/search/projects/portfolio%20website?tracking_source=typeahead_search_direct" },
    { title: "Branding", image: "/whywehave/BrandingExample.jpg", link: "https://www.behance.net/search/projects/portfolio%20website?tracking_source=typeahead_search_direct" },
    { title: "Blogging", image: "/whywehave/BlogExample.jpg", link: "https://www.behance.net/search/projects/portfolio%20website?tracking_source=typeahead_search_direct" },
    { title: "E-Commerce", image: "/whywehave/ECommerceExample.jpg", link: "https://www.behance.net/search/projects/portfolio%20website?tracking_source=typeahead_search_direct" },
  ];

  return (
    <section
      id="function"
      className="relative bg-gradient-to-r from-black to-green-900 text-white py-20 flex items-center justify-center"
    >
      <div className="container mx-auto text-center px-4">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
          What can you do with a Website?
        </p>

        {/* Mapping Method to Avoid Duplication Code for Cards */}
        <Card className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {functionList.map((box, index) => (
            <CardBody
              key={index}
              className="bg-transparent border-2 p-6 sm:p-8 lg:p-12 xl:p-16 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative group"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-yellow-500 mb-4 text-center">
                {box.title}
              </p>
              {/* Image displayed when card is hovered */}
              <Image
                src={box.image}
                alt={box.title}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 80vw, 100vw"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group:hover:scale-110 transition-all duration-300"
                fill
              />
              {/* Find Similar Button */}
              <Link href={box.link} passHref>
                <Button
                  className="absolute bottom-4 left-4 bg-transparent text-white py-2 px-6 border-2 rounded-full hover:bg-green-900 transition duration-300"
                >
                  Find Similar
                </Button>
              </Link>
            </CardBody>
          ))}
        </Card>
      </div>
    </section>
  );
}
