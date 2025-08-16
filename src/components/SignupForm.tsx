'use client';

import { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    veterinaryStatus: '',
    currentRole: '',
    experience: '',
    interests: [] as string[],
    location: '',
    linkedinUrl: '',
    newsletter: true,
    jobAlerts: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    'AI & Machine Learning',
    'Data Science',
    'Product Management',
    'Software Engineering',
    'UX/UI Design',
    'Regulatory Affairs',
    'Business Development',
    'Telemedicine',
    'Digital Health',
    'Entrepreneurship',
    'Research & Development',
    'Consulting'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual form handler
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Welcome to The Vet Tech Herd! 🎉
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for joining our community! You'll receive a welcome email shortly with 
          information about upcoming events, resources, and how to connect with other members.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-blue-900 mb-2">Next Steps:</h4>
          <ul className="text-blue-800 text-sm space-y-1 text-left">
            <li>• Check your email for the welcome message</li>
            <li>• Join our LinkedIn group for networking</li>
            <li>• Browse our upcoming events</li>
            <li>• Explore career opportunities</li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/events"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View Events
          </a>
          <a
            href="/"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Join The Vet Tech Herd
        </h3>
        <p className="text-gray-600">
          Connect with veterinarians in technology and advance your career
        </p>
      </div>
      
      {/* Personal Information */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your first name"
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your last name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
          
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="City, State/Country"
            />
          </div>
        </div>
      </div>

      {/* Professional Background */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Professional Background</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="veterinaryStatus" className="block text-sm font-medium text-gray-700 mb-2">
              Veterinary Status *
            </label>
            <select
              id="veterinaryStatus"
              name="veterinaryStatus"
              required
              value={formData.veterinaryStatus}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select your status</option>
              <option value="licensed_dvm">Licensed Veterinarian (DVM/VMD)</option>
              <option value="vet_student">Veterinary Student</option>
              <option value="resident">Veterinary Resident</option>
              <option value="technician">Veterinary Technician</option>
              <option value="related_field">Related Field Professional</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
              Years of Experience
            </label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select experience level</option>
              <option value="student">Student/In Training</option>
              <option value="0-2">0-2 years</option>
              <option value="3-5">3-5 years</option>
              <option value="6-10">6-10 years</option>
              <option value="11-15">11-15 years</option>
              <option value="15+">15+ years</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="currentRole" className="block text-sm font-medium text-gray-700 mb-2">
            Current Role/Position
          </label>
          <input
            type="text"
            id="currentRole"
            name="currentRole"
            value={formData.currentRole}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., Product Manager at VetTech Co, Clinical Veterinarian, etc."
          />
        </div>

        <div className="mt-6">
          <label htmlFor="linkedinUrl" className="block text-sm font-medium text-gray-700 mb-2">
            LinkedIn Profile (Optional)
          </label>
          <input
            type="url"
            id="linkedinUrl"
            name="linkedinUrl"
            value={formData.linkedinUrl}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="https://linkedin.com/in/yourprofile"
          />
        </div>
      </div>

      {/* Interests */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Areas of Interest</h4>
        <p className="text-gray-600 mb-4 text-sm">Select all that apply to help us connect you with relevant opportunities and content.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {interestOptions.map((interest) => (
            <label key={interest} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.interests.includes(interest)}
                onChange={() => handleInterestChange(interest)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">{interest}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Preferences */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Communication Preferences</h4>
        <div className="space-y-3">
          <label className="flex items-start">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleInputChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
            />
            <div className="ml-3">
              <span className="text-sm font-medium text-gray-700">Monthly Newsletter</span>
              <p className="text-xs text-gray-500">Receive updates on events, resources, and community highlights</p>
            </div>
          </label>
          
          <label className="flex items-start">
            <input
              type="checkbox"
              name="jobAlerts"
              checked={formData.jobAlerts}
              onChange={handleInputChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
            />
            <div className="ml-3">
              <span className="text-sm font-medium text-gray-700">Job Opportunity Alerts</span>
              <p className="text-xs text-gray-500">Get notified about relevant job postings and career opportunities</p>
            </div>
          </label>
        </div>
      </div>

      {/* Submit Button */}
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
              Joining The Herd...
            </>
          ) : (
            'Join The Vet Tech Herd'
          )}
        </button>
        
        <button
          type="button"
          onClick={() => setFormData({
            firstName: '',
            lastName: '',
            email: '',
            veterinaryStatus: '',
            currentRole: '',
            experience: '',
            interests: [],
            location: '',
            linkedinUrl: '',
            newsletter: true,
            jobAlerts: false
          })}
          className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
        >
          Clear Form
        </button>
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          By joining, you agree to our terms of service and privacy policy. 
          We respect your privacy and will never share your information with third parties.
        </p>
      </div>
    </form>
  );
};

export default SignupForm;