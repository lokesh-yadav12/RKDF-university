import React from 'react';
import { Briefcase, Calendar, GraduationCap, Users, ChevronRight } from 'lucide-react';
import img from "../assets/career/29.jpg"

interface JobListing {
  title: string;
  date?: string;
  category: 'faculty' | 'fellowship' | 'technician' | 'vacancy' | 'other';
}

const CareersPortal: React.FC = () => {
  const jobListings: JobListing[] = [
    {
      title: 'Application Invited for faculties required in different department of University in the Post of Professor, Associate Professor, Asst. Professor.',
      category: 'faculty'
    },
    {
      title: 'Application Invited for the POST DOCTORAL FELLOWSHIP on LIVE PROJECTS - June-2022',
      date: 'June-2022',
      category: 'fellowship'
    },
    {
      title: 'Walk-In Interview Revised (Technician for Bio-diesel Plant)',
      category: 'technician'
    },
    {
      title: 'Walk-In Interview (Technician for Bio-diesel Plant)',
      category: 'technician'
    },
    {
      title: 'Walk-In Interview In Ayurveda College (Revised Schedule)',
      category: 'other'
    },
    {
      title: 'Walk-In Interview In Ayurveda College',
      category: 'other'
    },
    {
      title: 'Faculty Required for M.Arch and B.Arch',
      category: 'faculty'
    },
    {
      title: 'Walk-In Interview (VACANCY)',
      category: 'vacancy'
    },
    {
      title: 'Walk-In Interview (VACANCY) 02.05.2018',
      date: '02.05.2018',
      category: 'vacancy'
    },
    {
      title: 'Walk-In Interview (VACANCY) 29.03.2017',
      date: '29.03.2017',
      category: 'vacancy'
    },
    {
      title: 'Walk-In Interview in Homoeopathy 31.12.2015',
      date: '31.12.2015',
      category: 'other'
    },
    {
      title: 'Walk-In Interview in Life Science 27.07.2015',
      date: '27.07.2015',
      category: 'other'
    },
    {
      title: 'Application Invited for the Faculty of Commerce & Management Dt. 2015-16',
      date: '2015-16',
      category: 'faculty'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'faculty':
        return <GraduationCap className="w-5 h-5" />;
      case 'fellowship':
        return <Users className="w-5 h-5" />;
      case 'technician':
        return <Briefcase className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'faculty':
        return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'fellowship':
        return 'bg-indigo-50 text-indigo-600 border-indigo-200';
      case 'technician':
        return 'bg-cyan-50 text-cyan-600 border-cyan-200';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header with Hero Image */}
        <div className="text-center mb-12">
          <div className="relative mb-8">
            {/* Decorative SVG Illustration */}
            <div className="mx-auto max-w-3xl flex flex-col justify-center items-center">
                          <img src={img} alt="contact" className='h-96'/>

            </div>
          </div>
          
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg shadow-blue-200">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Careers Portal
          </h1>
          <p className="text-lg text-slate-600">@ RKDF University</p>
        </div>

        {/* Subheading */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-700 flex items-center gap-3">
            <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
            Walk-In Interview
          </h2>
        </div>

        {/* Job Listings */}
        <div className="space-y-3">
          {jobListings.map((job, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-slate-200 p-5 hover:shadow-lg hover:shadow-blue-100 hover:border-blue-300 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 p-3 rounded-lg border ${getCategoryColor(job.category)} transition-colors duration-300`}>
                  {getCategoryIcon(job.category)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-slate-700 font-medium leading-relaxed group-hover:text-blue-700 transition-colors duration-300">
                    {job.title}
                  </h3>
                  {job.date && (
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="text-sm text-slate-500">{job.date}</span>
                    </div>
                  )}
                </div>
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Click on any listing to view more details
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersPortal;