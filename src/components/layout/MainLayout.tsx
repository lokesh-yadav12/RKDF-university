import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

import FloatingEnquiryButton from '@/pages/Floatingenquirybutton';

interface MainLayoutProps {
	children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div className="flex flex-col min-h-screen">
			<FloatingEnquiryButton/>
			<Header />
			<main className="flex-grow pt-16">{children}</main>
			<Footer />
		</div>
	);
};

export default MainLayout;