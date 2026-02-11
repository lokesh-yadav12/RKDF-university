import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import logo from '../../assets/rkdflogo.png';
import img1 from '../../assets/rkdf1.png';
import img2 from '../../assets/rkdf2.png'
import img3 from '../../assets/rkdf3.png'
import img4 from '../../assets/rkdf4.png'
import img5 from '../../assets/rkdf5.png'
import img6 from '../../assets/rkdf6.png'
import img7 from '../../assets/rkdf7.png'
import img8 from '../../assets/rkdf8.png'
import img9 from '../../assets/rkdf9.png'
import img10 from '../../assets/rkdf10.png'
import img11 from '../../assets/rkdf11.png'
import img12 from '../../assets/rkdf12.png'
import img13 from '../../assets/rkdf13.png'
import img14 from '../../assets/rkdf14.png'
import img15 from '../../assets/rkdf15.png'
import img16 from '../../assets/rkdf16.png'
import img17 from '../../assets/rkdf17.png'
import img21 from '../../assets/rkdf21.png'

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const images = [
    {
      url: img21,
      alt: "Study Group",
      text: ""
    },
    {
      url: img1,
      alt: "University Campus Building",
      text: ""
    },
    {
      url: img2,
      alt: "Students in Library",
      text: ""
    },
    {
      url: img3,
      alt: "Graduation Ceremony",
      text: ""
    },
    {
      url: img4,
      alt: "Campus Courtyard",
      text: ""
    },
    {
      url: img5,
      alt: "Research Lab",
      text: ""
    },
    {
      url: img6,
      alt: "Lecture Hall",
      text: ""
    },
    {
      url: img7,
      alt: "Students Studying",
      text: ""
    },
    {
      url: img8,
      alt: "Sports Facility",
      text: ""
    },
    {
      url: img9,
      alt: "Group Study",
      text: ""
    },
    {
      url: img10,
      alt: "Library Collection",
      text: ""
    },
    {
      url: img11,
      alt: "Science Lab",
      text: ""
    },
    {
      url: img12,
      alt: "International Students",
      text: ""
    },
    {
      url: img13,
      alt: "Team Project",
      text: ""
    },
    {
      url: img14,
      alt: "Campus Events",
      text: ""
    },
    {
      url: img15,
      alt: "Computer Lab",
      text: ""
    },
    {
      url: img16,
      alt: "Students Walking",
      text: ""
    },
    {
      url: img17,
      alt: "Convocation",
      text: ""
    },
  ];

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % images.length);
      }, 2000); // 2 second interval
      
      return () => clearInterval(interval);
    }
  }, [isPaused, images.length]);

  return (
    <div className="w-full">
      {/* Hero Image Carousel */}
      <div 
        className="relative bg-white w-full overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="transition-opacity bg-white duration-1000 ease-in-out"
            style={{
              opacity: activeIndex === index ? 1 : 0,
              display: activeIndex === index ? 'block' : 'none',
              zIndex: activeIndex === index ? 1 : 0
            }}
          >
            <img 
              src={image.url}
              alt={image.alt}
              className="w-full h-[550px] sm:mt-4 object-cover"
            />
            
            {/* Centered text overlay */}
            {image.text && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center px-4 drop-shadow-2xl">
                  {image.text}
                </h2>
              </div>
            )}
          </div>
        ))}

        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Progress dots indicator */}
        {/* <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center space-x-2 z-10 px-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="transition-all duration-300"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className="rounded-full transition-all duration-300"
                style={{
                  width: activeIndex === index ? '24px' : '6px',
                  height: '6px',
                  backgroundColor: activeIndex === index ? '#4a90c8' : 'rgba(74, 144, 200, 0.5)'
                }}
              ></div>
            </button>
          ))}
        </div> */}
      </div>

      {/* Welcome Section */}
      <div className="bg-white py-4 px-4 mb-4 mt-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center mb-2 gap-2 md:gap-0">
           
           <div className="flex md:hidden w-20 h-20  rounded-full items-center justify-center">
             <img src={logo} alt="" className="w-full h-full object-contain" />
            </div>
           <div className="hidden md:flex w-16 h-16  rounded-full items-center justify-center mr-4">
             <img src={logo} alt="" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Welcome to RKDF University, Bhopal, India
            </h1>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-2">
            Launch <a href="#" className="text-blue-600 hover:underline">Student Portal</a> of RKDF University
          </p>
        </div>
      </div>
    </div>
  );
}