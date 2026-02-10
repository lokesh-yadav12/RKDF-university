import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// const stats = [
//   { label: "Established", value: "1995" },
//   { label: "Students / Year", value: "14,000+" },
//   { label: "Campuses", value: "4 Cities" },
//   { label: "Campus Area", value: "59 Acres" },
// ];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Decorative Background */}
      {/* <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute top-40 -right-32 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" /> */}

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-extrabold bg-white text-red-700 bg-clip-text ">
            <span className="text-blue-900 font-extrabold">About </span>RKDF University
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Shaping futures through accessible, inclusive, and quality higher education in Central India.
          </p>
        </motion.div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition"
            >
              <h3 className="text-3xl font-bold text-blue-600">{item.value}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </div> */}

        {/* Story Section */}
        <div ref={ref} className="mt-12 grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800">
              Our Journey
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              In the early 1990s, the RKDF Group identified a critical gap in access
              to quality higher education across Central India. What began as a
              vision soon transformed into a network of institutions across
              Madhya Pradesh.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Since 1995, RKDF has delivered education in Engineering, Pharmacy,
              Management, Nursing, Education, Dental, Homeopathy and more — creating
              opportunities for thousands of students every year.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-30" />
            <div className="relative bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-gray-800">
                RKDF University, Bhopal
              </h3>
              <p className="mt-3 text-gray-600">
                Established on 14th February 2012, RKDF University is a multidisciplinary
                institution sponsored by Ayushmati Education and Social Society.
              </p>
              <p className="mt-3 text-gray-600">
                Spread across 59 acres of green campus, the university blends
                academic excellence with sports, innovation, and holistic growth.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Leadership Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="mt-12 bg-blue-300 rounded-3xl p-10 text-black"
        >
          <h2 className="text-3xl font-bold">Leadership & Vision</h2>
          <p className="mt-4 text-black leading-relaxed max-w-4xl">
            Under the leadership of Ex-Vice-Chancellor Prof. V. K. Sethi, along with
            an experienced advisory board and dynamic faculty, RKDF University has
            carved a strong identity in higher education across Madhya Pradesh.
            Students from diverse backgrounds across India form a vibrant academic
            community driven by excellence and inclusivity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
