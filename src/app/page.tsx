import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSI0MCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              Veterinary innovation moves at the speed of{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                community
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Where veterinarians in technology converge to shape the future of animal health through collaboration, knowledge sharing, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/join"
                className="bg-white text-slate-900 px-12 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 transition-all duration-200 transform hover:scale-105 shadow-xl"
              >
                Join the Herd
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-pulse delay-75"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-500 rounded-full opacity-20 animate-pulse delay-150"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Built for veterinary professionals who{' '}
              <span className="text-purple-600">innovate</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to connect, collaborate, and create breakthrough solutions in veterinary technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Feature 1 */}
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Amplify Your Impact
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Showcase your expertise and contributions to the tech industry. Join a community that recognizes the unique value veterinarians bring to technology companies.
              </p>
              <Link href="/careers" className="inline-flex items-center text-purple-600 font-semibold text-lg hover:text-purple-700 transition-colors">
                Explore Opportunities 
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-12 text-center">
              <div className="text-6xl font-bold text-purple-600 mb-4">500+</div>
              <p className="text-xl text-slate-700">Veterinarians in Tech</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Feature 2 */}
            <div className="lg:order-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Knowledge That Matters
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Access cutting-edge research, best practices, and insights from veterinary technology leaders. Stay ahead of industry trends and emerging technologies.
              </p>
              <Link href="/resources" className="inline-flex items-center text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors">
                Browse Resources
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="lg:order-1 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-12 text-center">
              <div className="text-6xl font-bold text-blue-600 mb-4">1,200+</div>
              <p className="text-xl text-slate-700">Research Articles Shared</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Feature 3 */}
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Collaborative Innovation
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Partner with like-minded professionals on projects that advance animal health. From startups to established companies, find your next collaboration.
              </p>
              <Link href="/collaboration" className="inline-flex items-center text-green-600 font-semibold text-lg hover:text-green-700 transition-colors">
                Start Collaborating
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-12 text-center">
              <div className="text-6xl font-bold text-green-600 mb-4">50+</div>
              <p className="text-xl text-slate-700">Active Collaborations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSI0MCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to shape the future of{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              veterinary tech?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the most innovative veterinarians in technology. Where breakthrough ideas meet passionate professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/join"
              className="bg-white text-slate-900 px-12 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 transition-all duration-200 transform hover:scale-105 shadow-xl"
            >
              Join the Community
            </Link>
            <Link
              href="/events"
              className="border-2 border-white text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-200"
            >
              Upcoming Events
            </Link>
          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-500 rounded-full opacity-10 animate-pulse delay-75"></div>
      </section>
    </div>
  );
}