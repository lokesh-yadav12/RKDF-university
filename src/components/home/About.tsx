import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import about1 from '../../assets/rkdflogo.png'
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="relative bg-white overflow-hidden">
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

        {/* Image + Text Section */}
        <div ref={ref} className="mt-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-500" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={about1}
                alt="RKDF University Campus"
                className="w-full h-[400px] object-contain transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                Since 1995
              </span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-800 leading-tight">
              A Legacy of
              <span className="text-blue-600"> Excellence</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              In the early 1990s, the RKDF Group identified a critical gap in access
              to quality higher education across Central India. What began as a
              vision soon transformed into a network of institutions across
              Madhya Pradesh.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Since 1995, RKDF has delivered education in Engineering, Pharmacy,
              Management, Nursing, Education, Dental, Homeopathy and more — creating
              opportunities for thousands of students every year.
            </p>

            {/* Stats/Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                <h3 className="text-3xl font-bold text-blue-600">59</h3>
                <p className="text-sm text-gray-600 mt-1">Acres Campus</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                <h3 className="text-3xl font-bold text-blue-600">14,000+</h3>
                <p className="text-sm text-gray-600 mt-1">Students Annually</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Story Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-14 items-center">
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