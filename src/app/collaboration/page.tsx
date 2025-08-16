import { Metadata } from 'next';
import CollaborationForm from '@/components/CollaborationForm';

export const metadata: Metadata = {
  title: 'Collaboration - The Vet Tech Herd',
  description: 'Partner with The Vet Tech Herd community to drive innovation in veterinary technology. Propose collaborations, partnerships, and joint initiatives.',
};

export default function Collaboration() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Collaborate with Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join forces with The Vet Tech Herd to create meaningful partnerships, 
            innovative projects, and collaborative initiatives that advance veterinary technology.
          </p>
        </div>

        {/* Collaboration Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ways to Collaborate
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Research Projects */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Research Projects
              </h3>
              <p className="text-gray-600 text-sm">
                Collaborate on studies exploring veterinary technology adoption, 
                effectiveness of digital health tools, or emerging trends in the field.
              </p>
            </div>

            {/* Product Development */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Product Development
              </h3>
              <p className="text-gray-600 text-sm">
                Partner with us to develop or improve veterinary technology products, 
                leveraging our community's clinical expertise and user feedback.
              </p>
            </div>

            {/* Educational Content */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Educational Content
              </h3>
              <p className="text-gray-600 text-sm">
                Create educational resources, courses, or training materials 
                to help veterinarians transition into or advance in technology careers.
              </p>
            </div>

            {/* Events & Workshops */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Events & Workshops
              </h3>
              <p className="text-gray-600 text-sm">
                Co-host conferences, workshops, webinars, or networking events 
                that bring together veterinarians and technology professionals.
              </p>
            </div>

            {/* Mentorship Programs */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Mentorship Programs
              </h3>
              <p className="text-gray-600 text-sm">
                Develop structured mentorship programs connecting experienced 
                professionals with those new to veterinary technology.
              </p>
            </div>

            {/* Strategic Partnerships */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6m0 0v6m0-6H8m0 0v6m0-6H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Strategic Partnerships
              </h3>
              <p className="text-gray-600 text-sm">
                Form long-term partnerships with organizations, institutions, 
                or companies to advance veterinary technology initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Collaboration Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                AI Diagnostic Tool Development
              </h3>
              <p className="text-gray-700 mb-4">
                Partnered with a leading AI company to provide veterinary expertise 
                for developing an automated diagnostic tool for companion animals. 
                Our community members contributed clinical insights and testing feedback.
              </p>
              <div className="text-sm text-gray-600">
                <span className="font-medium">Impact:</span> Improved diagnostic accuracy by 23%
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Veterinary School Tech Curriculum
              </h3>
              <p className="text-gray-700 mb-4">
                Collaborated with three veterinary schools to develop technology 
                modules for their curricula, preparing future veterinarians for 
                tech-enabled practice environments.
              </p>
              <div className="text-sm text-gray-600">
                <span className="font-medium">Impact:</span> 450+ students trained annually
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration Form */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Collaborate?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We'd love to hear your collaboration ideas. Fill out the form below 
              and our team will get back to you to discuss potential partnerships.
            </p>
          </div>
          
          <CollaborationForm />
        </section>

        {/* Additional Contact Info */}
        <section className="mt-16 text-center">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Prefer to Discuss Directly?
            </h3>
            <p className="text-gray-600 mb-6">
              For complex partnerships or strategic collaborations, 
              we're happy to schedule a call to discuss your ideas in detail.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Schedule a Call
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}