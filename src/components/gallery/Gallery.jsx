import React from "react";
import images from "../../assets/images/images";
import { useRef, useState } from "react";
import pattern from "../../assets/image.png";

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(0);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const imageKeys = Object.keys(images);

  return (
    <div>
      <section className="bg-gray-500 py-8">
        <div className="px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Horizontal Gallery
          </h2>
          <div className="px-4 flex justify-center">
            <div
              style={{
                backgroundImage: `url(${pattern})`,
                backgroundSize: "cover",
              }}
              className={`w-[70%] h-[650px] h rounded-lg shadow-md p-5 flex justify-center`}
            >
              <div className="relative group w-[100%]">
                <img
                  src={images[imageKeys[index]]}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-bold">
                    Photo {index + 1}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* Scroll Buttons */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10"
              onClick={() => scroll("left")}
            >
              &larr;
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10"
              onClick={() => scroll("right")}
            >
              &rarr;
            </button>

            {/* Carousel Container */}
            <div className="flex justify-center my-5 px-4">
              <div
                className="overflow-x-auto w-full scrollbar-hide relative"
                ref={carouselRef}
              >
                <div className="flex space-x-4">
                  {imageKeys.map((key, i) => (
                    <div
                      key={i}
                      className="min-w-[200px] h-40 flex-shrink-0 relative"
                      onClick={() => setIndex(i)}
                    >
                      <img
                        loading="eager"
                        src={images[key]}
                        alt={`Gallery ${i + 1}`}
                        className="w-full h-full object-cover rounded-lg shadow-md"
                      />
                      <div
                        className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center ${
                          index === i ? "opacity-100" : "opacity-0"
                        } hover:opacity-100 transition-opacity duration-300`}
                      >
                        <span className="text-white text-lg font-bold">
                          Photo {i + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
