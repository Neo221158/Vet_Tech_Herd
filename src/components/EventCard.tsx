import { Event } from '@/types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const eventDate = new Date(event.date);
  const isUpcoming = eventDate > new Date();

  return (
    <div className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {event.title}
            </h3>
            <div className="flex items-center text-gray-600 mb-2">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">
                {eventDate.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm">{event.location}</span>
            </div>
          </div>
          <div className="ml-4">
            {isUpcoming ? (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Upcoming
              </span>
            ) : (
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                Past Event
              </span>
            )}
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 line-clamp-3">
          {event.description}
        </p>
        
        {isUpcoming && (
          <div className="flex justify-between items-center">
            <a
              href={event.rsvpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              RSVP Now
            </a>
            <span className="text-sm text-gray-500">
              Don't miss out!
            </span>
          </div>
        )}
        
        {!isUpcoming && (
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">
              Event completed
            </span>
            {event.rsvpLink && (
              <a
                href={event.rsvpLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                View Details →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;