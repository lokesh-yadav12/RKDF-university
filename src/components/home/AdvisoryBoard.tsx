import React, { useState, useEffect, useRef } from 'react';
import punjab from '../../assets/panjab2.png';
import deepak from '../../assets/deepak1.png';
import gautam from '../../assets/gautam2.png';
import arvind from '../../assets/arvind1.png';
import bd from '../../assets/bd1.png';
import rb from '../../assets/rb1.png';
import salooja from '../../assets/salooja2.png';
import rp from '../../assets/rp1.png';
import vinod from '../../assets/vinod2.png';

const AdvisoryBoard = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

	const advisoryMembers = [
		{
			id: 1,
			name: 'Prof. Panjab Singh',
			title: 'Chancellor',
			organization: 'Central Agriculture University, Jhansi (U.P.)',
			role: 'Chairman of Core Group',
			image: punjab,
		},
		{
			id: 2,
			name: 'Prof. Deepak Pental',
			title: 'Ex. Vice Chancellor, Delhi University',
			organization: 'Delhi University',
			role: 'Member of Core Group',
			image: deepak,
		},
		{
			id: 3,
			name: 'Dr. Gautam Goswami',
			title: 'Director TRIFAC',
			organization: 'TRIFAC',
			role: 'Member of Core Group',
			image: gautam,
		},
		{
			id: 4,
			name: 'Padambhushan Prof. R. B. Singh',
			title: 'Chancellor',
			organization: 'Central Agriculture University Imphal',
			role: 'Member of Core Group',
			image: rb,
		},
		{
			id: 5,
			name: 'Prof. M. K. Salooja',
			title: 'Director',
			organization: 'School of Agriculture, IGNOU, New Delhi',
			role: 'Member of Core Group',
			image: salooja,
		},
		{
			id: 6,
			name: 'Prof. R. P. Singh',
			title: 'Secretary General, IAUA',
			organization: 'Indian Agricultural Universities Association',
			role: 'Member of Core Group',
			image: rp,
		},
		{
			id: 7,
			name: 'Dr. Arvind Kumar',
			title: 'Vice Chancellor',
			organization: 'Central Agriculture University, Jhansi (U.P.)',
			role: 'Member of Core Group',
			image: arvind,
		},
		{
			id: 8,
			name: 'Prof. B. D. Singh',
			title: 'Dean Academic',
			organization: 'Jaipuria Institute of Management',
			role: 'Member of Core Group',
			image: bd,
		},
		{
			id: 9,
			name: 'Dr. Vinod Kumar Sethi',
			title: 'Director General Research (DGR)',
			organization: 'RKDF University, Bhopal',
			role: 'Member of Core Group',
			image: vinod,
		},
	];

	// Auto-rotate carousel
	useEffect(() => {
		if (!isPaused) {
			autoPlayRef.current = setInterval(() => {
				setCurrentIndex((prev) => (prev + 1) % advisoryMembers.length);
			}, 2000);
		}

		return () => {
			if (autoPlayRef.current) {
				clearInterval(autoPlayRef.current);
			}
		};
	}, [isPaused, advisoryMembers.length]);

	const getCardPosition = (index: number) => {
		const total = advisoryMembers.length;
		const diff = (index - currentIndex + total) % total;

		// Center card - largest and focused
		if (diff === 0) {
			return {
				x: 0,
				z: 0,
				scale: 1,
				opacity: 1,
				blur: 0,
				rotate: 0,
				zIndex: 50,
			};
		} 
		// Right side cards
		else if (diff === 1) {
			return {
				x: 380,
				z: -100,
				scale: 0.75,
				opacity: 0.7,
				blur: 1,
				rotate: 8,
				zIndex: 40,
			};
		} 
		else if (diff === 2) {
			return {
				x: 680,
				z: -200,
				scale: 0.55,
				opacity: 0.5,
				blur: 2,
				rotate: 12,
				zIndex: 30,
			};
		}
		else if (diff === 3) {
			return {
				x: 900,
				z: -300,
				scale: 0.4,
				opacity: 0.3,
				blur: 3,
				rotate: 15,
				zIndex: 20,
			};
		}
		// Left side cards
		else if (diff === total - 1) {
			return {
				x: -380,
				z: -100,
				scale: 0.75,
				opacity: 0.7,
				blur: 1,
				rotate: -8,
				zIndex: 40,
			};
		} 
		else if (diff === total - 2) {
			return {
				x: -680,
				z: -200,
				scale: 0.55,
				opacity: 0.5,
				blur: 2,
				rotate: -12,
				zIndex: 30,
			};
		}
		else if (diff === total - 3) {
			return {
				x: -900,
				z: -300,
				scale: 0.4,
				opacity: 0.3,
				blur: 3,
				rotate: -15,
				zIndex: 20,
			};
		}
		// Hidden cards
		else {
			return {
				x: diff < total / 2 ? 1100 : -1100,
				z: -400,
				scale: 0.2,
				opacity: 0,
				blur: 5,
				rotate: diff < total / 2 ? 20 : -20,
				zIndex: 0,
			};
		}
	};

	const goToNext = () => {
		setCurrentIndex((prev) => (prev + 1) % advisoryMembers.length);
	};

	const goToPrev = () => {
		setCurrentIndex((prev) => (prev - 1 + advisoryMembers.length) % advisoryMembers.length);
	};

	return (
		<section className="relative py-10 overflow-hidden bg-white/40">
			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-8">
					<div className="inline-block mb-3">
						<span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-700 text-sm font-semibold backdrop-blur-sm">
							Excellence in Leadership
						</span>
					</div>

					<h2 className="text-5xl md:text-7xl font-bold mb-2 text-gray-800 bg-clip-text">
						Our Advisory Board
					</h2>

					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Distinguished leaders guiding our institution towards excellence
					</p>
				</div>

				{/* 3D Carousel Container */}
				<div
					className="relative h-[550px] flex items-center justify-center perspective-[2000px]"
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
				>
					{/* Cards */}
					<div className="relative w-full h-full flex items-center justify-center preserve-3d">
						{advisoryMembers.map((member, index) => {
							const position = getCardPosition(index);
							const isCenter =
								(index - currentIndex + advisoryMembers.length) % advisoryMembers.length === 0;

							return (
								<div
									key={member.id}
									className="absolute transition-all duration-700 ease-out"
									style={{
										transform: `
                      translateX(${position.x}px) 
                      translateZ(${position.z}px) 
                      scale(${position.scale})
                      rotateY(${position.rotate}deg)
                    `,
										opacity: position.opacity,
										zIndex: position.zIndex,
										filter: `blur(${position.blur}px)`,
									}}
								>
									{/* Card */}
									<div
										className={`w-80 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border ${
											isCenter ? 'border-blue-400/50 shadow-blue-500/50' : 'border-slate-700/50'
										}`}
									>
										{/* Image Section */}
										<div className="relative h-96 overflow-hidden">
											{/* Gradient Overlay */}
											<div
												className={`absolute inset-0 bg-gradient-to-t ${
													isCenter
														? 'from-blue-900/90 via-blue-900/50 to-transparent'
														: 'from-slate-900/90 via-slate-900/50 to-transparent'
												} z-10`}
											></div>

											{/* Image */}
											<img
												src={member.image}
												alt={member.name}
												className={`w-full h-full top-0 object-cover transition-all duration-700 ${
													isCenter ? 'scale-110' : 'scale-100 grayscale'
												}`}
											/>

											{/* Decorative Corner */}
											<div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-lg rotate-45 z-20"></div>
										</div>

										{/* Content Section */}
										<div className="p-3">
											<h3
												className={`text-2xl font-bold mb-2 transition-all duration-300 ${
													isCenter ? 'text-blue-300' : 'text-white'
												}`}
											>
												{member.name}
											</h3>

											<div
												className={`h-1 w-20 rounded-full mb-3 transition-all duration-500 ${
													isCenter
														? 'bg-gradient-to-r from-blue-400 to-cyan-400'
														: 'bg-slate-600'
												}`}
											></div>

											<p className="text-blue-400 font-semibold mb-2 text-sm">{member.title}</p>

											<p className="text-slate-300 text-sm mb-3 leading-relaxed min-h-[3rem]">
												{member.organization}
											</p>

											<div className="pt-2 border-t border-slate-700/50">
												<span className="inline-flex items-center gap-2 text-xs text-slate-400">
													<svg
														className="w-4 h-4 text-blue-400"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
														/>
													</svg>
													{member.role}
												</span>
											</div>
										</div>

										{/* Glow Effect for Center Card */}
										{isCenter && (
											<div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 pointer-events-none"></div>
										)}
									</div>
								</div>
							);
						})}
					</div>

					{/* Navigation Buttons */}
					<button
						onClick={goToPrev}
						className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-50 group"
					>
						<svg
							className="w-6 h-6 group-hover:-translate-x-1 transition-transform"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
					</button>

					<button
						onClick={goToNext}
						className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-50 group"
					>
						<svg
							className="w-6 h-6 group-hover:translate-x-1 transition-transform"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</div>

				{/* Dots Indicator */}
				<div className="flex justify-center gap-2 mt-10">
					{advisoryMembers.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`transition-all duration-300 rounded-full ${
								index === currentIndex
									? 'w-12 h-3 bg-gradient-to-r from-blue-400 to-cyan-400'
									: 'w-3 h-3 bg-slate-600 hover:bg-slate-500'
							}`}
						/>
					))}
				</div>
			</div>

			<style>{`
        .perspective-2000 {
          perspective: 2000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
		</section>
	);
};

export default AdvisoryBoard;