import React, { useState, useEffect } from 'react';
import { ExternalLink, Bell, Sparkles, Award, Calendar, BookOpen, TrendingUp, ChevronRight, Star } from 'lucide-react';

interface Announcement {
	id: number;
	title: string;
	link: string;
	icon: React.ReactNode;
	color: string;
	gradient: string;
}

const announcements: Announcement[] = [
	{
		id: 1,
		title: "Celebrating Women's Day, Celebrations - Times of India (TOI) - 06-March-2023",
		link: '/news/womens-day-celebration',
		icon: <Award className="w-5 h-5" />,
		color: 'from-blue-500 to-red-200',
		gradient: 'bg-gradient-to-br from-blue-50 to-red-50',
	},
];

const quickLinks = [
	{
		id: 1,
		title: 'RKDF University - Convocation-2023 on 25-April-2023',
		link: '/convocation-2023',
		icon: <Calendar className="w-5 h-5" />,
		color: 'from-blue-500 to-blue-600',
		gradient: 'bg-gradient-to-br from-blue-50 to-blue-50',
	},
	{
		id: 2,
		title: 'Value Added Course',
		link: '/value-added-courses',
		icon: <BookOpen className="w-5 h-5" />,
		color: 'from-emerald-500 to-teal-600',
		gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50',
	},
	{
		id: 3,
		title: 'Online Admission Form 2023-24',
		link: '/admission-form',
		icon: <TrendingUp className="w-5 h-5" />,
		color: 'from-orange-500 to-red-600',
		gradient: 'bg-gradient-to-br from-orange-50 to-red-50',
	},
];

export default function AnnouncementsSection() {
	const [hoveredId, setHoveredId] = useState<number | null>(null);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		setMousePosition({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		});
	};

	return (
		<section className="relative py-12 overflow-hidden ">
			{/* Sophisticated Mesh Gradient Background */}

			{/* Animated Grid Pattern */}
			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
					backgroundSize: '50px 50px',
					transform: `translateY(${scrollY * 0.5}px)`,
				}}
			></div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Premium Header */}
				<div className="text-center mb-8">
					{/* Admission Badge - Now a clickable link with enhanced highlighting */}
					<a
						href="/admission-form"
						className="inline-flex items-center space-x-3 text-black px-8 py-4 rounded-2xl mb-8 shadow-2xl hover:shadow-blue-400/50 transition-all duration-500 hover:scale-105 group relative overflow-hidden cursor-pointer ring-4 ring-red-500/30 hover:ring-blue-400/60 hover:ring-3"
						onMouseEnter={() => setHoveredId(999)}
						onMouseLeave={() => setHoveredId(null)}
					>
						{/* Animated shine effect */}
						<div className="absolute inset-0 bg-blue-400 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

						{/* Pulsing background glow */}
						{/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20 animate-pulse-slow"></div>
						 */}
						<Bell className="w-6 h-6 animate-swing relative z-10 group-hover:text-white transition-colors duration-300" />
						<span className="font-bold text-lg tracking-wide relative z-10 underline decoration-2 underline-offset-4 group-hover:text-blue-600 transition-colors duration-300">
							Online Admission Form - 2023-24
						</span>
						<Star className="w-5 h-5 animate-spin-slow relative z-10 group-hover:text-blue-600 transition-colors duration-300" />
						<ExternalLink
							className={`w-5 h-5 relative z-10 transition-all duration-300 group-hover:text-blue-400 ${hoveredId === 999 ? 'translate-x-1 -translate-y-1' : ''}`}
						/>

						{/* Click indicator */}
						{/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></div> */}
					</a>

					<div className="flex items-center justify-center space-x-3">
						<div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
						<Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
						<p className="text-lg text-gray-700 font-light">
							Stay informed with the latest news from RKDF University
						</p>
						<Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
						<div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500"></div>
					</div>
				</div>

				{/* Featured Announcement - Glassmorphism Style */}
				<div className="mb-6">
					{announcements.map((announcement) => (
						<a
							key={announcement.id}
							href={announcement.link}
							className="block group"
							onMouseEnter={() => setHoveredId(announcement.id)}
							onMouseLeave={() => setHoveredId(null)}
						>
							<div
								className="relative backdrop-blur-xl bg-black/5 rounded-3xl p-4 shadow-2xl border border-red-300 hover:border-blue-600/50 transition-all duration-700 overflow-hidden hover:shadow-blue-600/20 hover:shadow-[0_0_50px_rgba(236,72,153,0.3)]"
								onMouseMove={handleMouseMove}
							>
								{/* Dynamic Gradient Follow */}
								<div
									className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
									style={{
										background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236,72,153,0.1), transparent 40%)`,
									}}
								></div>

								{/* Glass Reflection */}
								{/* <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
								 */}
								<div className="relative z-10 flex items-start space-x-8">
									<div className="flex-1">
										<div className="inline-flex items-center space-x-2 mb-1">
											{/* <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div> */}
											<span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
												Featured
											</span>
										</div>

										<h3 className="text-xl md:text-2xl  text-black mb-4 group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-700  transition-all duration-500">
											{announcement.title}
										</h3>

										<div className="inline-flex items-center space-x-3 px-3 py-1 bg-gradient-to-r from-red-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl border border-blue-500/30  transition-all duration-500 group-hover:shadow-lg group-hover:shadow-blue-500/20">
											<span className="text-gray-600 font-semibold">Read More</span>
											<ChevronRight
												className={`w-5 h-5 text-gray-400 transition-transform duration-500 ${hoveredId === announcement.id ? 'translate-x-2' : ''}`}
											/>
										</div>
									</div>
								</div>

								{/* Floating Particles */}
								{[...Array(5)].map((_, i) => (
									<div
										key={i}
										className="absolute w-1 h-1 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
										style={{
											top: `${20 + i * 15}%`,
											right: `${10 + i * 5}%`,
											animation: `float-particle ${3 + i * 0.5}s ease-in-out infinite`,
											animationDelay: `${i * 0.2}s`,
										}}
									></div>
								))}
							</div>
						</a>
					))}
				</div>

				{/* Quick Links - Bento Grid Style */}
				<div className="grid md:grid-cols-3 gap-6">
					{quickLinks.map((link, index) => (
						<a
							key={link.id}
							href={link.link}
							className="block group"
							onMouseEnter={() => setHoveredId(link.id + 100)}
							onMouseLeave={() => setHoveredId(null)}
							style={{
								animation: `fade-in-up 0.8s ease-out forwards`,
								animationDelay: `${index * 150}ms`,
								opacity: 0,
							}}
						>
							<div className="relative h-full backdrop-blur-xl bg-black/5 rounded-2xl p-3 shadow-xl border border-black/10 hover:border-blue-500/50 transition-all duration-700 overflow-hidden group-hover:shadow-2xl group-hover:shadow-blue-500/20 transform hover:-translate-y-3 hover:scale-[1.02]">
								{/* Animated Background Gradient */}
								<div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-100/0 to-blue-100/0 group-hover:from-blue-500/10 group-hover:via-blue-500/10 group-hover:to-blue-100/10 transition-all duration-700"></div>

								{/* Top Border Animation */}
								<div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-500 group-hover:w-full transition-all duration-700"></div>

								{/* Corner Accent */}
								<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-50 to-transparent rounded-bl-3xl"></div>

								<div className="relative z-10">
									{/* Icon with Depth */}
									<div className="relative mb-2 inline-block">
										<div
											className={`absolute inset-0 bg-gradient-to-br ${link.color} rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
										></div>
										{/* <div className={`relative w-16 h-16 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center text-black shadow-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 border border-black/20`}>
                      {link.icon}
                    </div> */}
									</div>

									<h3 className="text-xl font-bold text-black mb-2 min-h-[3.5rem]  group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-200 transition-all duration-500">
										{link.title}
									</h3>

									<div className="flex items-center space-x-2 text-blue-400 font-semibold group-hover:text-blue-600 transition-colors duration-300">
										<span className="text-sm">Explore</span>
										<ExternalLink
											className={`w-4 h-4 transition-transform duration-500 ${hoveredId === link.id + 100 ? 'translate-x-2 -translate-y-1 rotate-12' : ''}`}
										/>
									</div>
								</div>

								{/* Bottom Glow */}
								<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							</div>
						</a>
					))}
				</div>

				{/* Status Indicator - Neumorphic Style */}
				<div className="mt-12 flex justify-center">
					<div className="inline-flex items-center space-x-4 backdrop-blur-xl bg-black/10 rounded-full px-10 py-5 shadow-2xl border border-black/20">
						<div className="relative">
							<div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
							<div className="absolute inset-0 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
						</div>
						<span className="text-black font-semibold tracking-wide">All Systems Operational</span>
						<div className="relative">
							<div
								className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"
								style={{ animationDelay: '1s' }}
							></div>
							<div
								className="absolute inset-0 w-3 h-3 bg-blue-500 rounded-full animate-ping"
								style={{ animationDelay: '1s' }}
							></div>
						</div>
					</div>
				</div>
			</div>

			<style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 40px) scale(1.15); }
          66% { transform: translate(40px, -40px) scale(0.85); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }

        @keyframes swing {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          75% { transform: rotate(-15deg); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float-particle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-swing {
          animation: swing 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
		</section>
	);
}






// import React, { useState, useEffect } from 'react';
// import { ExternalLink, Bell, Sparkles, Award, Calendar, BookOpen, TrendingUp, ChevronRight, Star } from 'lucide-react';

// interface Announcement {
// 	id: number;
// 	title: string;
// 	link: string;
// 	icon: React.ReactNode;
// 	color: string;
// 	gradient: string;
// }

// const announcements: Announcement[] = [
// 	{
// 		id: 1,
// 		title: "Celebrating Women's Day, Celebrations - Times of India (TOI) - 06-March-2023",
// 		link: '/news/womens-day-celebration',
// 		icon: <Award className="w-5 h-5" />,
// 		color: 'from-blue-500 to-red-200',
// 		gradient: 'bg-gradient-to-br from-blue-50 to-red-50',
// 	},
// ];

// const quickLinks = [
// 	{
// 		id: 1,
// 		title: 'RKDF University - Convocation-2023 on 25-April-2023',
// 		link: '/convocation-2023',
// 		icon: <Calendar className="w-5 h-5" />,
// 		color: 'from-blue-500 to-indigo-600',
// 		gradient: 'bg-gradient-to-br from-blue-50 to-indigo-50',
// 	},
// 	{
// 		id: 2,
// 		title: 'Value Added Course',
// 		link: '/value-added-courses',
// 		icon: <BookOpen className="w-5 h-5" />,
// 		color: 'from-emerald-500 to-teal-600',
// 		gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50',
// 	},
// 	{
// 		id: 3,
// 		title: 'Online Admission Form 2023-24',
// 		link: '/admission-form',
// 		icon: <TrendingUp className="w-5 h-5" />,
// 		color: 'from-orange-500 to-red-600',
// 		gradient: 'bg-gradient-to-br from-orange-50 to-red-50',
// 	},
// ];

// export default function AnnouncementsSection() {
// 	const [hoveredId, setHoveredId] = useState<number | null>(null);
// 	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// 	const [scrollY, setScrollY] = useState(0);

// 	useEffect(() => {
// 		const handleScroll = () => setScrollY(window.scrollY);
// 		window.addEventListener('scroll', handleScroll);
// 		return () => window.removeEventListener('scroll', handleScroll);
// 	}, []);

// 	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
// 		const rect = e.currentTarget.getBoundingClientRect();
// 		setMousePosition({
// 			x: e.clientX - rect.left,
// 			y: e.clientY - rect.top,
// 		});
// 	};

// 	return (
// 		<section className="relative py-12 overflow-hidden ">
// 			{/* Sophisticated Mesh Gradient Background */}

// 			{/* Animated Grid Pattern */}
// 			<div
// 				className="absolute inset-0 opacity-[0.03]"
// 				style={{
// 					backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
//                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
// 					backgroundSize: '50px 50px',
// 					transform: `translateY(${scrollY * 0.5}px)`,
// 				}}
// 			></div>

// 			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// 				{/* Premium Header */}
// 				<div className="text-center mb-8">
// 					{/* Admission Badge - Now a clickable link with enhanced highlighting */}
// 					<a
// 						href="/admission-form"
// 						className="inline-flex items-center space-x-3  text-black px-8 py-4 rounded-2xl mb-8 shadow-2xl hover:shadow-red-400/50 transition-all duration-500 hover:scale-105 group relative overflow-hidden cursor-pointer ring-4 ring-red-500/30 hover:ring-blue-400/60 hover:ring-3"
// 						onMouseEnter={() => setHoveredId(999)}
// 						onMouseLeave={() => setHoveredId(null)}
// 					>
// 						{/* Animated shine effect */}
// 						<div className="absolute inset-0 bg-red-600 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

// 						{/* Pulsing background glow */}
// 						{/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20 animate-pulse-slow"></div>
// 						 */}
// 						<Bell className="w-6 h-6 animate-swing relative z-10" />
// 						<span className="font-bold text-lg tracking-wide relative z-10 underline decoration-2 underline-offset-4">
// 							Online Admission Form - 2023-24
// 						</span>
// 						<Star className="w-5 h-5 animate-spin-slow relative z-10" />
// 						<ExternalLink
// 							className={`w-5 h-5 relative z-10 transition-transform duration-300 ${hoveredId === 999 ? 'translate-x-1 -translate-y-1' : ''}`}
// 						/>

// 						{/* Click indicator */}
// 						{/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
//             <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></div> */}
// 					</a>

// 					<div className="flex items-center justify-center space-x-3">
// 						<div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500"></div>
// 						<Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
// 						<p className="text-lg text-gray-700 font-light">
// 							Stay informed with the latest news from RKDF University
// 						</p>
// 						<Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
// 						<div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500"></div>
// 					</div>
// 				</div>

// 				{/* Featured Announcement - Glassmorphism Style */}
// 				<div className="mb-6">
// 					{announcements.map((announcement) => (
// 						<a
// 							key={announcement.id}
// 							href={announcement.link}
// 							className="block group"
// 							onMouseEnter={() => setHoveredId(announcement.id)}
// 							onMouseLeave={() => setHoveredId(null)}
// 						>
// 							<div
// 								className="relative backdrop-blur-xl bg-black/5 rounded-3xl p-4 shadow-2xl border border-red-300 hover:border-blue-600/50 transition-all duration-700 overflow-hidden hover:shadow-blue-600/20 hover:shadow-[0_0_50px_rgba(236,72,153,0.3)]"
// 								onMouseMove={handleMouseMove}
// 							>
// 								{/* Dynamic Gradient Follow */}
// 								<div
// 									className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
// 									style={{
// 										background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236,72,153,0.1), transparent 40%)`,
// 									}}
// 								></div>

// 								{/* Glass Reflection */}
// 								{/* <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
// 								 */}
// 								<div className="relative z-10 flex items-start space-x-8">
// 									<div className="flex-1">
// 										<div className="inline-flex items-center space-x-2 mb-1">
// 											{/* <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div> */}
// 											<span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
// 												Featured
// 											</span>
// 										</div>

// 										<h3 className="text-xl md:text-2xl  text-black mb-4 group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-700  transition-all duration-500">
// 											{announcement.title}
// 										</h3>

// 										<div className="inline-flex items-center space-x-3 px-3 py-1 bg-gradient-to-r from-red-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl border border-blue-500/30  transition-all duration-500 group-hover:shadow-lg group-hover:shadow-blue-500/20">
// 											<span className="text-gray-600 font-semibold">Read More</span>
// 											<ChevronRight
// 												className={`w-5 h-5 text-gray-400 transition-transform duration-500 ${hoveredId === announcement.id ? 'translate-x-2' : ''}`}
// 											/>
// 										</div>
// 									</div>
// 								</div>

// 								{/* Floating Particles */}
// 								{[...Array(5)].map((_, i) => (
// 									<div
// 										key={i}
// 										className="absolute w-1 h-1 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
// 										style={{
// 											top: `${20 + i * 15}%`,
// 											right: `${10 + i * 5}%`,
// 											animation: `float-particle ${3 + i * 0.5}s ease-in-out infinite`,
// 											animationDelay: `${i * 0.2}s`,
// 										}}
// 									></div>
// 								))}
// 							</div>
// 						</a>
// 					))}
// 				</div>

// 				{/* Quick Links - Bento Grid Style */}
// 				<div className="grid md:grid-cols-3 gap-6">
// 					{quickLinks.map((link, index) => (
// 						<a
// 							key={link.id}
// 							href={link.link}
// 							className="block group"
// 							onMouseEnter={() => setHoveredId(link.id + 100)}
// 							onMouseLeave={() => setHoveredId(null)}
// 							style={{
// 								animation: `fade-in-up 0.8s ease-out forwards`,
// 								animationDelay: `${index * 150}ms`,
// 								opacity: 0,
// 							}}
// 						>
// 							<div className="relative h-full backdrop-blur-xl bg-black/5 rounded-2xl p-3 shadow-xl border border-black/10 hover:border-blue-500/50 transition-all duration-700 overflow-hidden group-hover:shadow-2xl group-hover:shadow-blue-500/20 transform hover:-translate-y-3 hover:scale-[1.02]">
// 								{/* Animated Background Gradient */}
// 								<div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-100/0 to-pink-100/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-100/10 transition-all duration-700"></div>

// 								{/* Top Border Animation */}
// 								<div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-700"></div>

// 								{/* Corner Accent */}
// 								<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-50 to-transparent rounded-bl-3xl"></div>

// 								<div className="relative z-10">
// 									{/* Icon with Depth */}
// 									<div className="relative mb-2 inline-block">
// 										<div
// 											className={`absolute inset-0 bg-gradient-to-br ${link.color} rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
// 										></div>
// 										{/* <div className={`relative w-16 h-16 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center text-black shadow-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 border border-black/20`}>
//                       {link.icon}
//                     </div> */}
// 									</div>

// 									<h3 className="text-xl font-bold text-black mb-2 min-h-[3.5rem]  group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-200 transition-all duration-500">
// 										{link.title}
// 									</h3>

// 									<div className="flex items-center space-x-2 text-blue-400 font-semibold group-hover:text-blue-600 transition-colors duration-300">
// 										<span className="text-sm">Explore</span>
// 										<ExternalLink
// 											className={`w-4 h-4 transition-transform duration-500 ${hoveredId === link.id + 100 ? 'translate-x-2 -translate-y-1 rotate-12' : ''}`}
// 										/>
// 									</div>
// 								</div>

// 								{/* Bottom Glow */}
// 								<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
// 							</div>
// 						</a>
// 					))}
// 				</div>

// 				{/* Status Indicator - Neumorphic Style */}
// 				<div className="mt-12 flex justify-center">
// 					<div className="inline-flex items-center space-x-4 backdrop-blur-xl bg-black/10 rounded-full px-10 py-5 shadow-2xl border border-black/20">
// 						<div className="relative">
// 							<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
// 							<div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
// 						</div>
// 						<span className="text-black font-semibold tracking-wide">All Systems Operational</span>
// 						<div className="relative">
// 							<div
// 								className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
// 								style={{ animationDelay: '1s' }}
// 							></div>
// 							<div
// 								className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"
// 								style={{ animationDelay: '1s' }}
// 							></div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			<style>{`
//         @keyframes float {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           33% { transform: translate(30px, -30px) scale(1.1); }
//           66% { transform: translate(-30px, 30px) scale(0.9); }
//         }

//         @keyframes float-delayed {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           33% { transform: translate(-40px, 40px) scale(1.15); }
//           66% { transform: translate(40px, -40px) scale(0.85); }
//         }

//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.3; transform: scale(1); }
//           50% { opacity: 0.5; transform: scale(1.1); }
//         }

//         @keyframes swing {
//           0%, 100% { transform: rotate(0deg); }
//           25% { transform: rotate(15deg); }
//           75% { transform: rotate(-15deg); }
//         }

//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }

//         @keyframes gradient-x {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         @keyframes float-particle {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-20px); }
//         }

//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-float {
//           animation: float 8s ease-in-out infinite;
//         }

//         .animate-float-delayed {
//           animation: float-delayed 10s ease-in-out infinite;
//         }

//         .animate-pulse-slow {
//           animation: pulse-slow 4s ease-in-out infinite;
//         }

//         .animate-swing {
//           animation: swing 2s ease-in-out infinite;
//         }

//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }

//         .animate-shimmer {
//           animation: shimmer 3s ease-in-out infinite;
//         }

//         .animate-gradient-x {
//           background-size: 200% auto;
//           animation: gradient-x 3s ease infinite;
//         }
//       `}</style>
// 		</section>
// 	);
// }
