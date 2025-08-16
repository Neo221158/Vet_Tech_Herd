'use client';

import { useState } from 'react';

const CollaborationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    idea: '',
    collaborationType: '',
    timeline: '',
    resources: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual form handler
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Thank You for Your Collaboration Proposal!
        </h3>
        <p className="text-gray-600 mb-6">
          We've received your collaboration idea and will review it carefully. 
          Our team will get back to you within 3-5 business days to discuss next steps.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              organization: '',
              role: '',
              idea: '',
              collaborationType: '',
              timeline: '',
              resources: ''
            });
          }}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Submit Another Proposal
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Propose a Collaboration
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
            Organization
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Company or institution"
          />
        </div>
        
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
            Your Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., Product Manager, Veterinarian, Founder"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="collaborationType" className="block text-sm font-medium text-gray-700 mb-2">
          Type of Collaboration *
        </label>
        <select
          id="collaborationType"
          name="collaborationType"
          required
          value={formData.collaborationType}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select collaboration type</option>
          <option value="research">Research Project</option>
          <option value="product">Product Development</option>
          <option value="event">Event or Workshop</option>
          <option value="content">Content Creation</option>
          <option value="mentorship">Mentorship Program</option>
          <option value="partnership">Strategic Partnership</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="idea" className="block text-sm font-medium text-gray-700 mb-2">
          Collaboration Idea *
        </label>
        <textarea
          id="idea"
          name="idea"
          required
          rows={5}
          value={formData.idea}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Describe your collaboration idea, goals, and how it would benefit the veterinary technology community..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
            Proposed Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select timeline</option>
            <option value="immediate">Immediate (1-3 months)</option>
            <option value="short">Short-term (3-6 months)</option>
            <option value="medium">Medium-term (6-12 months)</option>
            <option value="long">Long-term (12+ months)</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="resources" className="block text-sm font-medium text-gray-700 mb-2">
            Resources Available
          </label>
          <input
            type="text"
            id="resources"
            name="resources"
            value={formData.resources}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., funding, expertise, platform access"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            'Submit Proposal'
          )}
        </button>
        
        <button
          type="button"
          onClick={() => setFormData({
            name: '',
            email: '',
            organization: '',
            role: '',
            idea: '',
            collaborationType: '',
            timeline: '',
            resources: ''
          })}
          className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
        >
          Clear Form
        </button>
      </div>
    </form>
  );
};

export default CollaborationForm;