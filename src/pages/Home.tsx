//import AboutSection from '@/components/home/AboutSection'
import AcademicPrograms from '@/components/home/AcademicPrograms'
import AdvisoryBoard from '@/components/home/AdvisoryBoard'
import AnnouncementsSection from '@/components/home/Announcementsection'
// import CampusLife from '@/components/home/CampusLife'
import ChancellorNoticesSection from '@/components/home/ChancellorNoticesSection'
// import CTASection from '@/components/home/CTASection'
import EventsSection from '@/components/home/EventsSection'
import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
// import TestimonialsSection from '@/components/home/TestimonialsSection'
//import Upcomingevents from '@/components/home/UpcomingEvents'
import ViceChancellorNoticesSection from '@/components/home/ViceChancellorNoticesSection'
import OurInstitutions from '@/components/home/OurInstitutions'
import LinkItem from '@/components/home/LinkItem'
import React from 'react'

import OurAchievements from '@/components/home/Achievement'
import Amenities from '@/components/home/Amenities'
import About from '@/components/home/About'
import FloatingEnquiryButton from './Floatingenquirybutton'
//import AdmissionEnquiry from '@/components/home/AdmissionEnquiry'

const Home = () => {
  return (
    <div className="antialiased bg-white">
      <FloatingEnquiryButton/>
      <HeroSection />
      <AnnouncementsSection/>
       <EventsSection />
      <StatsSection />
      <About/>
      
     
      <ChancellorNoticesSection/>
      <ViceChancellorNoticesSection/>
      <OurInstitutions/>
      {/* <AboutSection /> */}
      <AcademicPrograms />
      
       <Amenities/>
      <OurAchievements/>
      <AdvisoryBoard/>
      <LinkItem/>
      
     
      {/* <AdmissionEnquiry/> */}
      {/* <CampusLife />
      <Upcomingevents/>
      <TestimonialsSection />
      <CTASection /> */}
    </div>
  )
}

export default Home
