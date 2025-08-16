import { Metadata } from 'next';
import SignupForm from '@/components/SignupForm';

export const metadata: Metadata = {
  title: 'Join Us - The Vet Tech Herd',
  description: 'Join The Vet Tech Herd community of veterinarians in technology. Connect, collaborate, and advance your career in veterinary tech.',
};

export default function Join() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join The Vet Tech Herd
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with a thriving community of veterinarians working in technology. 
            Access exclusive resources, networking opportunities, and career support.
          </p>
        </div>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Membership Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Networking */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Exclusive Networking
              </h3>
              <p className="text-gray-700 text-sm">
                Connect with like-minded veterinarians in technology through our 
                private LinkedIn group, WhatsApp community, and local meetups.
              </p>
            </div>

            {/* Career Support */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Career Advancement
              </h3>
              <p className="text-gray-700 text-sm">
                Access job opportunities, mentorship programs, resume reviews, 
                and career transition support from experienced professionals.
              </p>
            </div>

            {/* Educational Resources */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Learning Resources
              </h3>
              <p className="text-gray-700 text-sm">
                Get early access to courses, webinars, research papers, and 
                industry insights to stay current with veterinary technology trends.
              </p>
            </div>

            {/* Events */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Exclusive Events
              </h3>
              <p className="text-gray-700 text-sm">
                Priority access to workshops, conferences, panel discussions, 
                and networking events designed specifically for vet tech professionals.
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 011 1v1a2 2 0 104 0V4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Collaboration Opportunities
              </h3>
              <p className="text-gray-700 text-sm">
                Participate in research projects, product development initiatives, 
                and consulting opportunities that leverage your veterinary expertise.
              </p>
            </div>

            {/* Industry Insights */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Industry Insights
              </h3>
              <p className="text-gray-700 text-sm">
                Receive market reports, trend analyses, and insider perspectives 
                on the veterinary technology landscape and investment opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Join Our Growing Community
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600 text-sm">Active Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600 text-sm">Tech Companies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                <div className="text-gray-600 text-sm">Monthly Events</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                <div className="text-gray-600 text-sm">Member Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Our Members Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">SM</span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Dr. Sarah Martinez</div>
                  <div className="text-gray-600 text-sm">Product Manager at PetHealth</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The Vet Tech Herd helped me transition from clinical practice to product management. 
                The mentorship and networking opportunities were invaluable in landing my dream job."
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">MJ</span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Dr. Michael Johnson</div>
                  <div className="text-gray-600 text-sm">AI Research Scientist</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Being part of this community opened doors I didn't even know existed. 
                The collaboration opportunities and industry insights are phenomenal."
              </p>
            </div>
          </div>
        </section>

        {/* Signup Form */}
        <section>
          <SignupForm />
        </section>

        {/* Alternative Contact Methods */}
        <section className="mt-16">
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Prefer to Connect Directly?
            </h3>
            <p className="text-gray-600 mb-6">
              Have questions about membership or want to learn more before joining? 
              We're here to help and would love to chat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="mailto:hello@vettechherd.com"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}