import React from 'react';
import { TrendingUp, Building2, Users, Award, Briefcase, DollarSign, GraduationCap, Target } from 'lucide-react';

interface Company {
  name: string;
  logo: string;
  hires: number;
}

interface PlacementStat {
  year: string;
  placed: number;
  totalStudents: number;
  averagePackage: string;
  highestPackage: string;
}

const PlacementPage: React.FC = () => {
  const currentYearStats = {
    totalPlacements: 847,
    placementRate: 94.2,
    averagePackage: '6.8 LPA',
    highestPackage: '42 LPA',
    companiesVisited: 156
  };

  const yearlyData: PlacementStat[] = [
    { year: '2023-24', placed: 847, totalStudents: 899, averagePackage: '6.8 LPA', highestPackage: '42 LPA' },
    { year: '2022-23', placed: 782, totalStudents: 856, averagePackage: '6.2 LPA', highestPackage: '38 LPA' },
    { year: '2021-22', placed: 698, totalStudents: 789, averagePackage: '5.8 LPA', highestPackage: '35 LPA' },
    { year: '2020-21', placed: 624, totalStudents: 745, averagePackage: '5.4 LPA', highestPackage: '32 LPA' }
  ];

  const topRecruiters: Company[] = [
    { name: 'TCS', logo: '🏢', hires: 85 },
    { name: 'Infosys', logo: '💼', hires: 72 },
    { name: 'Wipro', logo: '🏛️', hires: 68 },
    { name: 'Accenture', logo: '🌐', hires: 54 },
    { name: 'Cognizant', logo: '💻', hires: 48 },
    { name: 'Amazon', logo: '📦', hires: 42 },
    { name: 'Microsoft', logo: '🪟', hires: 38 },
    { name: 'Google', logo: '🔍', hires: 28 }
  ];

  const departmentWise = [
    { dept: 'Computer Science', placed: 245, total: 260, percentage: 94.2 },
    { dept: 'Electronics & Communication', placed: 156, total: 172, percentage: 90.7 },
    { dept: 'Mechanical Engineering', placed: 128, total: 145, percentage: 88.3 },
    { dept: 'Civil Engineering', placed: 98, total: 112, percentage: 87.5 },
    { dept: 'Electrical Engineering', placed: 112, total: 125, percentage: 89.6 },
    { dept: 'MBA', placed: 108, total: 115, percentage: 93.9 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Header with Illustration */}
        <div className="text-center mb-12">
          <div className="relative mb-8">
            <svg viewBox="0 0 800 200" className="w-full max-w-2xl mx-auto h-auto">
              {/* Success graph illustration */}
              <defs>
                <linearGradient id="graphGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 0.05 }} />
                </linearGradient>
              </defs>
              
              {/* Graph line */}
              <path d="M 100 150 L 250 120 L 400 80 L 550 60 L 700 40" 
                    stroke="#3B82F6" 
                    strokeWidth="4" 
                    fill="none" 
                    strokeLinecap="round"/>
              
              {/* Area under graph */}
              <path d="M 100 150 L 250 120 L 400 80 L 550 60 L 700 40 L 700 170 L 100 170 Z" 
                    fill="url(#graphGrad)"/>
              
              {/* Data points */}
              <circle cx="100" cy="150" r="6" fill="#3B82F6" />
              <circle cx="250" cy="120" r="6" fill="#3B82F6" />
              <circle cx="400" cy="80" r="6" fill="#3B82F6" />
              <circle cx="550" cy="60" r="6" fill="#3B82F6" />
              <circle cx="700" cy="40" r="8" fill="#10B981" />
              
              {/* Trophy */}
              <g transform="translate(660, 0)">
                <path d="M 20 25 L 15 35 L 25 35 Z" fill="#F59E0B" />
                <rect x="17" y="35" width="6" height="8" fill="#F59E0B" />
                <ellipse cx="20" cy="20" rx="8" ry="6" fill="#FBBF24" />
                <rect x="10" y="16" width="4" height="8" fill="#FBBF24" />
                <rect x="26" y="16" width="4" height="8" fill="#FBBF24" />
              </g>
            </svg>
          </div>
          
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-4 shadow-lg shadow-blue-200">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Placement Statistics
          </h1>
          <p className="text-lg text-slate-600">RKDF University • Academic Year 2023-24</p>
        </div>

        {/* Key Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          <div className="bg-white rounded-xl border border-blue-200 p-6 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-sm font-medium text-slate-600">Total Placements</h3>
            </div>
            <p className="text-3xl font-bold text-slate-800">{currentYearStats.totalPlacements}</p>
            <p className="text-xs text-green-600 mt-1">↑ 8.3% from last year</p>
          </div>

          <div className="bg-white rounded-xl border border-green-200 p-6 hover:shadow-lg hover:shadow-green-100 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Target className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-sm font-medium text-slate-600">Placement Rate</h3>
            </div>
            <p className="text-3xl font-bold text-slate-800">{currentYearStats.placementRate}%</p>
            <p className="text-xs text-green-600 mt-1">↑ 2.1% increase</p>
          </div>

          <div className="bg-white rounded-xl border border-indigo-200 p-6 hover:shadow-lg hover:shadow-indigo-100 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="text-sm font-medium text-slate-600">Avg Package</h3>
            </div>
            <p className="text-3xl font-bold text-slate-800">{currentYearStats.averagePackage}</p>
            <p className="text-xs text-green-600 mt-1">↑ 9.7% increase</p>
          </div>

          <div className="bg-white rounded-xl border border-amber-200 p-6 hover:shadow-lg hover:shadow-amber-100 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-amber-100 rounded-lg">
                <Award className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-sm font-medium text-slate-600">Highest Package</h3>
            </div>
            <p className="text-3xl font-bold text-slate-800">{currentYearStats.highestPackage}</p>
            <p className="text-xs text-amber-600 mt-1">All-time high</p>
          </div>

          <div className="bg-white rounded-xl border border-cyan-200 p-6 hover:shadow-lg hover:shadow-cyan-100 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-cyan-100 rounded-lg">
                <Building2 className="w-5 h-5 text-cyan-600" />
              </div>
              <h3 className="text-sm font-medium text-slate-600">Companies</h3>
            </div>
            <p className="text-3xl font-bold text-slate-800">{currentYearStats.companiesVisited}</p>
            <p className="text-xs text-green-600 mt-1">↑ 12 new this year</p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Year-wise Statistics */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
              Year-wise Performance
            </h2>
            <div className="space-y-4">
              {yearlyData.map((data, index) => (
                <div key={index} className="group hover:bg-blue-50 p-4 rounded-lg transition-colors duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-slate-700">{data.year}</h3>
                    <span className="text-sm text-slate-600">
                      {data.placed}/{data.totalStudents} students
                    </span>
                  </div>
                  <div className="relative w-full bg-slate-200 rounded-full h-2 mb-2">
                    <div 
                      className="absolute top-0 left-0 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                      style={{ width: `${(data.placed / data.totalStudents) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Avg: {data.averagePackage}</span>
                    <span className="text-slate-600">Highest: {data.highestPackage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Recruiters */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
              Top Recruiters
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {topRecruiters.map((company, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-4 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{company.logo}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-700 truncate group-hover:text-blue-700 transition-colors">
                        {company.name}
                      </h3>
                      <p className="text-sm text-slate-600">{company.hires} hires</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Department-wise Placements */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
            Department-wise Placements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {departmentWise.map((dept, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white to-slate-50 rounded-lg p-5 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-700 text-sm mb-1">{dept.dept}</h3>
                    <p className="text-xs text-slate-600">{dept.placed}/{dept.total} placed</p>
                  </div>
                </div>
                <div className="relative w-full bg-slate-200 rounded-full h-2 mb-2">
                  <div 
                    className="absolute top-0 left-0 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                    style={{ width: `${dept.percentage}%` }}
                  ></div>
                </div>
                <p className="text-right text-sm font-semibold text-blue-600">{dept.percentage}%</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-lg">
          <div className="text-center">
            <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl font-bold mb-2">Join Our Success Story</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              With a strong placement record and partnerships with leading companies, 
              RKDF University ensures your career takes flight.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-md">
              View Placement Brochure
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PlacementPage;