import React, { useState, useEffect, useRef } from "react";
//import build from '../../assets/building.png';
import bed from '../../assets/bed.png'
import bhabha from '../../assets/babha.png'
import ctr from '../../assets/ctr.png'
import ctrEntrance from '../../assets/ctr1.png'
import homeopathy from '../../assets/homeopathy.png'
import nursing from '../../assets/nursing.png'
import polytecnic from '../../assets/polytecnic.png'
import ayurveda from '../../assets/ayurveda.png'
import utd from '../../assets/utd.png'
import satya from '../../assets/satya.png'
import vit from '../../assets/vit.png'  
import univer from '../../assets/university.png'


const LuxuryInstitutionsCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  const institutions = [
    {
      id: 1,
      name: "RKDF Bed College",
      image: bed,
      description: "Excellence in Homeopathic Education",
      established: "2005",
      category: "Healthcare",
      students: "500+",
      link: "/institutions/homeopathy"
    },
    {
      id: 2,
      name: "RKDF Bhabha College",
      image: bhabha,
      description: "Nurturing Healthcare Professionals",
      established: "2008",
      category: "Healthcare",
      students: "750+",
      link: "/institutions/nursing"
    },
    {
      id: 3,
      name: "RKDF CTR College",
      image: ctr,
      description: "Leading Pharmaceutical Education",
      established: "2010",
      category: "Sciences",
      students: "600+",
      link: "/institutions/pharmacy"
    },
    {
      id: 4,
      name: "RKDF CTR Entrance",
      image: ctrEntrance,
      description: "Innovation in Technology",
      established: "2003",
      category: "Technology",
      students: "1200+",
      link: "/institutions/engineering"
    },
    {
      id: 5,
      name: "RKDF Homeopathy College",
      image: homeopathy,
      description: "Innovation in Technology",
      established: "2003",
      category: "Technology",
      students: "1200+",
      link: "/institutions/engineering"
    },
    {
      id: 6,
      name: "RKDF Nursing College",
      image: nursing,
      description: "Innovation in Technology",
      established: "2003",
      category: "Technology",
      students: "1200+",
      link: "/institutions/engineering"
    },
    {
      id: 7,
      name: "RKDF Polytecnic College",
      image: polytecnic,
      description: "Innovation in Technology",
      established: "2003",
      category: "Technology",
      students: "1200+",
      link: "/institutions/engineering"
    },
    {
      id: 8,
      name: "RKDF Ayurveda College",
      image: ayurveda,
      description: "Innovation in Technology",
      established: "2003",
      category: "Technology",
      students: "1200+",
      link: "/institutions/engineering"
    },
    {
      id: 10,
      name: "RKDF University Entrance",
      image: univer,
      description: "Quality Medical Education",
      established: "2012",
      category: "Healthcare",
      students: "800+",
      link: "/institutions/medical"
    },
    {
      id: 11,
      name: "RKDF UTD Building",
      image: utd,
      description: "Advanced Dental Sciences",
      established: "2015",
      category: "Healthcare",
      students: "400+",
      link: "/institutions/dental"
    },
    {
      id: 12,
      name: "RKDF Satya Sai College",
      image: satya,
      description: "Business Leadership Excellence",
      established: "2007",
      category: "Business",
      students: "900+",
      link: "/institutions/management"
    },
    {
      id: 13,
      name: "RKDF VIT College",
      image: vit,
      description: "Legal Education & Justice",
      established: "2011",
      category: "Legal Studies",
      students: "550+",
      link: "/institutions/law"
    }
  ];

  // Duplicate institutions for seamless infinite scroll
  const duplicatedInstitutions = [...institutions, ...institutions, ...institutions];

  return (
    <section className="relative min-h-screen bg-white py-6 md:py-8 overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #92400e 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Refined Header */}
        <div className="text-center mb-4 md:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-4 md:mb-4 text-blue-900 tracking-tight px-4">
            Our <span className="font-serif italic text-red-700">Institutions</span>
          </h1>

          <p className="text-base md:text-xl text-stone-700 max-w-2xl mx-auto font-light leading-relaxed px-4">
            A legacy of academic excellence spanning decades, shaping futures across diverse disciplines
          </p>
        </div>

        {/* Continuous Scrolling Carousel */}
        <div 
          className="relative w-full overflow-hidden py-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`flex gap-6 ${isPaused ? 'paused' : ''}`} style={{
            animation: 'scroll 60s linear infinite',
            width: 'max-content'
          }}>
            {duplicatedInstitutions.map((institution, index) => (
              <div
                key={`${institution.id}-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-[340px] lg:w-[380px]"
              >
                <div className="bg-white rounded-sm shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-amber-900/30 hover:scale-105 card-smooth">
                  {/* Premium Border */}
                  <div className="absolute inset-0 border border-amber-900/10 rounded-sm pointer-events-none"></div>

                  {/* Image Section */}
                  <div className="relative h-48 sm:h-60 lg:h-64 overflow-hidden bg-stone-100">
                    <img
                      src={institution.image}
                      alt={institution.name}
                      className="w-full h-full object-contain transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/20 to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 sm:p-5 lg:p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black mb-2 leading-tight">
                          {institution.name}
                        </h3>
                        <div className="w-12 h-[1px] bg-amber-800 mb-3"></div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 lg:gap-6 mb-3 pb-4 border-b border-stone-200">
                      <div>
                        <div className="text-[10px] md:text-xs text-gray-900 tracking-wider uppercase mb-1">
                          Established
                        </div>
                        <div className="text-base md:text-lg text-orange-900 font-light">
                          {institution.established}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] md:text-xs text-gray-900 tracking-wider uppercase mb-1">
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
            ))}
          </div>
        </div>

        {/* Info Text */}
        {/* <div className="text-center mt-8">
          <p className="text-sm text-stone-500 font-light">
            Hover over the carousel to pause • {institutions.length} Institutions
          </p>
        </div> */}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300&family=Montserrat:wght@200;300;400&display=swap');
        
        section {
          font-family: 'Montserrat', sans-serif;
        }
        
        h1 span {
          font-family: 'Cormorant', serif;
        }

        /* Continuous smooth scrolling animation */
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        /* Pause animation on hover */
        .paused {
          animation-play-state: paused !important;
        }

        /* Card smooth hover effect */
        .card-smooth {
          will-change: transform, box-shadow;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translateZ(0);
        }

        /* Smooth rendering */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </section>
  );
};

export default LuxuryInstitutionsCarousel;