'use client';

import { useState } from 'react';
import ResourceCard from '@/components/ResourceCard';
import { Resource } from '@/types';
import resourcesData from '@/data/resources.json';

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const resources = resourcesData as Resource[];
  
  // Get unique categories
  const categories = ['all', ...Array.from(new Set(resources.map(resource => resource.category)))];
  
  // Filter resources based on category and search term
  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Courses & Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Curated educational resources, tools, and training materials to help veterinarians 
            succeed in technology careers and stay current with industry developments.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search resources..."
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

            {/* Category Filter */}
            <div className="w-full lg:w-1/2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
                <span className="ml-2 text-xs">
                  ({category === 'all' ? resources.length : resources.filter(r => r.category === category).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing {filteredResources.length} of {resources.length} resources
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Resources Grid */}
        <section className="mb-16">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No resources found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Have a Resource to Share?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Know of a great course, tool, or resource that would benefit our community? 
            We'd love to hear about it and potentially add it to our collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/collaboration"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Suggest a Resource
            </a>
            <a
              href="/contact"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 text-center">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated on New Resources
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Get notified when we add new courses, tools, and educational materials 
              to help advance your career in veterinary technology.
            </p>
            <a
              href="/join"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Subscribe to Updates
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}