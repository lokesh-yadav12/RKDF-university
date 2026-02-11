import React, { useState } from "react";
import { Link } from "react-router-dom";
import f1 from '../../assets/f1.png'
import f2 from '../../assets/f2.png'
import f3 from '../../assets/f3.png'
import f4 from '../../assets/f4.png'
import f5 from '../../assets/f5.png'
import f6 from '../../assets/f6.png'
import f7 from '../../assets/f7.png'  
import f8 from '../../assets/f8.png'
import f9 from '../../assets/f9.png'
import f10 from '../../assets/f10.png'
import f11 from '../../assets/f11.png'
import f12 from '../../assets/f12.png'
import f13 from '../../assets/f13.png'
import f14 from '../../assets/f14.png'
import f15 from '../../assets/f15.png'
import f16 from '../../assets/f16.png'

const Exploredepartment = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const departments = [
    {
      id: 1,
      title: "Engineering & Technology",
      image: f1,
      size: "regular",
      link: "/faculties/engineering-technology"
    },
    {
      id: 2,
      title: "Homeopathy & Medical Science",
      image: f2,
      size: "regular",
      link: "/faculties/homeopathy-medical-science"
    },
    {
      id: 3,
      title: "Placements",
      image: f3,
      size: "regular",
      link: "/placements"
    },
    {
      id: 4,
      title: "Management",
      image: f4,
      size: "regular",
      link: "/faculties/management"
    },
    {
      id: 5,
      title: "Science",
      image: f5,
      size: "regular",
      link: "/faculties/science"
    },
    {
      id: 6,
      title: "Commerce and Management",
      image: f6,
      size: "regular",
      link: "/faculties/commerce-management"
    },
    {
      id: 7,
      title: "Education",
      image: f7,
      size: "regular",
      link: "/faculties/education"
    },
    {
      id: 8,
      title: "Library & Information Science",
      image: f8,
      size: "regular",
      link: "/faculties/library-information-science"
    },
    {
      id: 9,
      title: "Computer Application",
      image: f9,
      size: "regular",
      link: "/faculties/computer-application"
    },
    {
      id: 10,
      title: "Social Science",
      image: f10,
      size: "regular",
      link: "/faculties/social-science"
    },
    {
      id: 11,
      title: "Agriculture",
      image: f11,
      size: "regular",
      link: "/faculties/agriculture"
    },
    {
      id: 12,
      title: "Architecture",
      image: f12,
      size: "regular",
      link: "/faculties/architecture"
    },
    {
      id: 13,
      title: "Ayurved Courses",
      image: f13,
      size: "regular",
      link: "/faculties/ayurved-courses"
    },
    {
      id: 14,
      title: "Pharmacy",
      image: f14,
      size: "regular",
      link: "/faculties/pharmacy"
    },
    {
      id: 15,
      title: "Law",
      image: f15,
      size: "regular",
      link: "/faculties/law"
    },
    {
      id: 16,
      title: "Nursing",
      image: f16,
      size: "regular",
      link: "/faculties/nursing"
    }
  ];

  const getSizeClasses = (size: string) => {
    switch(size) {
      case "big":
        return "col-span-1 row-span-2 sm:col-span-2 sm:row-span-2";
      case "wide":
        return "col-span-1 sm:col-span-2 row-span-1";
      case "tall":
        return "col-span-1 row-span-2";
      case "regular":
        return "col-span-1 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-12 sm:py-16 px-4 sm:px-10">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(71, 85, 105) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center relative">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-slate-800">
          Explore Our <span className="text-blue-900">Faculties</span>
        </h2>

        <div className="mt-6 flex items-center justify-center">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-slate-300"></div>
          <div className="mx-4 px-5 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm">
            <p className="text-sm font-medium text-slate-600 tracking-wide">Excellence in Education</p>
          </div>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-slate-300"></div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {departments.map((dept, index) => (
            <Link
              key={dept.id}
              to={dept.link}
              className={`relative overflow-hidden rounded-xl group cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${getSizeClasses(dept.size)}`}
              onMouseEnter={() => setHoveredCard(dept.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                height: '280px',
                animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`
              }}
            >
              {/* Image Container */}
              <div className="absolute inset-0 bg-slate-100">
                <img
                  src={dept.image}
                  alt={dept.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Elegant overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/50 to-slate-900/80 transition-all duration-500 group-hover:from-slate-900/20 group-hover:via-slate-900/40 group-hover:to-slate-900/75" />
                
                {/* Subtle shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Minimal corner accent - top left */}
              <div className="absolute top-0 left-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/60 to-transparent"></div>
                <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-white/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-5">
                {/* Top badge - subtle appearance */}
                <div className="flex justify-end">
                  <div className="transform translate-y-[-40px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="backdrop-blur-sm bg-white/10 rounded-full px-3 py-1 border border-white/20">
                      <span className="text-[10px] font-semibold text-white tracking-widest uppercase">Explore</span>
                    </div>
                  </div>
                </div>
                
                {/* Bottom content */}
                <div className="flex items-end justify-between gap-3">
                  {/* Title */}
                  <div className="flex-1">
                    <div className="mb-2 w-10 h-[2px] bg-white/40 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <h3 className="text-white text-lg sm:text-xl font-semibold leading-tight transition-all duration-500 group-hover:translate-y-[-4px]">
                      {dept.title}
                    </h3>
                  </div>

                  {/* Arrow button - refined design */}
                  <div className="relative flex-shrink-0">
                    {/* Circular progress indicator */}
                    <svg
                      className="absolute inset-0 w-11 h-11 -rotate-90 transition-opacity duration-400"
                      style={{ opacity: hoveredCard === dept.id ? 1 : 0 }}
                    >
                      <circle
                        cx="22"
                        cy="22"
                        r="20"
                        fill="none"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeDasharray="125.66"
                        strokeDashoffset="125.66"
                        className={hoveredCard === dept.id ? "animate-drawCircle" : ""}
                        opacity="0.6"
                      />
                    </svg>

                    {/* Button container */}
                    <div className="relative w-11 h-11 rounded-full border border-white/30 flex items-center justify-center transition-all duration-500 group-hover:bg-white/15 group-hover:border-white/50 group-hover:backdrop-blur-sm">
                      {/* Arrow icon */}
                      <svg
                        className="w-4 h-4 text-white transition-all duration-500 group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle outer glow on hover */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/10 via-slate-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes drawCircle {
          to {
            stroke-dashoffset: 0;
          }
        }

        .animate-drawCircle {
          animation: drawCircle 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Exploredepartment;