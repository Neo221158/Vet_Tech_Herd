'use client';

import { useState } from 'react';
import JobCard from '@/components/JobCard';
import { Job } from '@/types';
import jobsData from '@/data/jobs.json';

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [locationFilter, setLocationFilter] = useState<string>('all');

  const jobs = jobsData as Job[];
  
  // Get unique locations
  const locations = ['all', ...Array.from(new Set(jobs.map(job => {
    const location = job.location.toLowerCase();
    if (location.includes('remote')) return 'remote';
    const state = location.split(',').pop()?.trim();
    return state || job.location;
  })))];
  
  // Filter jobs based on search term and location
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = locationFilter === 'all' || 
                           (locationFilter === 'remote' && job.location.toLowerCase().includes('remote')) ||
                           job.location.toLowerCase().includes(locationFilter.toLowerCase());
    
    return matchesSearch && matchesLocation;
  });

  // Sort jobs by posted date (newest first)
  const sortedJobs = [...filteredJobs].sort((a, b) => 
    new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
  );

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Career Opportunities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exciting career opportunities at the intersection of veterinary medicine and technology. 
            Find your next role in companies that value veterinary expertise in the tech industry.
          </p>
        </div>

        {/* Job Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{jobs.length}+</div>
            <div className="text-gray-700">Active Job Listings</div>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-700">Partner Companies</div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
            <div className="text-gray-700">Placement Success Rate</div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="w-full lg:w-2/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search jobs by title, company, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Location Filter */}
            <div className="w-full lg:w-1/3">
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Locations</option>
                <option value="remote">Remote</option>
                <option value="CA">California</option>
                <option value="TX">Texas</option>
                <option value="NY">New York</option>
                <option value="MA">Massachusetts</option>
                <option value="WA">Washington</option>
                <option value="IL">Illinois</option>
                <option value="CO">Colorado</option>
                <option value="DC">Washington DC</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6">
            <p className="text-gray-600">
              Showing {sortedJobs.length} of {jobs.length} jobs
              {searchTerm && ` for "${searchTerm}"`}
              {locationFilter !== 'all' && ` in ${locationFilter === 'remote' ? 'Remote' : locationFilter}`}
            </p>
          </div>
        </div>

        {/* Job Listings */}
        <section className="mb-16">
          {sortedJobs.length > 0 ? (
            <div className="space-y-6">
              {sortedJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6m0 0v6m0-6H8m0 0v6m0-6H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No jobs found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or location filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setLocationFilter('all');
                }}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        {/* Career Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Career Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Resume Templates
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Download veterinarian-specific resume templates optimized for technology roles.
              </p>
              <a href="/resources" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Access Templates →
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Mentorship Program
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Connect with experienced veterinarians who have successfully transitioned to tech.
              </p>
              <a href="/collaboration" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Find a Mentor →
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Skill Building Courses
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Learn essential tech skills through our curated course recommendations.
              </p>
              <a href="/resources" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Browse Courses →
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Post a Job Opportunity
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Are you hiring veterinarians for technology roles? Reach our qualified community 
            of vet tech professionals actively seeking new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/collaboration"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Post a Job
            </a>
            <a
              href="/contact"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Learn About Hiring
            </a>
          </div>
        </section>

        {/* Job Alerts */}
        <section className="mt-16 text-center">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Never Miss an Opportunity
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Get notified about new job postings that match your interests and experience level. 
              Customize your alerts and stay ahead of the competition.
            </p>
            <a
              href="/join"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Set Up Job Alerts
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}