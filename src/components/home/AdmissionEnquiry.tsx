import React, { useState } from "react";

interface AdmissionEnquiryProps {
  onClose?: () => void;
}

const AdmissionEnquiry: React.FC<AdmissionEnquiryProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    program: "",
    branch: "",
    placeName: ""
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const programs = [
    "B.Tech",
    "M.Tech",
    "MBA",
    "BBA",
    "B.Sc",
    "M.Sc",
    "B.Com",
    "M.Com",
    "BA",
    "MA",
    "PhD"
  ];

  const branches = [
    "Computer Science",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Electronics & Communication",
    "Information Technology",
    "Management",
    "Commerce",
    "Science",
    "Arts"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowSuccessPopup(true);
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      program: "",
      branch: "",
      placeName: ""
    });
    if (onClose) {
      onClose();
    }
  };

  return (
    <section className={`relative ${!onClose ? 'min-h-screen' : ''} bg-gradient-to-br from-blue-300 via-blue-200/30 to-indigo-200/40 py-6 sm:py-8 lg:py-12 px-4 overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        {/* <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-300/10 rounded-full blur-3xl animate-pulse-gentle"></div>
         */}
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#4a90c8 1px, transparent 1px),
                             linear-gradient(90deg, #4a90c8 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section with Modern Design */}
        <div className="text-center mb-4 sm:mb-8">
          {/* Decorative Top Line */}
          {/* <div className="flex items-center justify-center mb-6 gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-blue-600"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-blue-400 to-blue-600"></div>
          </div> */}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 relative inline-block">
            <span className=" bg-clip-text text-blue-900">
              Admission <span className="text-red-700">Enquiry</span>
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-full"></div>
          </h1>
          
          <p className="text-gray-900 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
            Start your journey with us. Fill out the form below and our admissions team will reach out to you shortly.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="relative backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-indigo-400/10 to-transparent rounded-tr-full"></div>

          {/* Animated Top Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 animate-gradient-shift"></div>

          <form onSubmit={handleSubmit} className="relative p-6 sm:p-8 lg:p-12">
            {/* Personal Information Section */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                Personal Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Full Name */}
                <div className="space-y-2 group">
                  <label className="block text-sm font-semibold text-gray-700 transition-colors duration-300 group-focus-within:text-blue-600">
                    Student Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('fullName')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none placeholder-gray-400 text-gray-800"
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 ${focusedField === 'fullName' ? 'w-full' : 'w-0'}`}></div>
                  </div>
                </div>

                {/* Mobile */}
                <div className="space-y-2 group">
                  <label className="block text-sm font-semibold text-gray-700 transition-colors duration-300 group-focus-within:text-blue-600">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('mobile')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Enter your mobile number"
                      required
                      className="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none placeholder-gray-400 text-gray-800"
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 ${focusedField === 'mobile' ? 'w-full' : 'w-0'}`}></div>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2 group">
                  <label className="block text-sm font-semibold text-gray-700 transition-colors duration-300 group-focus-within:text-blue-600">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none placeholder-gray-400 text-gray-800"
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 ${focusedField === 'email' ? 'w-full' : 'w-0'}`}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Preferences Section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                Academic Preferences
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Program */}
                <div className="space-y-2 group">
                  <label className="block text-sm font-semibold text-gray-700 transition-colors duration-300 group-focus-within:text-blue-600">
                    Select Program <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('program')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none text-gray-800 cursor-pointer appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234a90c8' d='M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414z'/%3E%3C/svg%3E")`,
                        backgroundPosition: 'right 0.75rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.25rem'
                      }}
                    >
                      <option value="">Choose your program</option>
                      {programs.map((program, index) => (
                        <option key={index} value={program}>
                          {program}
                        </option>
                      ))}
                    </select>
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 ${focusedField === 'program' ? 'w-full' : 'w-0'}`}></div>
                  </div>
                </div>

                {/* Branch */}
                <div className="space-y-2 group">
                  <label className="block text-sm font-semibold text-gray-700 transition-colors duration-300 group-focus-within:text-blue-600">
                    Select Branch <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('branch')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none text-gray-800 cursor-pointer appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234a90c8' d='M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414z'/%3E%3C/svg%3E")`,
                        backgroundPosition: 'right 0.75rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.25rem'
                      }}
                    >
                      <option value="">Choose your branch</option>
                      {branches.map((branch, index) => (
                        <option key={index} value={branch}>
                          {branch}
                        </option>
                      ))}
                    </select>
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 ${focusedField === 'branch' ? 'w-full' : 'w-0'}`}></div>
                  </div>
                </div>

                {/* Place */}
                <div className="space-y-2 group">
                  <label className="block text-sm font-semibold text-gray-700 transition-colors duration-300 group-focus-within:text-blue-600">
                    City / Location <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="placeName"
                      value={formData.placeName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('placeName')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Enter your city"
                      required
                      className="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none placeholder-gray-400 text-gray-800"
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 ${focusedField === 'placeName' ? 'w-full' : 'w-0'}`}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center gap-4 pt-3">
              <button
                type="submit"
                className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden"
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Button content */}
                <span className="relative flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Submit Enquiry
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>

                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 group-hover:animate-ping bg-white"></div>
              </button>

              <p className="text-sm text-gray-500">
                <span className="text-red-500">*</span> All fields are required
              </p>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-white/60 rounded-full px-6 py-3 border border-blue-200/50 shadow-lg">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm text-gray-600">
              Need help? Email us at{" "}
              <a href="mailto:admissions@university.edu" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                admissions@university.edu
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden transform animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient Header */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              
              {/* Success Icon */}
              <div className="flex justify-center relative z-10">
                <div className="relative">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center animate-scaleIn shadow-2xl">
                    <svg 
                      className="w-12 h-12 text-green-500 animate-checkmark" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={3} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-white/50 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-3xl font-black text-gray-800 text-center mb-3">
                Enquiry Submitted!
              </h3>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                Thank you for your interest. Our admissions team will contact you at{" "}
                <span className="font-semibold text-blue-600">{formData.email}</span> within 24 hours.
              </p>

              {/* Summary Card */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6 space-y-3 border border-blue-100">
                <div className="flex justify-between items-center pb-3 border-b border-blue-200/50">
                  <span className="text-sm font-medium text-gray-600">Name</span>
                  <span className="font-bold text-gray-800">{formData.fullName}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-blue-200/50">
                  <span className="text-sm font-medium text-gray-600">Program</span>
                  <span className="font-bold text-blue-600">{formData.program}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Branch</span>
                  <span className="font-bold text-gray-800">{formData.branch}</span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={closePopup}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
              >
                <span className="relative z-10">Continue</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(20px, -20px); }
          66% { transform: translate(-20px, 20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-30px, 30px); }
          66% { transform: translate(30px, -30px); }
        }

        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes scaleIn {
          from { transform: scale(0) rotate(-180deg); }
          to { transform: scale(1) rotate(0deg); }
        }

        @keyframes checkmark {
          0% {
            stroke-dasharray: 0, 100;
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dasharray: 100, 100;
            stroke-dashoffset: 0;
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 15s ease-in-out infinite;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 6s ease-in-out infinite;
        }

        .animate-gradient-shift {
          background-size: 200% auto;
          animation: gradient-shift 3s ease infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-checkmark {
          animation: checkmark 0.6s ease-out 0.3s both;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AdmissionEnquiry;