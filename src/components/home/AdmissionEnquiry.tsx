import React, { useState } from "react";

const AdmissionEnquiry = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    program: "",
    branch: "",
    placeName: ""
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

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
    // Add your form submission logic here
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
    // Reset form
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      program: "",
      branch: "",
      placeName: ""
    });
  };

  return (
    <section className="min-h-screen md:max-h-screen bg-white sm:py-16 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-[#4a90c8] rounded-t-2xl shadow-lg px-8 py-3 sm:py-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-white text-center tracking-wide">
            ADMISSION ENQUIRY
          </h1>
          <p className="text-blue-50 text-center mt-1 text-sm sm:text-base">
            Fill out the form below and we'll get back to you shortly
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-b-2xl shadow-xl p-6 sm:p-10">
          {/* Row 1: Name, Mobile, Email */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Student Full Name */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Student Full Name: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="STUDENT FULL NAME"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none placeholder-gray-400 text-gray-700"
              />
            </div>

            {/* Mobile No */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Mobile No: <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="0"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none placeholder-gray-400 text-gray-700"
              />
            </div>

            {/* Email ID */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Email ID: <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email id"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none placeholder-gray-400 text-gray-700"
              />
            </div>
          </div>

          {/* Row 2: Program, Branch, Place */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Select Program */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Select Program: <span className="text-red-500">*</span>
              </label>
              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none text-gray-700 bg-white cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M10.293%203.293L6%207.586%201.707%203.293A1%201%200%2000.293%204.707l5%205a1%201%200%20001.414%200l5-5a1%201%200%2000-1.414-1.414z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat"
              >
                <option value="">--Select Program--</option>
                {programs.map((program, index) => (
                  <option key={index} value={program}>
                    {program}
                  </option>
                ))}
              </select>
            </div>

            {/* Select Branch */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Select Branch: <span className="text-red-500">*</span>
              </label>
              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none text-gray-700 bg-white cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M10.293%203.293L6%207.586%201.707%203.293A1%201%200%2000.293%204.707l5%205a1%201%200%20001.414%200l5-5a1%201%200%2000-1.414-1.414z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat"
              >
                <option value="">--Select Branch--</option>
                {branches.map((branch, index) => (
                  <option key={index} value={branch}>
                    {branch}
                  </option>
                ))}
              </select>
            </div>

            {/* Place Name */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Place Name: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="placeName"
                value={formData.placeName}
                onChange={handleChange}
                placeholder="NAME OF PLACE"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none placeholder-gray-400 text-gray-700"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="group relative px-12 py-4 bg-[#4a90c8] text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {/* Animated background */}
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
              
              {/* Button text */}
              <span className="relative text-black flex items-center gap-2">
                SUBMIT ENQUIRY
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>

          {/* Help Text */}
          <p className="text-center text-sm text-gray-500 mt-6">
            <span className="text-red-500">*</span> Required fields
          </p>
        </form>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Need help? Contact us at{" "}
            <a href="mailto:admissions@university.edu" className="text-blue-600 hover:text-blue-800 font-semibold">
              admissions@university.edu
            </a>
          </p>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]">
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform animate-[slideUp_0.4s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                {/* Animated Circle */}
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-[scaleIn_0.5s_ease-out]">
                  <svg 
                    className="w-10 h-10 text-white animate-[checkmark_0.6s_ease-out_0.2s_both]" 
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
                {/* Ripple Effect */}
                <div className="absolute inset-0 bg-green-400 rounded-full animate-[ping_1s_ease-out_infinite] opacity-20"></div>
              </div>
            </div>

            {/* Success Message */}
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-3">
              Successfully Submitted!
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Thank you for your enquiry. We'll get back to you shortly at <span className="font-semibold text-blue-600">{formData.email}</span>
            </p>

            {/* Submitted Details */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Name:</span>
                <span className="font-semibold text-gray-800">{formData.fullName}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Program:</span>
                <span className="font-semibold text-gray-800">{formData.program}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Branch:</span>
                <span className="font-semibold text-gray-800">{formData.branch}</span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={closePopup}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
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
      `}</style>
    </section>
  );
};

export default AdmissionEnquiry;