import React, { useState } from "react";
import { X } from "lucide-react";
import AdmissionEnquiry from "@/components/home/AdmissionEnquiry";

const FloatingEnquiryButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Vertical Tab */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 group"
        aria-label="Open Enquiry Form"
      >
        <div className="relative">
          {/* Main Tab */}
          <div className="bg-gradient-to-b from-blue-700 to-blue-900 text-white px-2 py-8 rounded-l-xl shadow-2xl hover:shadow-blue-500/50 transform hover:translate-x-[-4px] transition-all duration-300">
            <div className="writing-mode-vertical-rl text-center">
              <span className="text-sm font-bold tracking-wider uppercase whitespace-nowrap">
                Enquire now
              </span>
            </div>
          </div>

          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 bg-blue-400/20 rounded-l-xl blur-lg -z-10 group-hover:bg-blue-400/40 transition-all duration-300"></div>
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
          text-orientation: mixed;
        }
      `}</style>
    </>
  );
};

export default FloatingEnquiryButton;