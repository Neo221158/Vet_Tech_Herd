import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - The Vet Tech Herd',
  description: 'Learn about The Vet Tech Herd\'s mission to connect veterinarians in technology and drive innovation in veterinary tech.',
};

export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About The Vet Tech Herd
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging the gap between veterinary expertise and technological innovation 
            to create a better future for animal health and welfare.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Vet Tech Herd exists to create a thriving community where veterinarians 
              working in technology can connect, collaborate, and drive meaningful innovation. 
              We believe that the unique perspective of veterinary professionals is essential 
              for developing technology solutions that truly serve animal health and welfare.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By fostering connections between like-minded professionals, sharing knowledge 
              and best practices, and creating opportunities for collaboration, we aim to 
              amplify the impact of veterinarians in the technology sector and accelerate 
              innovations that benefit animals, their owners, and the veterinary profession as a whole.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We envision a future where veterinary professionals are recognized as 
                key drivers of innovation in technology, particularly in areas that 
                impact animal health, welfare, and the human-animal bond.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through our community, we aim to create a network effect that accelerates 
                the development of breakthrough technologies, from AI-powered diagnostic 
                tools to innovative telemedicine platforms and beyond.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Focus Areas</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">Veterinary technology innovation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">Digital health solutions for animals</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">Data science and AI in veterinary medicine</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">Telemedicine and remote care platforms</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">Practice management and workflow optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Who We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Practicing Veterinarians in Tech
              </h3>
              <p className="text-gray-600">
                Licensed veterinarians working in technology companies, startups, 
                or developing tech solutions for the veterinary industry.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Veterinary Students & Residents
              </h3>
              <p className="text-gray-600">
                Future veterinarians interested in technology careers and 
                current students exploring opportunities at the intersection of veterinary medicine and tech.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Innovators & Entrepreneurs
              </h3>
              <p className="text-gray-600">
                Veterinarians building their own technology solutions, 
                founding startups, or leading innovation initiatives within larger organizations.
              </p>
            </div>
          </div>
        </section>

        {/* Why This Community Exists */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why This Community Exists</h2>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Challenge</h3>
                <p className="text-gray-600 mb-6">
                  Veterinarians entering the technology sector often face unique challenges: 
                  translating clinical expertise into tech contexts, navigating career transitions, 
                  and finding mentorship from professionals who understand both domains.
                </p>
                <p className="text-gray-600">
                  Meanwhile, technology companies developing veterinary solutions often lack 
                  deep clinical insight, leading to products that don&apos;t fully address real-world veterinary needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Solution</h3>
                <p className="text-gray-600 mb-6">
                  The Vet Tech Herd bridges this gap by creating a space where veterinary 
                  professionals can share experiences, learn from each other, and collaborate 
                  on meaningful projects that leverage their unique expertise.
                </p>
                <p className="text-gray-600">
                  We facilitate connections that lead to better products, more informed 
                  career decisions, and ultimately, improved outcomes for animals and the veterinary profession.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a veterinarian already working in tech, exploring a career transition, 
            or passionate about veterinary innovation, we'd love to have you as part of our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/join"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Join The Herd
            </a>
            <a
              href="/contact"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}