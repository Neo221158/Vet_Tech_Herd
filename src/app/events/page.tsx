import { Metadata } from 'next';
import EventCard from '@/components/EventCard';
import { Event } from '@/types';
import eventsData from '@/data/events.json';

export const metadata: Metadata = {
  title: 'Events - The Vet Tech Herd',
  description: 'Join upcoming events and workshops for veterinarians in technology. Connect, learn, and collaborate with fellow vet tech professionals.',
};

export default function Events() {
  const events = eventsData as Event[];
  const upcomingEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate > new Date() || !event.isPast;
  });
  const pastEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate < new Date() || event.isPast;
  });

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Events & Workshops
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow veterinarians in technology through our curated events, 
            workshops, and networking opportunities designed to advance your career and knowledge.
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <div className="flex items-center text-green-600">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
              <span className="text-sm font-medium">Don't miss out!</span>
            </div>
          </div>
          
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No Upcoming Events Scheduled
              </h3>
              <p className="text-gray-600 mb-4">
                We're planning exciting new events! Check back soon or join our newsletter to be the first to know.
              </p>
              <a
                href="/join"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
              >
                Join Our Newsletter
              </a>
            </div>
          )}
        </section>

        {/* Past Events */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Past Events</h2>
            <div className="flex items-center text-gray-500">
              <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
              <span className="text-sm font-medium">Event Archive</span>
            </div>
          </div>
          
          {pastEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center py-8">
              No past events to display.
            </p>
          )}
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to Host an Event?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Have an idea for a workshop, panel discussion, or networking event? 
            We'd love to hear from you and help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/collaboration"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Propose an Event
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
              Stay Updated on Events
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Be the first to know about new events, workshops, and networking opportunities 
              in the veterinary technology community.
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