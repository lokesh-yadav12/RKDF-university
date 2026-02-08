import React from 'react';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import sadhna from '../../assets/sadhna.png'
export default function ChancellorMessagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center space-x-2 text-[#4a90c8] hover:text-[#5a9fd8] mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Back to Home</span>
        </Link>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#4a90c8] to-[#5a9fd8] text-white px-8 py-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Chancellor's Message</h1>
            <p className="text-blue-100">A message from the Chancellor of RKDF University</p>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Chancellor Info Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border border-blue-100">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-48 h-56 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={sadhna}
                      alt="Dr. Sadhna Kapoor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-[#1e3a8a] mb-2">Dr. Sadhna Kapoor</h2>
                  <p className="text-xl text-gray-700 font-semibold mb-2">Chancellor</p>
                  <p className="text-gray-600 mb-4">
                    Honorary Professor of Academic Union, Oxford, UK
                  </p>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-[#4a90c8]" />
                      <span>chancellor@rkdf.ac.in</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-[#4a90c8]" />
                      <span>+91 755 1234567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-[#4a90c8]" />
                      <span>RKDF University, Bhopal, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="prose max-w-none">
              <div className="text-gray-700 space-y-6 leading-relaxed text-justify">
                <p className="text-lg first-letter:text-5xl first-letter:font-bold first-letter:text-[#4a90c8] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                  Education is the prerequisite for socio-economic development of the Nation in general and people in particular. Not enough educational facilities are available for the people of this region. Keeping this in view, RKDF University was established with the vision to provide quality education and create opportunities for holistic development.
                </p>

                <p>
                  At RKDF University, we are committed to nurturing young minds and preparing them for the challenges of tomorrow. Our institution stands as a beacon of academic excellence, innovation, and research. We believe in creating an environment where students can explore their potential, develop critical thinking skills, and become responsible global citizens.
                </p>

                <p>
                  Our faculty members are dedicated professionals who bring extensive experience and expertise to the classroom. They mentor students not just in academics but also guide them in their personal and professional growth. We emphasize practical learning, industry exposure, and research-oriented education to ensure our students are well-prepared for their careers.
                </p>

                <div className="bg-blue-50 border-l-4 border-[#4a90c8] p-6 my-8 rounded-r-lg">
                  <p className="italic text-gray-700">
                    "The university offers state-of-the-art infrastructure, modern laboratories, well-stocked libraries, and excellent sports facilities. We encourage students to participate in extracurricular activities, cultural events, and community service programs to develop a well-rounded personality."
                  </p>
                </div>

                <p>
                  As we move forward, we remain committed to our mission of providing accessible, affordable, and quality education to all. We invite you to be part of this transformative journey and contribute to building a better future for yourself and society.
                </p>

                <p>
                  I wish all our students success in their academic pursuits and encourage them to make the most of the opportunities available at RKDF University.
                </p>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="font-semibold text-gray-800">With warm regards,</p>
                  <p className="text-xl font-bold text-[#1e3a8a] mt-2">Dr. Sadhna Kapoor</p>
                  <p className="text-gray-600">Chancellor, RKDF University</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Link
                to="/about"
                className="block bg-gradient-to-r from-[#4a90c8] to-[#5a9fd8] text-white px-6 py-4 rounded-xl hover:shadow-lg transition-all duration-300 text-center font-semibold"
              >
                Learn More About Us
              </Link>
              <Link
                to="/contact"
                className="block border-2 border-[#4a90c8] text-[#4a90c8] px-6 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 text-center font-semibold"
              >
                Contact Chancellor's Office
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}