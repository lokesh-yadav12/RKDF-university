import React, { useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {  ArrowLeftIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
// import LeadershipSection from '@/components/home/LeadershipSection';
// import CarouselSection from '@/components/home/CarouselSection';
// import LeadershipKKECT from '../components/home/LeadershipKKCET';

// Import images
import mottoImage from '@/assets/motto.png';
import visionImage from '@/assets/vision.jpeg';
import missionImage from '@/assets/mission.png';

// interface SectionProps {
//   id: string;
//   title: string;
//   children: React.ReactNode;
//   icon: React.ElementType;
// }

// const Section = React.forwardRef<HTMLDivElement, SectionProps>(({ id, title, children, icon: Icon }, ref) => {
//   const controls = useAnimation();
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

//   useEffect(() => {
//     if (isInView) {
//       controls.start('visible');
//     }
//   }, [controls, isInView]);

//   return (
//     <motion.div
//       id={id}
//       className="py-16 bg-white scroll-mt-20"
//       ref={sectionRef}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         hidden: { opacity: 0, y: 50 },
//         visible: {
//           opacity: 1,
//           y: 0,
//           transition: { duration: 0.6, ease: 'easeOut' }
//         }
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.2, duration: 0.6 }}
//         >
//           <motion.div
//             className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-700 mb-6"
//             initial={{ scale: 0.5, opacity: 0 }}
//             animate={isInView ? { scale: 1, opacity: 1 } : {}}
//             transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
//           >
//             <Icon className="h-8 w-8" />
//           </motion.div>
//           <motion.h2
//             className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
//             initial={{ y: 20, opacity: 0 }}
//             animate={isInView ? { y: 0, opacity: 1 } : {}}
//             transition={{ delay: 0.4, duration: 0.5 }}
//           >
//             {title}
//           </motion.h2>
//           <motion.div
//             className="mt-6 text-lg text-gray-600 space-y-6 max-w-3xl mx-auto"
//             initial={{ y: 20, opacity: 0 }}
//             animate={isInView ? { y: 0, opacity: 1 } : {}}
//             transition={{ delay: 0.5, duration: 0.5 }}
//           >
//             {children}
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// });

const Legacy: React.FC = () => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const sectionRefs = {
		motto: useRef<HTMLDivElement>(null),
		vision: useRef<HTMLDivElement>(null),
		mission: useRef<HTMLDivElement>(null),
		kkcet: useRef<HTMLDivElement>(null),
		team: useRef<HTMLDivElement>(null),
	};

	useEffect(() => {
		const section = searchParams.get('section');
		if (section && sectionRefs[section as keyof typeof sectionRefs]?.current) {
			sectionRefs[section as keyof typeof sectionRefs].current?.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	}, [searchParams, sectionRefs]);

	return (
		<div className="bg-white">
			{/* <motion.div
				className="relative bg-primary-700 py-16 overflow-hidden h-[50vh] "
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<button
						onClick={() => navigate('/')}
						className="flex items-center text-white hover:text-primary-100 mb-8 transition-colors duration-200"
					>
						<ArrowLeftIcon className="h-5 w-5 mr-2" />
						Back to Home
					</button>
				</div>
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-r from-[#7b1113] to-[#a91b1e] opacity-90"></div>

					<div
						className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
						style={{ backgroundImage: `url(${m3})` }}
					></div>
				</div>
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
						Our Legacy
					</h1>
					<p className="mt-6 text-xl text-primary-100 max-w-3xl mx-auto">
						A Tradition of Excellence in Education Since 2006
					</p>
				</div>
			</motion.div> */}

			<motion.section
				id="motto"
				ref={sectionRefs.motto}
				className="py-24 overflow-hidden"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
				viewport={{ once: true, amount: 0.2 }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="relative min-h-[500px]">
						<div className="hidden md:flex w-3/2 absolute left-0 top-0 bottom-0 items-center justify-end z-10 ">
							<img
								src={mottoImage}
								alt="Student in uniform"
								className="h-64 lg:h-80 object-contain mr-4 hover:scale-105 transition-all duration-300 rounded-xl bg-white"
							/>
						</div>

						<div className="w-full md:w-[70%] md:ml-[30%] bg-gradient-to-br from-blue-700 to-red-200 text-white shadow-xl pt-12 pb-12 px-6 sm:px-8 min-h-[350px] hover:shadow-2xl transition-all duration-300  rounded-xl">
							<div className="md:ml-[25%]">
								<h2 className="text-4xl md:text-5xl font-bold mb-6">OUR MOTTO</h2>

								<h3 className="text-2xl font-semibold mb-8">नहि ज्ञानेन सदृश्यं</h3>

								<p className="mb-12 text-lg leading-relaxed">
									Taken from the Bhagavad Gita, this phrase emphasizes the supreme value and purity of
									Knowledge — the guiding light that shapes intellect and wisdom.
								</p>

								<p className="mb-6 text-lg leading-relaxed">
									At RKDF, we believe that true education transcends books and classrooms. It is
									the pursuit of understanding, character, and purpose — empowering every learner to
									illuminate the world through the strength of knowledge.
								</p>
							</div>
						</div>
					</div>
				</div>
			</motion.section>

			<motion.section
				className="bg-gray-50 py-24 overflow-hidden"
				id="vision"
				ref={sectionRefs.vision}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
				viewport={{ once: true, amount: 0.2 }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="relative min-h-[500px]">
						<div className="hidden md:flex w-3/2 absolute right-0 top-0 bottom-0 items-center justify-start z-10 hover:scale-105 transition-all duration-300">
							<img
								src="https://www.gvnml.org/wp-content/uploads/2020/12/vission.png"
								alt="Vision"
								className="h-64 lg:h-[440px] w-[440px] object-contain ml-4 rounded-xl  bg-white"
							/>
						</div>

						<div className="w-full md:w-[70%] bg-gradient-to-br from-blue-700 to-red-200 text-white rounded-xl shadow-xl pt-12 pb-12 px-6 sm:px-8 min-h-[350px] hover:shadow-2xl transition-all duration-300">
							<div className="md:mr-[25%]">
								<h2 className="text-4xl md:text-5xl font-bold mb-6">OUR VISION</h2>
								<h3 className="text-2xl font-semibold mb-8">Empowering Students to Change the World</h3>

								<p className="mb-6 text-lg leading-relaxed">
									Empowering every learner to reach their full potential and make a positive, lasting
									contribution to society.
								</p>

								<p className="mb-6 text-lg leading-relaxed">
									We aim to create a generation of compassionate, confident, and forward-thinking
									individuals who will lead with wisdom and purpose.
								</p>

								<p className="mb-6 text-lg leading-relaxed">
									We strive to inspire curiosity, compassion, and courage — shaping learners who will
									lead with purpose and integrity.
								</p>
							</div>
						</div>
					</div>
				</div>
			</motion.section>

			<motion.section
				className="py-24 overflow-hidden"
				id="mission"
				ref={sectionRefs.mission}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
				viewport={{ once: true, amount: 0.2 }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="relative min-h-[500px]">
						<div className="hidden md:flex w-3/2 absolute top-0 bottom-0 items-center justify-end z-10">
							<img
								src="https://renaissanceacademytilhar.com/img/mission.jpg"
								alt="Mission"
								className="h-64 lg:h-[450px] w-[500px] bg-white  eobject-contain mr-4 rounded-xl  hover:scale-105 transition-all duration-300"
							/>
						</div>

						<div className="w-full md:w-[70%] md:ml-[30%] bg-gradient-to-br from-blue-700 to-red-200 text-white shadow-xl pt-12 pb-12 px-6 sm:px-8 min-h-[350px] hover:shadow-2xl transition-all duration-300">
							<div className="md:ml-[25%]">
								<h2 className="text-4xl md:text-5xl font-bold mb-6">OUR MISSION</h2>
								<h3 className="text-2xl font-semibold mb-8">Multi-Dimensional Growth</h3>

								<p className="mb-6 text-lg leading-relaxed">
									At RKDF, we believe in the multi-dimensional growth of our students. We achieve
									this with a blend of classroom training, co-curricular activities, and by letting
									innovative minds create their own horizons.
								</p>

								<p className="mb-6 text-lg leading-relaxed">
									Our mission is to foster curiosity, confidence, and creativity — preparing every
									learner to think critically, act responsibly, and shape a brighter future for
									themselves and society.
								</p>
							</div>
						</div>
					</div>
				</div>
			</motion.section>

			{/* <motion.section
				className="bg-gray-50 py-24 overflow-hidden"
				id="kkcet"
				ref={sectionRefs.kkcet}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
				viewport={{ once: true, amount: 0.2 }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="relative min-h-[500px]">
						<LeadershipSection />
					</div>
				</div>
			</motion.section> */}

			{/* <motion.section
				className="py-24 overflow-hidden"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
				viewport={{ once: true, amount: 0.2 }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="relative min-h-[500px]">
						<CarouselSection />
					</div>
				</div>
			</motion.section> */}
		</div>
	);
};

export default Legacy;
