import React, { useState, useEffect, useRef } from "react";
import build from '../../assets/building.png';
import bed from '../../assets/bed.png'
import homeopathy from '../../assets/homeopathy.png'

const LuxuryInstitutionsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
 const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);



  const institutions = [
    {
      id: 1,
      name: "RKDF Homeopathy College",
      image: build,
      description: "Excellence in Homeopathic Education",
      established: "2005",
      category: "Healthcare",
      students: "500+",
      link: "/institutions/homeopathy"
    },
    {
      id: 2,
      name: "RKDF Nursing College",
      image: bed,
      description: "Nurturing Healthcare Professionals",
      established: "2008",
      category: "Healthcare",
      students: "750+",
      link: "/institutions/nursing"
    },
    {
      id: 3,
      name: "RKDF Pharmacy College",
      image: homeopathy,
      description: "Leading Pharmaceutical Education",
      established: "2010",
      category: "Sciences",
      students: "600+",
      link: "/institutions/pharmacy"
    },
    {
      id: 4,
      name: "RKDF Engineering College",
      image: build,
      description: "Innovation in Technology",
      established: "2003",
      category: "Technology",
      students: "1200+",
      link: "/institutions/engineering"
    },
    {
      id: 5,
      name: "RKDF Medical College",
      image: bed,
      description: "Quality Medical Education",
      established: "2012",
      category: "Healthcare",
      students: "800+",
      link: "/institutions/medical"
    },
    // {
    //   id: 6,
    //   name: "RKDF Dental College",
    //   image: homeopathy,
    //   description: "Advanced Dental Sciences",
    //   established: "2015",
    //   category: "Healthcare",
    //   students: "400+",
    //   link: "/institutions/dental"
    // },
    // {
    //   id: 7,
    //   name: "RKDF Management Institute",
    //   image: build,
    //   description: "Business Leadership Excellence",
    //   established: "2007",
    //   category: "Business",
    //   students: "900+",
    //   link: "/institutions/management"
    // },
    // {
    //   id: 8,
    //   name: "RKDF Law College",
    //   image: bed,
    //   description: "Legal Education & Justice",
    //   established: "2011",
    //   category: "Legal Studies",
    //   students: "550+",
    //   link: "/institutions/law"
    // }
  ];

  // Auto-scroll every 2 seconds
  useEffect(() => {
   if (isAutoPlaying) {
      autoPlayRef.current = setInterval (() => {
        setCurrentIndex((prev) => (prev + 1) % institutions.length);
      }, 2000); // Changed to 2 seconds
    }

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, institutions.length]);

  const goToSlide = (index: number) => {

    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % institutions.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + institutions.length) % institutions.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + institutions.length) % institutions.length;
      cards.push({ ...institutions[index], position: i, originalIndex: index });
    }
    return cards;
  };

  return (
    <section className="relative min-h-screen bg-white py-6 md:py-8 overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #92400e 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      {/* <div className="absolute top-20 right-20 w-64 h-64 md:w-96 md:h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 md:w-96 md:h-96 bg-stone-300/20 rounded-full blur-3xl"></div> */}

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Refined Header */}
        <div className="text-center mb-4 md:mb-4">
          {/* <div className="inline-block mb-4 md:mb-6">
            <div className="flex items-center gap-2 md:gap-4">
              <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent via-amber-800 to-amber-800"></div>
              <span className="text-amber-800 text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] font-light uppercase">
                Est. 2003
              </span>
              <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent via-amber-800 to-amber-800"></div>
            </div>
          </div> */}

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-4 md:mb-4 text-stone-900 tracking-tight px-4">
            Our <span className="font-serif italic">Institutions</span>
          </h1>

          <p className="text-base md:text-xl text-stone-700 max-w-2xl mx-auto font-light leading-relaxed px-4">
            A legacy of academic excellence spanning decades, shaping futures across diverse disciplines
          </p>
        </div>

        {/* Luxury Carousel */}
        <div 
          className="relative h-[500px] sm:h-[550px] md:h-[600px] mb-3 md:mb-6"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={() => setIsAutoPlaying(false)}
          onTouchEnd={() => setTimeout(() => setIsAutoPlaying(true), 5000)}
        >
          <div className="relative h-full flex items-center justify-center">
            {getVisibleCards().map((institution, idx) => {
              const isCenter = institution.position === 0;
              const isLeft = institution.position === -1;
              const isRight = institution.position === 1;

              return (
                <div
                  key={`${institution.id}-${idx}`}
                  className="absolute transition-all duration-700 ease-out"
                  style={{
                    transform: `
                      translateX(${institution.position * (window.innerWidth < 640 ? 280 : window.innerWidth < 1024 ? 340 : 420)}px)
                      scale(${isCenter ? 1 : window.innerWidth < 768 ? 0.7 : 0.85})
                      rotateY(${institution.position * (window.innerWidth < 768 ? -5 : -8)}deg)
                    `,
                    opacity: isCenter ? 1 : window.innerWidth < 768 ? 0.3 : 0.4,
                    zIndex: isCenter ? 20 : 10,
                    filter: isCenter ? 'none' : 'grayscale(0.3)',
                    pointerEvents: isCenter ? 'auto' : 'none'
                  }}
                >
                  <div className={`w-[280px] sm:w-[340px] lg:w-[420px] bg-white rounded-sm shadow-2xl overflow-hidden transition-all duration-700 ${
                    isCenter ? 'shadow-amber-900/20' : 'shadow-stone-900/10'
                  }`}>
                    {/* Premium Border */}
                    <div className="absolute inset-0 border border-amber-900/10 rounded-sm pointer-events-none"></div>
                    
                    {/* Number Badge */}
                    {/* <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-white/95 backdrop-blur-sm rounded-full border border-amber-900/20 flex items-center justify-center shadow-lg">
                        <span className="text-lg md:text-2xl font-light text-amber-900">
                          {String(institution.originalIndex + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div> */}

                    {/* Image Section */}
                    <div className="relative h-44 sm:h-56 lg:h-68 overflow-hidden bg-stone-100">
                      <img
                        src={institution.image}
                        alt={institution.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/20 to-transparent"></div>
                      
                      {/* Category Badge */}
                      {/* <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                        <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/95 backdrop-blur-sm text-amber-900 text-[10px] md:text-xs tracking-widest font-light uppercase border border-amber-900/20">
                          {institution.category}
                        </span>
                      </div> */}
                    </div>

                    {/* Content Section */}
                    <div className="p-3 sm:p-4 lg:p-6">
                      <div className="flex items-start justify-between mb-2 md:mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black mb-1 leading-tight">
                            {institution.name}
                          </h3>
                          <div className="w-10 md:w-12 h-[1px] bg-amber-800 mb-2 md:mb-3"></div>
                        </div>
                      </div>

                      <p className="text-sm md:text-base text-gray-600  leading-relaxed mb-3 md:mb-4">
                        {institution.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 mb-2 md:mb-3 pb-3 md:pb-4 border-b border-stone-200">
                        <div>
                          <div className="text-[10px] md:text-xs text-gray-900 tracking-wider uppercase mb-1 ">
                            Established
                          </div>
                          <div className="text-base md:text-lg text-orange-900 font-light">
                            {institution.established}
                          </div>
                        </div>
                        <div>
                          <div className="text-[10px] md:text-xs text-gray-900 tracking-wider uppercase mb-1 ">
                            Students
                          </div>
                          <div className="text-base md:text-lg text-amber-900 font-light">
                            {institution.students}
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <a
                        href={institution.link}
                        className="inline-flex items-center gap-2 md:gap-3 text-amber-900 hover:text-gray-800 transition-all duration-300 group"
                      >
                        <span className="text-xs md:text-sm tracking-widest uppercase font-light">
                          Discover More
                        </span>
                        <svg 
                          className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-2 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-1 md:left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white hover:bg-amber-50 border border-amber-900/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-30 group"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-900 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-1 md:right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white hover:bg-amber-50 border border-amber-900/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-30 group"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-900 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Elegant Pagination */}
        <div className="flex justify-center items-center gap-2 md:gap-3 mb-6 md:mb-0">
          {institutions.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`transition-all duration-500 ${
                index === currentIndex
                  ? 'w-12 md:w-16 h-[2px] bg-amber-900'
                  : 'w-6 md:w-8 h-[1px] bg-stone-400 hover:bg-stone-600'
              }`}></div>
            </button>
          ))}
        </div>

        {/* Institution Name Display */}
        {/* <div className="text-center mt-8 md:mt-12">
          <div className="inline-block px-6 py-3 md:px-8 md:py-4 bg-white/60 backdrop-blur-sm border border-amber-900/10 rounded-sm">
            <p className="text-xs md:text-sm text-stone-500 tracking-widest uppercase mb-1 font-light">
              Currently Viewing
            </p>
            <h3 className="text-lg md:text-2xl text-stone-900 font-light">
              {institutions[currentIndex].name}
            </h3>
          </div>
        </div> */}
      </div>

      <style >{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300&family=Montserrat:wght@200;300;400&display=swap');
        
        section {
          font-family: 'Montserrat', sans-serif;
        }
        
        h1 span {
          font-family: 'Cormorant', serif;
        }
      `}</style>
    </section>
  );
};

export default LuxuryInstitutionsCarousel;