import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Amenity = {
  title: string;
  link: string;
};

const amenities: Amenity[] = [
  { title: "Laboratories", link: "/amenities/laboratories" },
  { title: "Agriculture Labs", link: "/amenities/agriculture-labs" },
  { title: "Transport", link: "/amenities/transport" },
  { title: "Canteen", link: "/amenities/canteen" },
  { title: "Library", link: "/amenities/library" },

  { title: "Bank & ATM", link: "/amenities/bank-atm" },
  { title: "Health Care & Medical Center", link: "/amenities/medical" },
  { title: "Security", link: "/amenities/security" },
  { title: "Wi-Fi Campus", link: "/amenities/wifi" },
  { title: "Conference Center", link: "/amenities/conference" },

  { title: "Hostels", link: "/amenities/hostels" },
  { title: "Sports", link: "/amenities/sports" },
  { title: "Stationary & Xerox", link: "/amenities/xerox" },
  { title: "Power Backup", link: "/amenities/power-backup" },
  { title: "Campus Radio", link: "/amenities/radio" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0 },
};

export default function Amenities() {
  return (
    <section className="relative  sm:max-h-screen overflow-hidden bg-white px-6 py-12 sm:py-20">
      {/* Animated Gradient Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-cyan-400/20 animate-pulse" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-400/30 rounded-full blur-[120px]" /> */}

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.4em] uppercase text-cyan-800 mb-4">
            Campus Facilities
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold text-blue-900">
            Our <span className="text-red-700">Amenities</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            Designed to support academic excellence, comfort, and a vibrant campus life
          </p>
        </motion.div>

        {/* Floating Pills */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.08 }}
              className="group"
            >
              <Link
                to={amenity.link}
                className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full
                           bg-white/10 backdrop-blur-xl border border-white/20
                           text-black text-lg font-semibold
                           shadow-lg hover:shadow-cyan-500/30
                           transition-all duration-500 overflow-hidden"
              >
                {/* Left to Right Blue Sweep */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 
                               translate-x-[-100%] group-hover:translate-x-0 
                               transition-transform duration-700 ease-out" />

                {/* Glow Ring */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 blur-lg group-hover:opacity-40 transition-opacity" />

                {/* Dot */}
                <span className="relative z-10 w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:bg-white transition-colors" />

                {/* Text */}
                <span className="relative z-10 tracking-wide group-hover:text-white transition-colors">
                  {amenity.title}
                </span>

                {/* Arrow */}
                <span className="relative z-10 text-cyan-300 group-hover:text-white opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}




// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// type Amenity = {
//   title: string;
//   link: string;
// };

// const amenities: Amenity[] = [
//   { title: "Laboratories", link: "/amenities/laboratories" },
//   { title: "Agriculture Labs", link: "/amenities/agriculture-labs" },
//   { title: "Transport", link: "/amenities/transport" },
//   { title: "Canteen", link: "/amenities/canteen" },
//   { title: "Library", link: "/amenities/library" },

//   { title: "Bank & ATM", link: "/amenities/bank-atm" },
//   { title: "Health Care & Medical Center", link: "/amenities/medical" },
//   { title: "Security", link: "/amenities/security" },
//   { title: "Wi-Fi Campus", link: "/amenities/wifi" },
//   { title: "Conference Center", link: "/amenities/conference" },

//   { title: "Hostels", link: "/amenities/hostels" },
//   { title: "Sports Facilities", link: "/amenities/sports" },
//   { title: "Stationery & Xerox", link: "/amenities/stationery" },
//   { title: "Power Backup", link: "/amenities/power-backup" },
//   { title: "Campus Radio", link: "/amenities/radio" },
// ];

// const container = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.06 },
//   },
// };

// const item = {
//   hidden: { opacity: 0, scale: 0.92, y: 20 },
//   show: { opacity: 1, scale: 1, y: 0 },
// };

// export default function Amenities() {
//   return (
//     <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617] px-6 py-28">
      
//       {/* Ambient Light */}
//       <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[140px]" />
//       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />

//       <div className="relative max-w-7xl mx-auto">
        
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-24"
//         >
//           <p className="text-sm tracking-[0.4em] uppercase text-blue-400 mb-4">
//             Campus Infrastructure
//           </p>
//           <h1 className="text-5xl md:text-6xl font-semibold text-white">
//             World-Class <span className="text-blue-500">Amenities</span>
//           </h1>
//           <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
//             Designed to elevate academic life, comfort, and innovation across campus
//           </p>
//         </motion.div>

//         {/* Floating Tiles */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
//         >
//           {amenities.map((amenity, index) => (
//             <motion.div
//               key={index}
//               variants={item}
//               whileHover={{ y: -10 }}
//               className="group relative"
//             >
//               {/* Animated Border */}
//               <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/40 via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 blur transition-all duration-500" />

//               <Link
//                 to={amenity.link}
//                 className="relative block rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 h-full transition-all duration-500 group-hover:border-blue-500/40"
//               >
//                 {/* Floating Number */}
//                 <div className="absolute top-6 right-6 text-5xl font-bold text-white/5">
//                   {String(index + 1).padStart(2, "0")}
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-2xl font-medium text-white mb-4">
//                   {amenity.title}
//                 </h3>

//                 {/* Divider */}
//                 <div className="w-12 h-[2px] bg-blue-500 mb-6" />

//                 {/* CTA */}
//                 <div className="flex items-center gap-3 text-blue-400 text-sm tracking-widest uppercase">
//                   Explore
//                   <span className="transform transition-transform group-hover:translate-x-2">
//                     →
//                   </span>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
