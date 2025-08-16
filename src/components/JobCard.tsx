import { Job } from '@/types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const postedDate = new Date(job.postedDate);
  const daysAgo = Math.floor((Date.now() - postedDate.getTime()) / (1000 * 60 * 60 * 24));

  const getTimeBadge = () => {
    if (daysAgo <= 1) return { text: 'New', color: 'bg-green-100 text-green-800' };
    if (daysAgo <= 7) return { text: 'Recent', color: 'bg-blue-100 text-blue-800' };
    if (daysAgo <= 30) return { text: `${daysAgo}d ago`, color: 'bg-gray-100 text-gray-600' };
    return { text: 'Older', color: 'bg-gray-100 text-gray-500' };
  };

  const timeBadge = getTimeBadge();

  return (
    <div className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow p-6 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {job.title}
            </h3>
            <span className={`ml-3 px-2 py-1 rounded-full text-xs font-medium ${timeBadge.color}`}>
              {timeBadge.text}
            </span>
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m11 0a2 2 0 01-2 2H7a2 2 0 01-2-2m2-2h2m9-2h2m-4 0h2" />
            </svg>
            <span className="font-medium">{job.company}</span>
          </div>
          <div className="flex items-center text-gray-600 mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{job.location}</span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 mb-6 line-clamp-3">
        {job.description}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Posted {postedDate.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
          })}
        </div>
        <a
          href={job.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
        >
          Apply Now
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default JobCard;