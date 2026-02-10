import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Achievement = {
  title: string;
  date: string;
  link: string;
};

const achievements: Achievement[] = [
  {
    title: "RKDF University AUAP Certificate",
    date: "2014-06-17",
    link: "/documents/auap-certificate",
  },
  {
    title: "RKDF University Students Achievements",
    date: "2015-03-31",
    link: "/achievements/2015",
  },
  {
    title: "RKDF University Students Achievements",
    date: "2016-02-16",
    link: "/achievements/2016",
  },
  {
    title: "RKDF University Students Achievements",
    date: "2017-02-01",
    link: "/achievements/2017",
  },
  {
    title: "RKDF University Students Achievements",
    date: "2018-08-02",
    link: "/achievements/2018",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function OurAchievements() {
  return (
    <section className="relative overflow-hidden py-16 px-6 bg-white">
      {/* Decorative Glow */}
      {/* <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl" /> */}

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="h-[1px] w-16 bg-blue-600" />
            <span className="text-blue-700 text-sm tracking-[0.35em] uppercase font-light">
              Excellence
            </span>
            <span className="h-[1px] w-16 bg-blue-600" />
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold text-blue-900">
            Our <span className="text-red-700">Achievements</span>
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Celebrating milestones, recognitions, and academic excellence over the years
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/30 via-blue-500/60 to-blue-500/30" />

          <div className="space-y-10 pl-14">
            {achievements.map((ach, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                {/* Dot */}
                <div className="absolute -left-[37px] top-6 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-200 transition-all group-hover:ring-blue-300" />

                {/* Clickable Card */}
                <Link to={ach.link} className="block">
                  <div className="rounded-2xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between p-6 gap-4">
                      <h3 className="text-lg md:text-xl font-medium text-slate-800">
                        {ach.title}
                      </h3>

                      <span className="inline-block px-5 py-2 text-sm font-medium tracking-wide text-blue-700 bg-blue-100 rounded-full">
                        {ach.date}
                      </span>
                    </div>

                    {/* Hover Accent */}
                    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
