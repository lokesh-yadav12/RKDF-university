import React, { useState, useEffect } from 'react';
import logo from '../../assets/rkdflogo.png';
export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const images = [
    {
      url: "https://images.unsplash.com/photo-1562774053-701939374585?w=1600&h=600&fit=crop&auto=format",
      alt: "University Campus Building",
      text: "RKDF University"
    },
    {
      url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&h=600&fit=crop&auto=format",
      alt: "Students in Library",
      text: "Academic Excellence"
    },
    {
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=600&fit=crop&auto=format",
      alt: "Graduation Ceremony",
      text: "Celebrating Success"
    },
    {
      url: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1600&h=600&fit=crop&auto=format",
      alt: "Campus Courtyard",
      text: "Campus Life"
    },
    {
      url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600&h=600&fit=crop&auto=format",
      alt: "Research Lab",
      text: "Research & Innovation"
    },
    {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&h=600&fit=crop&auto=format",
      alt: "Lecture Hall",
      text: "Modern Learning Spaces"
    },
    {
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1600&h=600&fit=crop&auto=format",
      alt: "Students Studying",
      text: "Quality Education"
    },
    {
      url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1600&h=600&fit=crop&auto=format",
      alt: "Sports Facility",
      text: "Sports & Wellness"
    },
    {
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&h=600&fit=crop&auto=format",
      alt: "Group Study",
      text: "Collaborative Learning"
    },
    {
      url: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1600&h=600&fit=crop&auto=format",
      alt: "Library Collection",
      text: "World-Class Library"
    },
    {
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&h=600&fit=crop&auto=format",
      alt: "Science Lab",
      text: "Advanced Laboratories"
    },
    {
      url: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=1600&h=600&fit=crop&auto=format",
      alt: "International Students",
      text: "Global Community"
    },
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=600&fit=crop&auto=format",
      alt: "Team Project",
      text: "Innovation Hub"
    },
    {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&h=600&fit=crop&auto=format",
      alt: "Campus Events",
      text: "Cultural Excellence"
    },
    {
      url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1600&h=600&fit=crop&auto=format",
      alt: "Computer Lab",
      text: "Digital Learning"
    },
    {
      url: "https://images.unsplash.com/photo-1533230408708-8f9f91d1235a?w=1600&h=600&fit=crop&auto=format",
      alt: "Students Walking",
      text: "Green Campus"
    },
    {
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=600&fit=crop&auto=format",
      alt: "Convocation",
      text: "Alumni Network"
    },
    {
      url: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1600&h=600&fit=crop&auto=format",
      alt: "Study Group",
      text: "Peer Learning"
    },
    {
      url: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1600&h=600&fit=crop&auto=format",
      alt: "Art & Design",
      text: "Creative Programs"
    },
    {
      url: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1600&h=600&fit=crop&auto=format",
      alt: "Campus Green Space",
      text: "Sustainable Future"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 2000); // 2 second interval
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Image Carousel */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: activeIndex === index ? 1 : 0,
              zIndex: activeIndex === index ? 1 : 0
            }}
          >
            <img 
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Centered text overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center px-4 drop-shadow-2xl">
                {image.text}
              </h2>
            </div>
          </div>
        ))}

        {/* Progress dots indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
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
                  width: activeIndex === index ? '32px' : '8px',
                  height: '8px',
                  backgroundColor: activeIndex === index ? '#ffffff' : 'rgba(255, 255, 255, 0.5)'
                }}
              ></div>
            </button>
          ))}
        </div>
      </div>

      {/* Welcome Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            {/* Logo placeholder - replace with actual logo */}
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4">
             <img src={logo} alt="" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Welcome to RKDF University, Bhopal, India
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 mt-4">
            Launch <a href="#" className="text-blue-600 hover:underline">Student Portal</a> of RKDF University
          </p>
        </div>
      </div>
    </div>
  );
}