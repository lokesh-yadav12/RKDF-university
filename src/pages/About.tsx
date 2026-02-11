import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const achievements = [
    { 
      value: '1973', 
      label: 'Established',
      description: 'Five decades of educational innovation'
    },
    { 
      value: '142', 
      label: 'Countries',
      description: 'Global alumni network'
    },
    { 
      value: '#12', 
      label: 'Global Ranking',
      description: 'Among world universities'
    },
    { 
      value: '89%', 
      label: 'Research Impact',
      description: 'Citations in top journals'
    }
  ];

  const pillars = [
    {
      title: 'Innovation in Learning',
      description: 'Pioneering adaptive learning technologies and interdisciplinary approaches that prepare students for careers that don\'t yet exist.',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      title: 'Research Excellence',
      description: 'Leading breakthrough discoveries in fields from quantum computing to sustainable development, backed by $200M in annual research funding.',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Global Impact',
      description: 'Creating solutions to humanity\'s greatest challenges through partnerships with institutions, governments, and organizations worldwide.',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Inclusive Excellence',
      description: 'Building a diverse community of thinkers, makers, and leaders where everyone has the opportunity to reach their full potential.',
      gradient: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');
        
        body {
          font-family: 'IBM Plex Sans', sans-serif;
        }
        
        .heading-font {
          font-family: 'Playfair Display', serif;
        }
        
        .parallax-slow {
          transform: translateY(${scrollY * 0.15}px);
        }
        
        .parallax-fast {
          transform: translateY(${scrollY * -0.1}px);
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .text-gradient {
          background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stagger-animation {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      {/* Hero Section with Geometric Background */}
      <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl parallax-slow"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl parallax-fast"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-block mb-6 px-4 py-2 border border-blue-300 rounded-full">
              <span className="text-xs font-medium text-blue-700 tracking-[0.2em] uppercase">Since 1973</span>
            </div>
            
            <h1 className="heading-font text-7xl md:text-8xl font-bold text-gray-900 mb-8 leading-[1.1]">
              Shaping the
              <span className="block text-gradient mt-2">Future of Learning</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              A world-renowned institution where curiosity meets opportunity, and ambitious minds 
              discover their power to transform the world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-10 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Explore Our Story
              </button>
              <button className="px-10 py-4 border-2 border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-all duration-300">
                Watch Video
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 float-animation">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`text-center p-8 bg-white rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 stagger-animation`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="heading-font text-5xl font-bold text-gradient mb-3">
                  {achievement.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.label}
                </div>
                <div className="text-sm text-gray-600">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="py-32 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-blue-300 rounded-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80"
                  alt="Students collaborating"
                  className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
                />
                <div className="absolute -bottom-8 -right-8 glass-effect border border-white p-8 rounded-2xl shadow-2xl">
                  <div className="text-4xl font-bold text-blue-600 heading-font">15,000+</div>
                  <div className="text-sm text-gray-700 font-medium mt-1">Active Students</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block mb-6 px-4 py-2 bg-blue-100 rounded-full">
                <span className="text-xs font-medium text-blue-700 tracking-[0.2em] uppercase">Our Mission</span>
              </div>
              
              <h2 className="heading-font text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Empowering Minds,
                <span className="block text-blue-600">Transforming Futures</span>
              </h2>
              
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  We believe education is not just about acquiring knowledge—it's about igniting 
                  curiosity, developing critical thinking, and fostering the courage to challenge 
                  the status quo.
                </p>
                <p>
                  For over five decades, we've been at the forefront of educational innovation, 
                  combining rigorous academics with real-world experience. Our students don't just 
                  learn theory; they apply it to solve actual challenges facing our world.
                </p>
                <p>
                  From Nobel laureates to startup founders, our alumni are proof that when you 
                  combine world-class education with limitless ambition, extraordinary things happen.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-blue-500 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 border-2 border-white"></div>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold text-gray-900">Join 50,000+ alumni</div>
                  <div>Making impact worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Four Pillars Section */}
      <div className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-50 rounded-full">
              <span className="text-xs font-medium text-blue-700 tracking-[0.2em] uppercase">Our Foundation</span>
            </div>
            <h2 className="heading-font text-5xl font-bold text-gray-900 mb-6">
              Built on Four Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do, from curriculum design to campus culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br p-[2px] hover:scale-[1.02] transition-all duration-500"
                style={{ 
                  background: `linear-gradient(135deg, ${pillar.gradient.includes('from-blue-400') ? '#60a5fa, #22d3ee' : pillar.gradient.includes('from-blue-500') ? '#3b82f6, #6366f1' : pillar.gradient.includes('from-cyan-400') ? '#22d3ee, #3b82f6' : '#6366f1, #2563eb'})`
                }}
              >
                <div className="bg-white rounded-3xl p-10 h-full">
                  <h3 className="heading-font text-3xl font-bold text-gray-900 mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campus Life Visual Section */}
      <div className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-font text-5xl font-bold text-gray-900 mb-6">
              Life on Campus
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A vibrant community where learning extends far beyond the classroom
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5 overflow-hidden rounded-3xl shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"
                alt="Campus Building"
                className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="col-span-12 md:col-span-7 grid grid-rows-2 gap-6">
              <div className="overflow-hidden rounded-3xl shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80"
                  alt="Library"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden rounded-3xl shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80"
                  alt="Students studying"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="heading-font text-5xl md:text-6xl font-bold text-white mb-8">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join a community of innovators, thinkers, and changemakers who are shaping tomorrow
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-5 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Apply Now
            </button>
            <button className="px-12 py-5 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;