import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/rkdflogo.png';

interface NavLink {
	label: string;
	href?: string;
	hasDropdown?: boolean;
	dropdownItems?: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
	{
		label: 'Home',
		href: '/',
		hasDropdown: false,
	},
	{
		label: 'About Us',
		hasDropdown: true,
		dropdownItems: [
			{ label: 'Overview', href: '/about' },
			{ label: 'Mission & Vision', href: '/about/mission' },
			{ label: 'Leadership', href: '/about/leadership' },
			{ label: 'Accreditations', href: '/about/accreditations' },
		],
	},
	{
		label: 'Academic',
		hasDropdown: true,
		dropdownItems: [
			{ label: 'Programs', href: '/academics' },
			{ label: 'Departments', href: '/academics/departments' },
			{ label: 'Faculty', href: '/academics/faculty' },
			{ label: 'Academic Calendar', href: '/academics/calendar' },
		],
	},
	{
		label: 'Examinations',
		hasDropdown: true,
		dropdownItems: [
			{ label: 'Exam Schedule', href: '/examinations/schedule' },
			{ label: 'Results', href: '/examinations/results' },
			{ label: 'Exam Guidelines', href: '/examinations/guidelines' },
		],
	},
	{
		label: 'R&D Activities',
		hasDropdown: true,
		dropdownItems: [
			{ label: 'Research Projects', href: '/research/projects' },
			{ label: 'Publications', href: '/research/publications' },
			{ label: 'Innovation', href: '/research/innovation' },
		],
	},
	{
		label: 'Research Section',
		hasDropdown: true,
		dropdownItems: [
			{ label: 'Research Centers', href: '/research-section/centers' },
			{ label: 'PhD Programs', href: '/research-section/phd' },
			{ label: 'Collaborations', href: '/research-section/collaborations' },
		],
	},
	{
		label: 'Admissions',
		hasDropdown: true,
		dropdownItems: [
			{ label: 'Apply Online', href: '/admission' },
			{ label: 'Admission Process', href: '/admission/process' },
			{ label: 'Eligibility', href: '/admission/eligibility' },
			{ label: 'Fee Structure', href: '/admission/fees' },
		],
	},
	{
		label: 'Careers',
		href: '/careers',
	},
	{
		label: 'Placements',
		href: '/placements',
	},
	{
		label: 'Contact Us',
		href: '/contact',
	},
];

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
	className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
		isScrolled ? 'bg-white shadow-md' : 'bg-white shadow-lg'
	}`}
>
	<div className="max-w-full mx-auto px-4 sm:px-6 font-bold lg:px-10">
		{/* rest of your code */}
				<div className="flex  items-center h-28">
					{/* Logo Section */}
					<div className="flex items-center space-x-1">
						{/* RKDF Logo */}
						<Link to="/" className="flex items-center">
							<div className="w-20 h-20 rounded-full flex items-center justify-center">
								<img src={logo} alt="RKDF University Logo" className="" />
							</div>
						</Link>

						{/* Home Icon */}
						{/* <Link 
              				to="/" 
             				 className="w-10 h-10 bg-white rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors"
          					  >
             				 <Home className="w-5 h-5 text-[#4a90c8]" />
           					 </Link> */}
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex text-md font-semibold text-start space-x-1 sm:pl-6">
						{navLinks.map((link) => (
							<div
								key={link.label}
								className="relative group"
								onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
								onMouseLeave={() => setActiveDropdown(null)}
							>
								{link.hasDropdown ? (
									<>
										<button className="text-black hover:bg-[#5a9fd8] px-4 py-2 rounded font-medium transition-colors flex items-center space-x-1">
											<span>{link.label}</span>
											<ChevronDown className="w-4 h-4" />
										</button>

										{/* Dropdown Menu */}
										{activeDropdown === link.label && (
											<div className="absolute top-full left-0 pt-0 w-56 z-50">
  											<div className="bg-white text-black rounded-md shadow-lg py-2">						{link.dropdownItems?.map((item) => (
													<Link
														key={item.label}
														to={item.href}
														className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-[#4a90c8] transition-colors"
													>
														{item.label}
													</Link>
												))}
											</div>
											</div>
										)}
									</>
								) : (
									<Link
										to={link.href || '#'}
										className="text-black hover:bg-[#5a9fd8] hover:text-black px-4 py-2 rounded font-medium transition-colors block"
									>
										{link.label}
									</Link>
								)}
							</div>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="lg:hidden p-2 right-0 ml-[70vw] rounded-lg bg-[#4a90c8] hover:bg-[#5a9fd8] transition-colors"
					>
						{isMobileMenuOpen ? (
							<X className="w-6 h-6 text-white" />
						) : (
							<Menu className="w-6 h-6 text-white" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="lg:hidden bg-white border-t max-h-[100vh] overflow-y-auto">
					<div className="px-4 py-4 space-y-2">
						{navLinks.map((link) => (
							<div key={link.label}>
								{link.hasDropdown ? (
									<div>
										<button
											onClick={() =>
												setActiveDropdown(activeDropdown === link.label ? null : link.label)
											}
											className="w-full flex items-center justify-between py-2 text-gray-700 hover:text-[#4a90c8] font-medium transition-colors"
										>
											<span>{link.label}</span>
											<ChevronDown
												className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`}
											/>
										</button>

										{activeDropdown === link.label && (
											<div className="pl-4 space-y-1 mt-1">
												{link.dropdownItems?.map((item) => (
													<Link
														key={item.label}
														to={item.href}
														onClick={() => setIsMobileMenuOpen(false)}
														className="block py-2 text-sm text-gray-600 hover:text-[#4a90c8] transition-colors"
													>
														{item.label}
													</Link>
												))}
											</div>
										)}
									</div>
								) : (
									<Link
										to={link.href || '#'}
										onClick={() => setIsMobileMenuOpen(false)}
										className="block py-2 text-gray-700 hover:text-[#4a90c8] font-medium transition-colors"
									>
										{link.label}
									</Link>
								)}
							</div>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}
