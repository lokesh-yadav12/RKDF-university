import React, { useState } from "react";
import { Link } from "react-router-dom";

const Exploredepartment = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const departments = [
    {
      id: 1,
      title: "Engineering & Technology",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
      size: "big",
      link: "/faculties/engineering-technology"
    },
    {
      id: 2,
      title: "Homeopathy & Medical Science",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      size: "tall",
      link: "/faculties/homeopathy-medical-science"
    },
    {
      id: 3,
      title: "Placements",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      size: "regular",
      link: "/placements"
    },
    {
      id: 4,
      title: "Management",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop",
      size: "big",
      link: "/faculties/management"
    },
    {
      id: 5,
      title: "Science",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
      size: "regular",
      link: "/faculties/science"
    },
    {
      id: 6,
      title: "Commerce and Management",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      size: "tall",
      link: "/faculties/commerce-management"
    },
    {
      id: 7,
      title: "Education",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      size: "tall",
      link: "/faculties/education"
    },
    {
      id: 8,
      title: "Library & Information Science",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
      size: "tall",
      link: "/faculties/library-information-science"
    },
    {
      id: 9,
      title: "Computer Application",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      size: "big",
      link: "/faculties/computer-application"
    },
    {
      id: 10,
      title: "Social Science",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      size: "regular",
      link: "/faculties/social-science"
    },
    {
      id: 11,
      title: "Agriculture",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
      size: "regtular",
      link: "/faculties/agriculture"
    },
    {
      id: 12,
      title: "Architecture",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
      size: "tall",
      link: "/faculties/architecture"
    },
    {
      id: 13,
      title: "Ayurved Courses",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop",
      size: "big",
      link: "/faculties/ayurved-courses"
    },
    {
      id: 14,
      title: "Pharmacy",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop",
      size: "regular",
      link: "/faculties/pharmacy"
    },
    {
      id: 15,
      title: "Law",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
      size: "regular",
      link: "/faculties/law"
    },
    {
      id: 16,
      title: "Nursing",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop",
      size: "regular",
      link: "/faculties/nursing"
    }
  ];

  const getSizeClasses = (size: string) => {
    switch(size) {
      case "big":
        return "col-span-1 row-span-2 sm:col-span-2 sm:row-span-2"; // Largest - 2x2
      case "wide":
        return "col-span-1 sm:col-span-2 row-span-1"; // Wide - 2x1
      case "tall":
        return "col-span-1 row-span-2"; // Tall - 1x2
      case "regular":
        return "col-span-1 row-span-1"; // Perfect square - 1x1
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <section className="bg-gray-50 py-6 sm:py-10 px-4 sm:px-10 text-center ">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Explore Our <span className="text-red-700">Faculties</span>
        </h2>

        <div className="mt-4 flex items-center justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-blue-300"></div>
            <div className="mx-3 px-6 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-sm">
              <p className="text-sm font-medium text-gray-900 tracking-wide">Excellence in Education</p>
            </div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-blue-300"></div>
          </div>
      </div>

      {/* Grid with varied sizes */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 auto-rows-[220px]">
        {departments.map((dept) => (
          <Link
            key={dept.id}
            to={dept.link}
            className={`relative overflow-hidden rounded-lg group cursor-pointer transition-all duration-700 ${getSizeClasses(dept.size)}`}
            onMouseEnter={() => setHoveredCard(dept.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Image */}
            <img
              src={dept.image}
              alt={dept.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />

            {/* Dark overlay - fades on hover */}
            <div className="absolute inset-0 bg-black/70 transition-all duration-700 group-hover:bg-black/20" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div></div>
              
              <div className="flex items-end justify-between">
                <h3 className="text-white text-2xl font-bold transition-all duration-500 group-hover:translate-y-[-8px]">
                  {dept.title}
                </h3>

                {/* Arrow Button with Circle Animation */}
                <div className="relative flex-shrink-0">
                  {/* Animated Circle Border */}
                  <svg
                    className="absolute inset-0 w-12 h-12 -rotate-90 transition-opacity duration-300"
                    style={{
                      opacity: hoveredCard === dept.id ? 1 : 0
                    }}
                  >
                    <circle
                      cx="24"
                      cy="24"
                      r="22"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="138.23"
                      strokeDashoffset="138.23"
                      className={hoveredCard === dept.id ? "animate-[drawCircle_0.8s_ease-out_forwards]" : ""}
                    />
                  </svg>

                  {/* Button Content */}
                  <div className="relative w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center transition-all duration-500 group-hover:border-white group-hover:bg-white/10 group-hover:scale-110">
                    {/* Arrow Icon */}
                    <svg
                      className={`w-5 h-5 text-white transition-all duration-500 ${
                        hoveredCard === dept.id ? "translate-x-1 opacity-0" : "opacity-100"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>

                    {/* Explore Now Text */}
                    <span
                      className={`absolute whitespace-nowrap text-white text-sm font-semibold transition-all duration-500 ${
                        hoveredCard === dept.id
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-4"
                      }`}
                      style={{ right: "60px" }}
                    >
                      Explore Now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        @keyframes drawCircle {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Exploredepartment;





// import React, { useState, useEffect } from "react";

// const AcademicPrograms = () => {
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: number) => {
//     if (hoveredCard === cardId) {
//       const rect = e.currentTarget.getBoundingClientRect();
//       setMousePosition({
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top,
//       });
//     }
//   };

  // const departments = [
  //   {
  //     id: 1,
  //     title: "Engineering & Technology",
  //     image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
  //     size: "regular",
  //     link: "/faculties/engineering-technology"
  //   },
  //   {
  //     id: 2,
  //     title: "Homeopathy & Medical Science",
  //     image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
  //     size: "regular",
  //     link: "/faculties/homeopathy-medical-science"
  //   },
  //   {
  //     id: 3,
  //     title: "Placements",
  //     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  //     size: "regular",
  //     link: "/placements"
  //   },
  //   {
  //     id: 4,
  //     title: "Management",
  //     image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop",
  //     size: "regular",
  //     link: "/faculties/management"
  //   },
  //   {
  //     id: 5,
  //     title: "Science",
  //     image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
  //     size: "regular",
  //     link: "/faculties/science"
  //   },
  //   {
  //     id: 6,
  //     title: "Commerce and Management",
  //     image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
  //     size: "regular",
  //     link: "/faculties/commerce-management"
  //   },
  //   {
  //     id: 7,
  //     title: "Education",
  //     image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
  //     size: "regular",
  //     link: "/faculties/education"
  //   },
  //   {
  //     id: 8,
  //     title: "Library & Information Science",
  //     image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
  //     size: "regular",
  //     link: "/faculties/library-information-science"
  //   },
  //   {
  //     id: 9,
  //     title: "Computer Application",
  //     image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
  //     size: "regular",
  //     link: "/faculties/computer-application"
  //   },
  //   {
  //     id: 10,
  //     title: "Social Science",
  //     image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
  //     size: "regular",
  //     link: "/faculties/social-science"
  //   },
  //   {
  //     id: 11,
  //     title: "Agriculture",
  //     image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
  //     size: "regular",
  //     link: "/faculties/agriculture"
  //   },
  //   {
  //     id: 12,
  //     title: "Architecture",
  //     image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
  //     size: "regular",
  //     link: "/faculties/architecture"
  //   },
  //   {
  //     id: 13,
  //     title: "Ayurved Courses",
  //     image: "https://images.unsplash.com/photo-1544161513-0179fe746754?w=800&h=600&fit=crop",
  //     size: "regular",
  //     link: "/faculties/ayurved-courses"
  //   },
  //   {
  //     id: 14,
  //     title: "Pharmacy",
  //     image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop",
  //     size: "regular",
  //     link: "/faculties/pharmacy"
  //   },
  //   {
  //     id: 15,
  //     title: "Law",
  //     image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
  //     size: "regular",
  //     link: "/faculties/law"
  //   },
  //   {
  //     id: 16,
  //     title: "Nursing",
  //     image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop",
  //     size: "regular",
  //     link: "/faculties/nursing"
  //   }
  // ];

//   return (
//     <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 sm:py-20 px-4 sm:px-10 overflow-hidden">
//       {/* Elegant Background Pattern */}
//       <div className="absolute inset-0 opacity-[0.03]">
//         <div 
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `radial-gradient(circle at 2px 2px, rgb(30, 58, 138) 1px, transparent 0)`,
//             backgroundSize: '40px 40px',
//             transform: `translateY(${scrollY * 0.3}px)`
//           }}
//         />
//       </div>

//       {/* Floating Gradient Orbs */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-48 -left-48 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-3xl animate-float-slow"></div>
//         <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-300/30 rounded-full blur-3xl animate-float-delayed"></div>
//         <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-200/20 to-blue-300/20 rounded-full blur-3xl animate-pulse-gentle"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Enhanced Header */}
//         <div className="mb-16 text-center relative">
//           {/* Decorative Lines */}
//           <div className="flex items-center justify-center mb-6">
//             <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-blue-600"></div>
//             <div className="mx-4 w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
//             <div className="h-px w-16 bg-gradient-to-l from-transparent via-blue-400 to-blue-600"></div>
//           </div>

//           {/* Title with Elegant Animation */}
//           <div className="relative inline-block">
//             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 relative">
//               <span className="relative inline-block">
//                 Our
//                 <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
//               </span>
//               {' '}
//               <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-indigo-900 animate-gradient-shift">
//                 Faculties
//                 <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-full"></div>
//               </span>
//             </h2>
            
//             {/* Subtle Glow Effect */}
//             <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 blur-2xl -z-10 animate-pulse-gentle"></div>
//           </div>

//           {/* Subtitle Line */}
          // <div className="mt-8 flex items-center justify-center">
          //   <div className="h-px w-24 bg-gradient-to-r from-transparent to-blue-300"></div>
          //   <div className="mx-3 px-6 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-sm">
          //     <p className="text-sm font-medium text-gray-900 tracking-wide">Excellence in Education</p>
          //   </div>
          //   <div className="h-px w-24 bg-gradient-to-l from-transparent to-blue-300"></div>
          // </div>
//         </div>

//         {/* Premium Grid with Stagger Animation */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {departments.map((dept, index) => (
//             <a
//               key={dept.id}
//               href={dept.link}
//               className="group relative overflow-hidden rounded-2xl cursor-pointer h-72 transform transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02] block"
//               onMouseEnter={() => setHoveredCard(dept.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//               onMouseMove={(e) => handleCardMouseMove(e, dept.id)}
//               style={{
//                 animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`,
//               }}
//             >
//               {/* Premium Glass Border */}
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-white/10 to-transparent p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl"></div>
//               </div>

//               {/* Card Container */}
//               <div className="relative h-full rounded-2xl overflow-hidden bg-white shadow-lg group-hover:shadow-2xl transition-all duration-700">
//                 {/* Image Container with Parallax */}
//                 <div className="absolute inset-0 overflow-hidden">
//                   <img
//                     src={dept.image}
//                     alt={dept.title}
//                     className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 group-hover:rotate-2"
//                     style={{
//                       transform: hoveredCard === dept.id 
//                         ? `scale(1.25) rotate(2deg) translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
//                         : 'scale(1)'
//                     }}
//                   />
                  
//                   {/* Premium Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 transition-all duration-700 group-hover:from-black/20 group-hover:via-black/30 group-hover:to-black/70" />
                  
//                   {/* Dynamic Light Effect */}
//                   <div 
//                     className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
//                     style={{
//                       background: hoveredCard === dept.id 
//                         ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 40%)`
//                         : 'none'
//                     }}
//                   />
//                 </div>

//                 {/* Animated Corner Accents */}
//                 <div className="absolute top-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-all duration-700">
//                   <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-white to-transparent"></div>
//                   <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-white to-transparent"></div>
//                 </div>
//                 <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-all duration-700">
//                   <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-white to-transparent"></div>
//                   <div className="absolute bottom-0 right-0 h-full w-0.5 bg-gradient-to-t from-white to-transparent"></div>
//                 </div>

//                 {/* Content Container */}
//                 <div className="absolute inset-0 flex flex-col justify-between p-6">
//                   {/* Top Badge - Appears on Hover */}
//                   <div className="flex justify-end">
//                     <div className="transform translate-y-[-100px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
//                       <div className="backdrop-blur-md bg-white/20 rounded-full px-4 py-1.5 border border-white/30 shadow-lg">
//                         <span className="text-xs font-semibold text-white tracking-wider">EXPLORE</span>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Bottom Content */}
//                   <div className="flex items-end justify-between gap-4">
//                     {/* Title with Enhanced Animation */}
//                     <div className="flex-1">
//                       <div className="mb-2 w-12 h-0.5 bg-gradient-to-r from-white to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
//                       <h3 className="text-white text-xl lg:text-2xl font-bold leading-tight transform transition-all duration-700 group-hover:translate-y-[-8px] group-hover:tracking-wide drop-shadow-lg">
//                         {dept.title}
//                       </h3>
                      
//                       {/* Subtitle appears on hover */}
//                       <p className="text-white/80 text-sm mt-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-200">
//                         Discover programs
//                       </p>
//                     </div>

//                     {/* Premium Arrow Button */}
//                     <div className="relative flex-shrink-0">
//                       {/* Animated Circle Progress */}
//                       <svg
//                         className="absolute inset-0 w-14 h-14 -rotate-90 transition-opacity duration-500"
//                         style={{
//                           opacity: hoveredCard === dept.id ? 1 : 0
//                         }}
//                       >
//                         <circle
//                           cx="28"
//                           cy="28"
//                           r="26"
//                           fill="none"
//                           stroke="white"
//                           strokeWidth="2"
//                           strokeDasharray="163.36"
//                           strokeDashoffset="163.36"
//                           className={hoveredCard === dept.id ? "animate-drawCircle" : ""}
//                           style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))' }}
//                         />
//                       </svg>

//                       {/* Button Container */}
//                       <div className="relative w-14 h-14 rounded-full backdrop-blur-md bg-white/10 border-2 border-white/30 flex items-center justify-center transition-all duration-700 group-hover:bg-white group-hover:border-white group-hover:scale-110 group-hover:rotate-90 shadow-lg">
//                         {/* Arrow Icon */}
//                         <svg
//                           className="w-6 h-6 text-white transition-all duration-700 group-hover:text-blue-900"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           strokeWidth={2.5}
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M13 7l5 5m0 0l-5 5m5-5H6"
//                           />
//                         </svg>

//                         {/* Ripple Effect */}
//                         <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
//                       </div>

//                       {/* "Explore Now" Text */}
//                       {/* <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-700 delay-150">
//                         <div className="backdrop-blur-md bg-white/90 rounded-lg px-4 py-2 shadow-xl border border-white/50">
//                           <span className="text-sm font-bold text-blue-900 whitespace-nowrap tracking-wide">
//                             Explore Now
//                           </span>
//                         </div>
//                       </div> */}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Shine Effect on Hover */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
//                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
//                 </div>

//                 {/* Floating Particles */}
//                 {hoveredCard === dept.id && (
//                   <>
//                     {[...Array(6)].map((_, i) => (
//                       <div
//                         key={i}
//                         className="absolute w-1 h-1 bg-white/60 rounded-full animate-float-particle"
//                         style={{
//                           top: `${20 + i * 12}%`,
//                           right: `${15 + i * 8}%`,
//                           animationDelay: `${i * 0.15}s`,
//                           animationDuration: `${2 + i * 0.3}s`
//                         }}
//                       />
//                     ))}
//                   </>
//                 )}
//               </div>

//               {/* External Glow on Hover */}
//               <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
//             </a>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes float-slow {
//           0%, 100% { transform: translate(0, 0) rotate(0deg); }
//           33% { transform: translate(20px, -20px) rotate(5deg); }
//           66% { transform: translate(-20px, 20px) rotate(-5deg); }
//         }

//         @keyframes float-delayed {
//           0%, 100% { transform: translate(0, 0) rotate(0deg); }
//           33% { transform: translate(-30px, 30px) rotate(-3deg); }
//           66% { transform: translate(30px, -30px) rotate(3deg); }
//         }

//         @keyframes pulse-gentle {
//           0%, 100% { opacity: 0.2; transform: scale(1); }
//           50% { opacity: 0.3; transform: scale(1.05); }
//         }

//         @keyframes gradient-shift {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         @keyframes drawCircle {
//           to {
//             stroke-dashoffset: 0;
//           }
//         }

//         @keyframes float-particle {
//           0%, 100% { 
//             transform: translateY(0) translateX(0); 
//             opacity: 0.6;
//           }
//           50% { 
//             transform: translateY(-25px) translateX(10px); 
//             opacity: 1;
//           }
//         }

//         .animate-float-slow {
//           animation: float-slow 12s ease-in-out infinite;
//         }

//         .animate-float-delayed {
//           animation: float-delayed 15s ease-in-out infinite;
//         }

//         .animate-pulse-gentle {
//           animation: pulse-gentle 6s ease-in-out infinite;
//         }

//         .animate-gradient-shift {
//           background-size: 200% auto;
//           animation: gradient-shift 4s ease infinite;
//         }

//         .animate-drawCircle {
//           animation: drawCircle 1s ease-out forwards;
//         }

//         .animate-float-particle {
//           animation: float-particle ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default AcademicPrograms;