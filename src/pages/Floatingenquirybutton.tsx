import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import AdmissionEnquiry from "@/components/home/AdmissionEnquiry";

const FloatingEnquiryButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-40 group"
        aria-label="Open Enquiry Form"
      >
        <div className="relative">
          {/* Pulsing Ring */}
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
          
          {/* Main Button */}
          <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transform hover:scale-110 transition-all duration-300">
            <MessageSquare className="w-6 h-6" />
          </div>

          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-xl">
              Admission Enquiry
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
            </div>
          </div>
        </div>

        {/* Vertical Text Label - Always Visible */}
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 writing-mode-vertical-rl transform rotate-180">
          <span className="text-xs font-bold bg-white text-blue-600 tracking-wider uppercase">
            Enquiry
          </span>
        </div>
      </button>

      {/* Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out] overflow-y-auto"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative w-full max-w-6xl my-8 animate-[slideUp_0.4s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-4 -right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-2xl transform hover:scale-110 hover:rotate-90 transition-all duration-300"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Enquiry Form */}
            <div className="max-h-[90vh] overflow-y-auto rounded-2xl">
              <AdmissionEnquiry onClose={() => setIsOpen(false)} />
            </div>
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
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .writing-mode-vertical-rl {
          writing-mode: vertical-rl;
        }
      `}</style>
    </>
  );
};

export default FloatingEnquiryButton;