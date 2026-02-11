import ChancellorNoticesSection from './ChancellorNoticesSection'
import ViceChancellorNoticesSection from './ViceChancellorNoticesSection'

export default function LeadershipSection() {
  return (
    <section className="relative py-8 sm:py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
            University Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4a90c8] to-[#5a9fd8] mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Messages from our distinguished academic leaders
          </p>
        </div>

        {/* Side by Side Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Chancellor Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <ChancellorNoticesSection />
          </div>

          {/* Vice-Chancellor Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <ViceChancellorNoticesSection />
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');
        
        section {
          font-family: 'Outfit', sans-serif;
        }
      `}</style>
    </section>
  )
}