import { Routes, Route, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './components/layout/MainLayout';
import { useState } from 'react';
import NotFound from './pages/NotFound';
import Academics from './pages/Academics';
import Admissions from './pages/Admission';
import DPSLoading from './components/ui/Loading';
import ChancellorMessagePage from './components/home/Chancellormessagepage';
import ViceChancellorMessagePage from './components/home/ViceChancellormessagepage';
import FloatingButtons from './pages/FloatingButtons'; // NEW IMPORT - Adjust path based on where you save it
import CareersPortal from './pages/Careers';
import PlacementPage from './pages/PlacementPage';
import ContactPage from './pages/ContactPage';
import AllInfoPage from './pages/AllInfoPage';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
// const Legacy = lazy(() => import('./pages/Legacy'));
// const Location = lazy(() => import('./pages/Location'));
// const AboutUs = lazy(() => import('./pages/AboutUs'));
// const Academics = lazy(() => import('./pages/Academics'));
// const Admissions = lazy(() => import('./pages/Admissions'));
// const Infrastructure = lazy(() => import('./pages/Infrastructure'));
// const ContactUs = lazy(() => import('./pages/ContactUs'));
// const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
	const [isInitialLoading, setIsInitialLoading] = useState(true);

	const handleInitialLoadingComplete = () => {
		setIsInitialLoading(false);
	};

	// 🌀 Initial loader before full render
	if (isInitialLoading) {
		return (
			<div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 overflow-hidden">
				<div className="scale-[2]">
					<DPSLoading duration={2000} onLoadingComplete={handleInitialLoadingComplete} />
				</div>
			</div>
		);
	}

	return (
		<Suspense
			fallback={
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 overflow-hidden">
					<div className="scale-[2]">
						<DPSLoading />
					</div>
				</div>
			}
		>
			{/* CHANGED: Single FloatingButtons component instead of FloatingEnquiryButton */}
			<FloatingButtons />
			<Routes>
				<Route
					path="/"
					element={
						<MainLayout>
							<Outlet />
						</MainLayout>
					}
				>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/academics" element={<Academics />} />
					<Route path="/admission" element={<Admissions />} />
					<Route path="/careers" element={<CareersPortal />} />
					<Route path="/all-info/:department" element={<AllInfoPage />} />
					<Route path="/placements" element={<PlacementPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/chancellor-message" element={<ChancellorMessagePage />} />
					<Route path="/vice-chancellor-message" element={<ViceChancellorMessagePage />} />
				</Route>
				<Route
					path="/404"
					element={
						<MainLayout>
							<NotFound />
						</MainLayout>
					}
				/>
				<Route
					path="*"
					element={
						<MainLayout>
							<NotFound />
						</MainLayout>
					}
				/>
			</Routes>
		</Suspense>
	);
}

export default App;
